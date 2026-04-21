window.quizMode = false;
let gameType = 'speed', currentTargetId = null, score = 0, timer = null, timeLeft = 0, currentPool = [];
let hintStage = 0, blackoutActiveIds = [], currentP = 0, currentN = 0, currentShells = [0,0,0,0,0,0,0];

let isCheckingAnswer = false; 
let resultTimeout = null; 
let hintInterval = null;
let hintTimeout = null;

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

function showGameSelection() {
    clearBlackout(); 
    document.getElementById('headerTitle').innerText = "CHOOSE MISSION";
    document.getElementById('headerTitle').style.color = "#ffaa00";
    
    document.getElementById('quizInfo').innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; padding:10px;">
            <button onclick="setGameType('speed')" style="padding:15px; background:#ffaa00; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">1. SPEED SCANNER</button>
            <button onclick="setGameType('blind')" style="padding:15px; background:#00f3ff; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">2. BLIND GUESS</button>
            <button onclick="setGameType('blackout')" style="padding:15px; background:#555; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">3. BLACKOUT (DRAG)</button>
            <button onclick="setGameType('builder')" style="padding:15px; background:#ff66b3; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">4. ATOM BUILDER</button>
            
            <button onclick="location.href='meteor.html'" style="grid-column: span 2; padding:15px; background:linear-gradient(90deg, #ff4d4d, #b366ff); border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer; font-size:16px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); box-shadow: 0 4px 15px rgba(255,77,77,0.4);">
                ☄️ 5. METEOR DEFENSE (타자 게임) 🚀
            </button>

            <button onclick="location.href='puzzle.html'" style="grid-column: span 2; padding:15px; background:linear-gradient(90deg, #00f3ff, #00ff88); border:none; border-radius:5px; font-weight:bold; color:#000; cursor:pointer; font-size:16px; text-shadow: 0 1px 2px rgba(255,255,255,0.5); box-shadow: 0 4px 15px rgba(0,243,255,0.4);">
                🧩 6. COSMIC ATOM PANG (매치3 퍼즐) 🌌
            </button>

            <button onclick="location.href='alchemist.html'" style="grid-column: span 2; padding:15px; background:linear-gradient(90deg, #b366ff, #00f3ff); border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer; font-size:16px; text-shadow: 0 2px 4px rgba(0,0,0,0.8); box-shadow: 0 4px 15px rgba(179,102,255,0.5);">
                ⚗️ 7. COSMIC ALCHEMIST (화합물 연금술) ✨
            </button>
        </div>`;
}
function setGameType(t) { gameType = t; showDifficultySelection(); }

function showDifficultySelection() {
    let goalText = "";
    if(gameType === 'speed') goalText = "목표 점수: 300점";
    else if(gameType === 'blind' || gameType === 'builder') goalText = "목표 점수: 100점";
    else if(gameType === 'blackout') goalText = "목표: 화면의 모든 원소 복구";

    document.getElementById('headerTitle').innerText = "SELECT DIFFICULTY";
    document.getElementById('headerTitle').style.color = "#ffffff";
    document.getElementById('quizInfo').innerHTML = `
        <div style="text-align:center; padding:10px;">
            <p style="color: #aaa; margin-bottom: 10px; font-size: 14px;">${goalText}</p>
            <button onclick="startGame('easy')" style="width:30%; padding:10px; margin:5px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">EASY<br><span style="font-size:11px">20개</span></button>
            <button onclick="startGame('hard')" style="width:30%; padding:10px; margin:5px; background:#ff4d4d; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">HARD<br><span style="font-size:11px">31개</span></button>
            <button onclick="startGame('master')" style="width:30%; padding:10px; margin:5px; background:#b366ff; border:none; border-radius:5px; font-weight:bold; color:#fff; cursor:pointer;">MASTER<br><span style="font-size:11px">52개</span></button>
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

// -------------------- BUILDER, SPEED, BLIND 로직 --------------------
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
                <div>TARGET: <b style="color:#ff66b3; font-size:16px;">${t.nameKo}</b> <span style="color:#aaa; font-size:12px;">(번호: ${t.id} / 질량수: <b style="color:#fff;">${massNumber}</b>)</span></div>
                <span>SCORE: <b>${score}</b> | TIME: <b id="timerText" style="color:#ff4d4d;">45.0</b></span>
            </div>
            <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:5px; margin-bottom:8px;">
                양성자: <button onclick="changePN('P',-1)">-</button> <span id="valP">0</span> <button onclick="changePN('P',1)">+</button> |
                중성자: <button onclick="changePN('N',-1)">-</button> <span id="valN">0</span> <button onclick="changePN('N',1)">+</button>
            </div>
            <div>${shells}</div>
            <button onclick="submitBuilder()" style="width:100%; padding:10px; margin-top:10px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">BUILD COMPLETE</button>
        </div>`;
}

function changePN(type, d) { if(type==='P') currentP=Math.max(0,currentP+d); else currentN=Math.max(0,currentN+d); document.getElementById('valP').innerText=currentP; document.getElementById('valN').innerText=currentN; refreshCanvas(); }
function changeShell(i, d) { currentShells[i]=Math.max(0,currentShells[i]+d); document.getElementById('valS'+i).innerText=currentShells[i]; refreshCanvas(); }
function refreshCanvas() { window.startAtomRender(currentP, currentN, currentShells.filter(s=>s>0), "#ff66b3"); }

// 🔽 아톰 빌더 정답 확인 로직 (성공 메시지 추가) 🔽
function submitBuilder() {
    if (isCheckingAnswer) return;

    const t = elementDB[currentTargetId]; 
    const isCorrect = (currentP === t.structure.protons && currentN === t.structure.neutrons && t.structure.shells.every((v,i) => v === currentShells[i]));

    if (isCorrect) {
        isCheckingAnswer = true;
        clearInterval(timer);

        // 정답 축하 메시지 화면 렌더링
        document.getElementById('quizInfo').innerHTML = `
            <div style="text-align:center; padding: 20px;">
                <h2 style="color:#00ff88; margin-bottom:15px;">정답입니다! 🎉</h2>
                <p style="font-size:14px; color:#aaa;">완벽한 원자 구조를 조립했습니다.</p>
                <h1 style="color:#ffaa00; font-size:36px; margin:10px 0;">${t.nameKo} <span style="font-size:24px; color:#ddd;">(${t.symbol})</span></h1>
            </div>
        `;
        window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, "#00ff88");

        if(resultTimeout) clearTimeout(resultTimeout);
        resultTimeout = setTimeout(() => {
            if(!window.quizMode) return;
            isCheckingAnswer = false;
            score += 10;
            if(score >= 100) gameClear(); 
            else nextQuestion();
        }, 1500); // 1.5초 동안 축하 메시지 표시 후 다음 문제로 넘어감
    } else {
        gameOver(); // 틀렸을 때는 가차 없이 게임 오버!
    }
}
// 🔼 여기까지 🔼

function renderSpeed(t) { 
    document.getElementById('headerTitle').innerText = "QUEST: SPEED SCANNER";
    document.getElementById('headerTitle').style.color = "#ffaa00";
    document.getElementById('quizInfo').innerHTML = `<div style="text-align:center;"><h2>${t.nameKo}</h2><h1 style="font-size:60px; color:#ffaa00; margin:10px 0;">${t.symbol}</h1><div>SCORE: ${score} | TIME: <b id="timerText">5.0</b></div></div>`; 
}

function renderBlind(t) { 
    if(hintInterval) clearInterval(hintInterval);
    if(hintTimeout) clearTimeout(hintTimeout);
    document.getElementById('headerTitle').innerText = "QUEST: BLIND GUESS";
    document.getElementById('headerTitle').style.color = "#00f3ff";
    document.getElementById('quizInfo').innerHTML = `<div id="hint-area" style="min-height:100px; font-size:14px; line-height:1.6; border-left:2px solid #00f3ff; padding-left:10px;"></div><div style="text-align:right;">TIME: <b id="timerText">22.0</b></div>`; 
    showHint(t); 
}

function showHint(t) {
    const area = document.getElementById('hint-area'); if(!area) return;
    let txt = hintStage===1 ? `> [분류] ${t.info.category}` : (hintStage===2 ? `> [특징] ${t.info.description}` : `> [활용] ${t.info.usage[0].icon} ${t.info.usage[0].text}`);
    let line = document.createElement('div'); area.appendChild(line);
    let i=0; 
    hintInterval = setInterval(()=>{ 
        line.textContent += txt[i++]; 
        if(i>=txt.length){ 
            clearInterval(hintInterval); 
            if(hintStage<3){ hintStage++; hintTimeout = setTimeout(()=>showHint(t),3500); }
        } 
    },30);
}


// -------------------- 🚀 BLACKOUT (Drag & Drop) --------------------

function applyBlackout() { 
    blackoutActiveIds = [...currentPool]; 
    
    for(let i=1; i<=118; i++) {
        const k = document.querySelector(`.key[data-id="${i}"]`);
        if(!k) continue;

        if(blackoutActiveIds.includes(String(i))) {
            k.style.background = "#000"; 
            k.querySelector('b').style.visibility = "hidden"; 
            k.querySelector('span').style.visibility = "hidden"; 
            k.style.opacity = "1";
            k.style.pointerEvents = "auto";
            k.ondragover = (e) => { e.preventDefault(); k.style.boxShadow = "0 0 15px #00f3ff, inset 0 0 10px #00f3ff"; };
            k.ondragleave = (e) => { k.style.boxShadow = ""; };
            k.ondrop = (e) => handleDrop(e, i);
        } else {
            k.style.opacity = "0.05";
            k.style.pointerEvents = "none";
        }
    }
}

function renderBlackout() { 
    document.getElementById('headerTitle').innerText = "QUEST: DRAG & DROP BLACKOUT";
    document.getElementById('headerTitle').style.color = "#ffffff";
    
    let shuffledPool = [...currentPool].sort(() => Math.random() - 0.5);
    let dragItemsHTML = shuffledPool.map(id => {
        const el = elementDB[id];
        return `<div class="drag-item" draggable="true" data-id="${id}" ondragstart="handleDragStart(event)" ondragend="handleDragEnd(event)" 
        style="display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; margin:4px; background:linear-gradient(135deg, rgba(0,243,255,0.2), rgba(0,0,0,0.8)); border:2px solid #00f3ff; border-radius:8px; cursor:grab; font-family:'Orbitron'; font-weight:bold; color:#fff; font-size:18px; transition:0.2s;">
            ${el.symbol}
        </div>`;
    }).join('');

    document.getElementById('quizInfo').innerHTML = `
        <style>
            #drag-tray::-webkit-scrollbar { width: 8px; }
            #drag-tray::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); border-radius: 4px; }
            #drag-tray::-webkit-scrollbar-thumb { background: rgba(0, 243, 255, 0.5); border-radius: 4px; border: 1px solid #000; }
            #drag-tray::-webkit-scrollbar-thumb:hover { background: rgba(0, 243, 255, 0.8); }
        </style>
        <div style="text-align:center;">
            <p style="color:#00f3ff; font-size:14px; font-weight:bold; margin-bottom: 5px;">아래 기호를 빈칸의 알맞은 위치에 드래그하여 맞추세요!</p>
            <h3 style="color:#00ff88; margin:5px 0;">RESTORED: <span id="bo-score">0</span> / ${currentPool.length}</h3>
            <div id="drag-tray" style="margin-top:10px; max-height:260px; overflow-y:auto; background:rgba(0,0,0,0.5); padding:15px; border-radius:10px; border:1px solid rgba(255,255,255,0.2); display:flex; flex-wrap:wrap; justify-content:center; align-content: flex-start;">
                ${dragItemsHTML}
            </div>
        </div>
    `; 
}

window.handleDragStart = function(e) {
    e.dataTransfer.setData("text/plain", e.target.getAttribute('data-id'));
    e.target.style.opacity = '0.4';
    e.target.style.transform = 'scale(0.9)';
};

window.handleDragEnd = function(e) {
    e.target.style.opacity = '1';
    e.target.style.transform = 'scale(1)';
};

window.handleDrop = function(e, targetId) {
    e.preventDefault();
    const k = document.querySelector(`.key[data-id="${targetId}"]`);
    if(k) k.style.boxShadow = ""; 

    const draggedId = e.dataTransfer.getData("text/plain");

    if (draggedId === String(targetId)) {
        score += 1;
        document.getElementById('bo-score').innerText = score;
        restoreKey(targetId);

        const dragItem = document.querySelector(`.drag-item[data-id="${draggedId}"]`);
        if(dragItem) dragItem.remove();

        if (blackoutActiveIds.length === 0) {
            gameClear();
        } else {
            const t = elementDB[targetId];
            window.startAtomRender(t.structure.protons, t.structure.neutrons, t.structure.shells, "#ffffff");
        }
    } else {
        currentTargetId = targetId; 
        gameOver();
    }
};

function restoreKey(id) { 
    const k = document.querySelector(`.key[data-id="${id}"]`); 
    if (k) {
        k.style.background = ""; 
        k.querySelector('b').style.visibility = "visible"; 
        k.querySelector('span').style.visibility = "visible"; 
        k.ondragover = null; k.ondragleave = null; k.ondrop = null;
    }
    const idx = blackoutActiveIds.indexOf(String(id)); 
    if(idx > -1) blackoutActiveIds.splice(idx, 1); 
}

function clearBlackout() {
    for(let i=1; i<=118; i++) {
        const k = document.querySelector(`.key[data-id="${i}"]`);
        if(k) {
            k.style.background = "";
            k.querySelector('b').style.visibility = "visible";
            k.querySelector('span').style.visibility = "visible";
            k.style.opacity = "1";
            k.style.pointerEvents = "auto";
            k.style.boxShadow = "";
            k.ondragover = null; k.ondragleave = null; k.ondrop = null;
        }
    }
    blackoutActiveIds = [];
}

function startTimer(s) { if(timer) clearInterval(timer); timeLeft=s; timer=setInterval(()=>{ timeLeft-=0.1; const tx=document.getElementById('timerText'); if(tx) tx.innerText=Math.max(0,timeLeft).toFixed(1); if(timeLeft<=0){ clearInterval(timer); gameOver(); } },100); }

function checkQuizAnswer(id) { 
    if(isCheckingAnswer) return; 
    if(gameType==='blackout') return; 
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

        if(resultTimeout) clearTimeout(resultTimeout);
        resultTimeout = setTimeout(() => {
            if(!window.quizMode) return; 
            isCheckingAnswer = false;
            if(isCorrect) { score += 10; if(score >= winScore) gameClear(); else nextQuestion(); } 
            else { gameOver(); }
        }, 2000);
        return;
    }
    
    if(isCorrect){ score+=10; if(score >= winScore) gameClear(); else nextQuestion(); } 
    else gameOver(); 
}

function stopQuiz() { 
    window.quizMode=false; 
    isCheckingAnswer = false; 
    
    clearInterval(timer); 
    if(resultTimeout) clearTimeout(resultTimeout); 
    if(hintInterval) clearInterval(hintInterval);
    if(hintTimeout) clearTimeout(hintTimeout);
    
    document.body.classList.remove('quiz-active'); 
    const btn = document.getElementById('quiz-toggle-btn');
    if (btn) { btn.innerText = "[ 🎮 QUIZ MODE ]"; btn.classList.remove('quit-mode'); }

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
    document.getElementById('quizInfo').innerHTML=`<div style="text-align:center; padding:20px;"><h1 style="color:#00ff88;">🎉 시스템 복구 완료</h1><button onclick="showGameSelection()" style="padding:10px 20px; background:#00ff88; border:none; border-radius:5px; font-weight:bold; color:black; cursor:pointer;">NEW MISSION</button></div>`; 
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
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button onclick="showGameSelection()" style="padding:10px 15px; background:#00f3ff; border:none; border-radius:5px; color: black; font-weight:bold; cursor:pointer;">새로운 미션</button>
                <button onclick="stopQuiz()" style="padding:10px 15px; background:#ff4d4d; border:none; border-radius:5px; color: white; font-weight:bold; cursor:pointer;">주기율표로 돌아가기</button>
            </div>
        </div>
    `; 
}