window.quizMode = false;
let gameType = 'speed', currentTargetId = null, score = 0, timer = null, timeLeft = 0, currentPool = [];
let hintStage = 0, blackoutActiveIds = [], currentP = 0, currentN = 0, currentShells = [0,0,0,0,0,0,0];

let isCheckingAnswer = false; 
let resultTimeout = null; // 2초 대기 타이머 변수

const easyIds = Array.from({length: 20}, (_, i) => String(i + 1));
const hardIds = [...easyIds, "26", "29", "30", "35", "47", "53", "56", "78", "79", "80", "82"];
const masterIds = [...Array.from({length: 30}, (_, i) => String(i + 1)), "35", "36", "37", "38", "42", "46", "47", "48", "50", "51", "53", "54", "55", "56", "74", "78", "79", "80", "82", "86", "92", "94"];

function toggleQuizMode() {
    window.quizMode = !window.quizMode;
    const btn = document.getElementById('quiz-toggle-btn');
    if (window.quizMode) {
        document.body.classList.add('quiz-active');
        btn.innerText = "[ 🛑 QUIT ]"; 
        btn.classList.add('quit-mode'); 
        
        document.getElementById('standardInfo').style.display = 'none';
        document.getElementById('quizInfo').style.display = 'block';
        document.getElementById('monitor').style.display = 'block';
        window.startAtomRender(0,0,[], "#888"); 
        showGameSelection();
    } else { stopQuiz(); }
}

function clearBlackout() {
    [...blackoutActiveIds].forEach(id => {
        const k = document.querySelector(`.key[data-id="${id}"]`);
        if (k) {
            k.style.background = "";
            k.querySelector('b').style.visibility = "visible";
            k.querySelector('span').style.visibility = "visible";
        }
    });
    blackoutActiveIds = [];
}

function showGameSelection() {
    clearBlackout(); 
    document.getElementById('headerTitle').innerText = "CHOOSE MISSION";
    document.getElementById('headerTitle').style.color = "#ffaa00";
    
    document.getElementById('quizInfo').innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; padding:10px;">
            <button onclick="setGameType('speed')" style="padding:15px; background:#ffaa00; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">1. SPEED SCANNER</button>
            <button onclick="setGameType('blind')" style="padding:15px; background:#00f3ff; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">2. BLIND GUESS</button>
            <button onclick="setGameType('blackout')" style="padding:15px; background:#555; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">3. BLACKOUT</button>
            <button onclick="setGameType('builder')" style="padding:15px; background:#ff66b3; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">4. ATOM BUILDER</button>
            
            <button onclick="location.href='meteor.html'" style="grid-column: span 2; padding:15px; background:linear-gradient(90deg, #ff4d4d, #b366ff); border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer; font-size:16px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); box-shadow: 0 4px 15px rgba(255,77,77,0.4);">
                ☄️ 5. METEOR DEFENSE (타자 게임) 🚀
            </button>
        </div>`;
}

function setGameType(t) { gameType = t; showDifficultySelection(); }
function showDifficultySelection() {
    const winScore = (gameType === 'speed') ? 300 : 100;
    document.getElementById('headerTitle').innerText = "SELECT DIFFICULTY";
    document.getElementById('headerTitle').style.color = "#ffffff";
    document.getElementById('quizInfo').innerHTML = `
        <div style="text-align:center; padding:10px;">
            <p style="color: #aaa; margin-bottom: 10px; font-size: 14px;">목표 점수: ${winScore}점</p>
            <button onclick="startGame('easy')" style="width:30%; padding:10px; margin:5px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">EASY</button>
            <button onclick="startGame('hard')" style="width:30%; padding:10px; margin:5px; background:#ff4d4d; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">HARD</button>
            <button onclick="startGame('master')" style="width:30%; padding:10px; margin:5px; background:#b366ff; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">MASTER</button>
        </div>`;
}

function startGame(m) {
    score = 0; isCheckingAnswer = false; 
    currentPool = (m === 'easy') ? easyIds : (m === 'hard' ? hardIds : masterIds);
    if (gameType === 'blackout') { 
        applyBlackout(); 
        renderBlackout(); 
        window.startAtomRender(0,0,[],"#555");
    } else nextQuestion();
}

function nextQuestion() {
    currentTargetId = currentPool[Math.floor(Math.random() * currentPool.length)];
    const t = elementDB[currentTargetId]; 
    
    if (gameType === 'speed') { 
        renderSpeed(t); 
        window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, "#ffaa00");
        startTimer(5); 
    }
    else if (gameType === 'blind') { 
        hintStage = 1; 
        renderBlind(t); 
        window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, "#00f3ff");
        startTimer(22); 
    }
    else if (gameType === 'builder') { 
        currentP=0; currentN=0; currentShells=[0,0,0,0,0,0,0]; 
        renderBuilder(t); 
        window.startAtomRender(0,0,[],"#ff66b3"); 
        startTimer(45); 
    }
}

function renderBuilder(t) {
    document.getElementById('headerTitle').innerText = "QUEST: ATOM BUILDER";
    document.getElementById('headerTitle').style.color = "#ff66b3";
    const massNumber = t.structure.protons + t.structure.neutrons;

    let shells = ''; const names = ['K','L','M','N','O','P','Q'];
    for(let i=0; i<t.structure.shells.length; i++) {
        shells += `<div style="display:inline-block; margin:2px; background:rgba(0,243,255,0.1); padding:4px; border-radius:4px;">
            <div style="font-size:10px;">${names[i]}</div>
            <button onclick="changeShell(${i},-1)" style="cursor:pointer;">-</button><span id="valS${i}" style="margin:0 4px;">0</span><button onclick="changeShell(${i},1)" style="cursor:pointer;">+</button>
        </div>`;
    }
    
    document.getElementById('quizInfo').innerHTML = `
        <div style="font-size:13px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <div>
                    TARGET: <b style="color:#ff66b3; font-size:16px;">${t.nameKo}</b>
                    <span style="color:#aaa; font-size:12px; margin-left:8px;">(번호: ${t.id} / 질량수: <b style="color:#fff;">${massNumber}</b>)</span>
                </div>
                <span>SCORE: <b>${score}</b> | TIME: <b id="timerText" style="color:#ff4d4d;">45.0</b></span>
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:5px; margin-bottom:8px;">
                양성자: <button onclick="changePN('P',-1)" style="cursor:pointer;">-</button> <span id="valP">0</span> <button onclick="changePN('P',1)" style="cursor:pointer;">+</button> |
                중성자: <button onclick="changePN('N',-1)" style="cursor:pointer;">-</button> <span id="valN">0</span> <button onclick="changePN('N',1)" style="cursor:pointer;">+</button>
            </div>
            <div>${shells}</div>
            <button onclick="submitBuilder()" style="width:100%; padding:10px; margin-top:10px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; color:#000; cursor:pointer;">BUILD COMPLETE</button>
        </div>`;
}

function changePN(type, d) { if(type==='P') currentP=Math.max(0,currentP+d); else currentN=Math.max(0,currentN+d); document.getElementById('valP').innerText=currentP; document.getElementById('valN').innerText=currentN; refreshCanvas(); }
function changeShell(i, d) { currentShells[i]=Math.max(0,currentShells[i]+d); document.getElementById('valS'+i).innerText=currentShells[i]; refreshCanvas(); }
function refreshCanvas() { window.startAtomRender(currentP, currentN, currentShells.filter(s=>s>0), "#ff66b3"); }

function submitBuilder() {
    const t = elementDB[currentTargetId]; 
    if (currentP===t.structure.protons && currentN===t.structure.neutrons && t.structure.shells.every((v,i)=>v===currentShells[i])) {
        score+=10; if(score>=100) gameClear(); else nextQuestion();
    } else gameOver();
}

function renderSpeed(t) { 
    document.getElementById('headerTitle').innerText = "QUEST: SPEED SCANNER";
    document.getElementById('headerTitle').style.color = "#ffaa00";
    document.getElementById('quizInfo').innerHTML = `<div style="text-align:center;"><h2>${t.nameKo}</h2><h1 style="font-size:60px; color:#ffaa00; margin:10px 0;">${t.symbol}</h1><div>SCORE: ${score} | TIME: <b id="timerText">5.0</b></div></div>`; 
}

function renderBlind(t) { 
    document.getElementById('headerTitle').innerText = "QUEST: BLIND GUESS";
    document.getElementById('headerTitle').style.color = "#00f3ff";
    document.getElementById('quizInfo').innerHTML = `<div id="hint-area" style="min-height:100px; font-size:14px; line-height:1.6; border-left:2px solid #00f3ff; padding-left:10px;"></div><div style="text-align:right;">TIME: <b id="timerText">22.0</b></div>`; 
    showHint(t); 
}

function showHint(t) {
    const area = document.getElementById('hint-area'); if(!area) return;
    let txt = hintStage===1 ? `> [분류] ${t.info.category}` : (hintStage===2 ? `> [특징] ${t.info.description}` : `> [활용] ${t.info.usage[0].icon} ${t.info.usage[0].text}`);
    let line = document.createElement('div'); area.appendChild(line);
    let i=0; let itv = setInterval(()=>{ line.innerText+=txt[i++]; if(i>=txt.length){ clearInterval(itv); if(hintStage<3){ hintStage++; setTimeout(()=>showHint(t),3500);}} },30);
}

function applyBlackout() { 
    blackoutActiveIds = [...currentPool]; 
    blackoutActiveIds.forEach(id=>{ 
        const k=document.querySelector(`.key[data-id="${id}"]`); 
        if(k){ 
            k.style.background="#000"; 
            k.querySelector('b').style.visibility="hidden"; 
            k.querySelector('span').style.visibility="hidden"; 
        }
    }); 
}

function renderBlackout() { 
    document.getElementById('headerTitle').innerText = "QUEST: BLACKOUT";
    document.getElementById('headerTitle').style.color = "#ffffff";
    
    // 🌟 input 태그 안에 onkeydown="if(event.key === 'Enter') submitBlackout()" 코드가 추가되었습니다!
    document.getElementById('quizInfo').innerHTML = `<div style="text-align:center;"><p style="color:#aaa; font-size:14px;">검은색으로 변한 키를 눌러 복구하세요</p><h3 style="color:#00ff88;">RESTORED: ${score} / 100</h3><div id="bk-input" style="display:none; margin-top:15px; background:rgba(255,255,255,0.05); padding:10px; border-radius:8px;"><span id="bk-target" style="font-weight:bold; margin-right:10px; color:#ffaa00;"></span> <input type="text" id="bk-val" onkeydown="if(event.key === 'Enter') submitBlackout()" style="width:60px; text-align:center; padding:5px; font-family:'Orbitron'; background:#222; color:#fff; border:1px solid #555;"> <button onclick="submitBlackout()" style="padding:5px 15px; cursor:pointer; background:#00ff88; font-weight:bold; border:none; border-radius:3px;">OK</button></div></div>`; 
}
function submitBlackout() { 
    const val = document.getElementById('bk-val').value.trim().toLowerCase(); 
    if(val === elementDB[currentTargetId].symbol.toLowerCase()){ 
        score+=10; 
        restoreKey(currentTargetId); 
        if(score>=100) gameClear(); 
        else { 
            document.getElementById('bk-input').style.display='none'; 
            window.startAtomRender(0,0,[],"#555");
        } 
    } else gameOver(); 
}

function restoreKey(id) { 
    const k=document.querySelector(`.key[data-id="${id}"]`); 
    if (k) {
        k.style.background=""; 
        k.querySelector('b').style.visibility="visible"; 
        k.querySelector('span').style.visibility="visible"; 
    }
    const idx = blackoutActiveIds.indexOf(String(id)); 
    if(idx>-1) blackoutActiveIds.splice(idx,1); 
}

function startTimer(s) { if(timer) clearInterval(timer); timeLeft=s; timer=setInterval(()=>{ timeLeft-=0.1; const tx=document.getElementById('timerText'); if(tx) tx.innerText=Math.max(0,timeLeft).toFixed(1); if(timeLeft<=0){ clearInterval(timer); gameOver(); } },100); }

function checkQuizAnswer(id) { 
    if(isCheckingAnswer) return; 

    if(gameType==='blackout'){ 
        if(blackoutActiveIds.includes(String(id))){
            currentTargetId=id; 
            const t = elementDB[id]; 
            window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, "#ffffff");
            document.getElementById('bk-input').style.display='block'; 
            document.getElementById('bk-target').innerText=t.nameKo; 
            document.getElementById('bk-val').value = '';
            document.getElementById('bk-val').focus(); 
        }
        return; 
    } 
    if(gameType==='builder') return; 
    
    const winScore = (gameType === 'speed') ? 300 : 100;
    const isCorrect = (String(id) === currentTargetId);
    const t = elementDB[currentTargetId]; 

    if(gameType === 'blind') {
        isCheckingAnswer = true;
        clearInterval(timer); 

        document.getElementById('quizInfo').innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <h2 style="color:${isCorrect ? '#00ff88' : '#ff4d4d'}; margin-bottom:15px;">
                    ${isCorrect ? '정답입니다! 🎉' : '오답입니다! 💥'}
                </h2>
                <p style="font-size:14px; color:#aaa;">해당 힌트의 원소는 바로...</p>
                <h1 style="color:#ffaa00; font-size:36px; margin:10px 0;">${t.nameKo} <span style="font-size:24px; color:#ddd;">(${t.symbol})</span></h1>
            </div>
        `;
        
        window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, isCorrect ? "#00ff88" : "#ff4d4d");

        // 이전 타이머 완전 초기화
        if(resultTimeout) clearTimeout(resultTimeout);

        resultTimeout = setTimeout(() => {
            // 기다리는 동안 사용자가 퀴즈를 껐다면 작동 중지
            if(!window.quizMode) return; 
            
            isCheckingAnswer = false;
            if(isCorrect) {
                score += 10;
                if(score >= winScore) gameClear();
                else nextQuestion();
            } else {
                gameOver();
            }
        }, 2000);
        return;
    }
    
    if(isCorrect){ 
        score+=10; 
        if(score >= winScore) gameClear(); 
        else nextQuestion(); 
    } else gameOver(); 
}

function stopQuiz() { 
    window.quizMode=false; 
    isCheckingAnswer = false; 
    
    clearInterval(timer); 
    // 진행 중이던 블라인드 모드 결과 타이머 무조건 삭제
    if(resultTimeout) clearTimeout(resultTimeout); 
    
    document.body.classList.remove('quiz-active'); 
    
    const btn = document.getElementById('quiz-toggle-btn');
    if (btn) {
        btn.innerText = "[ 🎮 QUIZ MODE ]";
        btn.classList.remove('quit-mode'); 
    }

    document.getElementById('standardInfo').style.display='block'; 
    document.getElementById('quizInfo').style.display='none'; 
    document.getElementById('monitor').style.display='none'; 
    
    clearBlackout(); 
}

function gameClear() { 
    clearInterval(timer); 
    window.startAtomRender(0,0,[], "#00ff88");
    document.getElementById('headerTitle').innerText = "MISSION SUCCESS";
    document.getElementById('headerTitle').style.color = "#00ff88";
    document.getElementById('quizInfo').innerHTML=`<div style="text-align:center; padding:20px;"><h1 style="color:#00ff88;">🎉 시스템 복구 완료</h1><button onclick="showGameSelection()" style="padding:10px 20px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">NEW MISSION</button></div>`; 
}

function gameOver() { 
    clearInterval(timer); 
    const t = elementDB[currentTargetId]; 
    window.startAtomRender(0,0,[], "#ff4d4d");
    
    document.getElementById('headerTitle').innerText = "SYSTEM CRITICAL";
    document.getElementById('headerTitle').style.color = "#ff4d4d";
    document.getElementById('quizInfo').innerHTML = `
        <div style="text-align:center; padding:10px;">
            <h2 style="color:#ff4d4d; margin-bottom: 10px;">FAILED</h2>
            <div style="background: rgba(255,77,77,0.1); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <span style="color:#aaa; font-size:12px;">놓친 정답 유닛:</span><br>
                <b style="color:#ffaa00; font-size:24px;">${t ? t.nameKo + ' (' + t.symbol + ')' : '-'}</b>
            </div>
            <button onclick="stopQuiz()" style="padding:10px 20px; background:#ff4d4d; border:none; border-radius:5px; color: white; font-weight:bold; cursor:pointer;">주기율표로 돌아가기</button>
        </div>
    `; 
}