// 파일명: data.js
const elementDB = {
  1: {
    id: 1, symbol: "H", nameKo: "수소", nameEn: "Hydrogen",
    structure: { protons: 1, neutrons: 0, electrons: 1, shells: [1] },
    info: {
      phase: "기체", category: "기타 비금속",
      description: "우주에서 가장 흔하고 가벼운 원소예요. 모든 별들의 빛나는 엔진 역할을 하죠!",
      usage: [ { text: "로켓 연료", icon: "🚀" }, { text: "친환경 에너지", icon: "🌱" } ],
      history: "1766년 헨리 캐번디시가 발견. 우주 질량의 75%를 차지합니다."
    }
  },
  2: {
    id: 2, symbol: "He", nameKo: "헬륨", nameEn: "Helium",
    structure: { protons: 2, neutrons: 2, electrons: 2, shells: [2] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "마시면 목소리가 웃기게 변해요! 공기보다 가벼워서 풍선을 하늘로 띄워준답니다.",
      usage: [ { text: "파티용 풍선", icon: "🎈" }, { text: "MRI 냉각제", icon: "🏥" } ],
      history: "1868년 태양빛의 스펙트럼을 관찰하다 처음 발견되어 태양(Helios)의 이름을 땄습니다."
    }
  },
  3: {
    id: 3, symbol: "Li", nameKo: "리튬", nameEn: "Lithium",
    structure: { protons: 3, neutrons: 4, electrons: 3, shells: [2, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "세상에서 가장 가벼운 금속이에요. 물에 닿으면 칙칙 소리를 내며 격렬하게 반응하죠.",
      usage: [ { text: "스마트폰 배터리", icon: "🔋" }, { text: "전기자동차", icon: "🚗" } ],
      history: "1817년 아르프베드손이 광물 속에서 발견했습니다. 그리스어로 '돌(Lithos)'이라는 뜻이에요."
    }
  },
  4: {
    id: 4, symbol: "Be", nameKo: "베릴륨", nameEn: "Beryllium",
    structure: { protons: 4, neutrons: 5, electrons: 4, shells: [2, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "강철보다 단단하지만 아주 가벼운 금속이에요. 우주선이나 미사일을 만들 때 꼭 필요해요.",
      usage: [ { text: "우주 망원경 거울", icon: "🔭" }, { text: "항공우주 부품", icon: "🚀" } ],
      history: "1798년 루이 니콜라 보클랭이 에메랄드 같은 보석에서 처음 발견했습니다."
    }
  },
  5: {
    id: 5, symbol: "B", nameKo: "붕소", nameEn: "Boron",
    structure: { protons: 5, neutrons: 6, electrons: 5, shells: [2, 3] },
    info: {
      phase: "고체", category: "준금속",
      description: "금속과 비금속의 성질을 모두 가진 변덕쟁이 원소예요. 불꽃놀이에서 예쁜 초록색 빛을 내요.",
      usage: [ { text: "튼튼한 내열 유리", icon: "🧪" }, { text: "바퀴벌레 퇴치약", icon: "🪳" } ],
      history: "1808년 험프리 데이비와 조제프루이 게이뤼삭이 붕사에서 분리해 냈습니다."
    }
  },
6: {
    id: 6, symbol: "C", nameKo: "탄소", nameEn: "Carbon",
    structure: { protons: 6, neutrons: 6, electrons: 6, shells: [2, 4] },
    info: {
      phase: "고체", category: "기타 비금속",
      description: "까만 숯부터 세상에서 가장 단단한 다이아몬드까지 될 수 있는 변신의 귀재예요. 우리 몸을 이루는 핵심 블록이기도 하죠!",
      usage: [ { text: "연필심(흑연)", icon: "✏️" }, { text: "다이아몬드", icon: "💎" }, { text: "플라스틱 소재", icon: "🥤" } ],
      history: "고대부터 숯의 형태로 사용되었으며, 라틴어로 숯을 뜻하는 'carbo'에서 이름이 유래했습니다."
    }
  },
  7: {
    id: 7, symbol: "N", nameKo: "질소", nameEn: "Nitrogen",
    structure: { protons: 7, neutrons: 7, electrons: 7, shells: [2, 5] },
    info: {
      phase: "기체", category: "기타 비금속",
      description: "우리가 숨 쉬는 공기의 78%를 차지해요. 과자 봉지가 빵빵한 이유도 질소 가스가 들어있기 때문이랍니다.",
      usage: [ { text: "과자 봉지 충전재", icon: "🍟" }, { text: "식물을 키우는 비료", icon: "🌱" }, { text: "급속 냉각(액체질소)", icon: "❄️" } ],
      history: "1772년 다니엘 러더퍼드가 발견했습니다. 생명체의 단백질과 DNA를 만드는 데 필수적인 원소입니다."
    }
  },
  8: {
    id: 8, symbol: "O", nameKo: "산소", nameEn: "Oxygen",
    structure: { protons: 8, neutrons: 8, electrons: 8, shells: [2, 6] },
    info: {
      phase: "기체", category: "기타 비금속",
      description: "동물과 사람이 숨을 쉴 때 꼭 필요해요. 불이 활활 타오르게 도와주는 역할도 한답니다.",
      usage: [ { text: "호흡용 산소통", icon: "🤿" }, { text: "로켓의 산화제", icon: "🚀" }, { text: "의료용 생명 유지", icon: "🏥" } ],
      history: "1774년 조지프 프리스틀리가 발견했습니다. 지구 지각과 바다에서 가장 많은 질량을 차지하는 원소입니다."
    }
  },
  9: {
    id: 9, symbol: "F", nameKo: "플루오린", nameEn: "Fluorine",
    structure: { protons: 9, neutrons: 10, electrons: 9, shells: [2, 7] },
    info: {
      phase: "기체", category: "할로젠",
      description: "다른 원소들과 너무 친해지고 싶어서 뭐든지 녹이고 결합해 버리는 아주 강력하고 활동적인 기체예요.",
      usage: [ { text: "충치 예방(치약)", icon: "🪥" }, { text: "프라이팬 코팅(테플론)", icon: "🍳" }, { text: "냉매 가스", icon: "❄️" } ],
      history: "1886년 앙리 무아상이 처음 분리해 냈습니다. 이 공로로 노벨 화학상을 받았습니다."
    }
  },
  10: {
    id: 10, symbol: "Ne", nameKo: "네온", nameEn: "Neon",
    structure: { protons: 10, neutrons: 10, electrons: 10, shells: [2, 8] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "전기를 통과시키면 아주 예쁜 붉은 주황색 빛을 내요. 밤거리를 빛내는 간판의 주인공이랍니다.",
      usage: [ { text: "화려한 네온사인", icon: "🚥" }, { text: "바코드 스캐너(레이저)", icon: "🛒" }, { text: "고전압 표시기", icon: "⚡" } ],
      history: "1898년 윌리엄 램지와 모리스 트래버스가 발견했습니다. 그리스어로 '새롭다(neos)'는 뜻입니다."
    }
  },
  11: {
    id: 11, symbol: "Na", nameKo: "나트륨", nameEn: "Sodium",
    structure: { protons: 11, neutrons: 12, electrons: 11, shells: [2, 8, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "칼로 썰릴 만큼 무른 금속이에요. 물에 닿으면 폭발하지만, 염소(Cl)와 만나면 짭짤한 소금이 돼요!",
      usage: [ { text: "소금(염화나트륨)", icon: "🧂" }, { text: "가로등(나트륨등)", icon: "💡" }, { text: "베이킹소다", icon: "🧁" } ],
      history: "1807년 험프리 데이비가 전기분해로 처음 분리했습니다. 영미권에서는 '소듐(Sodium)'이라고 부릅니다."
    }
  },
  12: {
    id: 12, symbol: "Mg", nameKo: "마그네슘", nameEn: "Magnesium",
    structure: { protons: 12, neutrons: 12, electrons: 12, shells: [2, 8, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "가벼우면서도 튼튼해서 자동차나 노트북을 만들 때 써요. 불을 붙이면 눈이 부실 정도로 하얗고 밝게 타오르죠.",
      usage: [ { text: "가벼운 노트북 케이스", icon: "💻" }, { text: "불꽃놀이(백색광)", icon: "🎆" }, { text: "식물의 엽록소", icon: "🌿" } ],
      history: "1755년 조지프 블랙이 마그네시아(Magnesia)라는 지역의 광물에서 처음 확인했습니다."
    }
  },
  13: {
    id: 13, symbol: "Al", nameKo: "알루미늄", nameEn: "Aluminum",
    structure: { protons: 13, neutrons: 14, electrons: 13, shells: [2, 8, 3] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "가볍고 녹슬지 않아서 캔 음료수나 비행기를 만드는 데 아주 많이 쓰이는 은백색 금속이에요.",
      usage: [{text: "음료수 캔", icon: "🥤" }, { text: "주방용 호일", icon: "🍱" }, { text: "비행기 동체", icon: "✈️" } ],
      history: "지구 지각에서 세 번째로 흔한 원소지만, 과거에는 정제하기가 어려워 금보다 비쌌던 시절도 있었습니다."
    }
  },
  14: {
    id: 14, symbol: "Si", nameKo: "규소", nameEn: "Silicon",
    structure: { protons: 14, neutrons: 14, electrons: 14, shells: [2, 8, 4] },
    info: {
      phase: "고체", category: "준금속",
      description: "모래와 유리의 주성분이에요. 전기가 통하기도 하고 안 통하기도 해서 컴퓨터 두뇌(반도체)를 만드는 핵심 재료랍니다.",
      usage: [ { text: "컴퓨터 반도체 칩", icon: "🖧" }, { text: "유리창", icon: "🪟" }, { text: "실리콘 고무", icon: "🧤" } ],
      history: "1824년 옌스 야코브 베르셀리우스가 발견했습니다. 현대 IT 시대를 연 실리콘 밸리의 어원이 되었습니다."
    }
  },
  15: {
    id: 15, symbol: "P", nameKo: "인", nameEn: "Phosphorus",
    structure: { protons: 15, neutrons: 16, electrons: 15, shells: [2, 8, 5] },
    info: {
      phase: "고체", category: "기타 비금속",
      description: "어두운 곳에서 스스로 빛을 내는 신기한 성질이 있어요. 성냥의 머리 부분과 우리 몸의 뼈, DNA를 구성하죠.",
      usage: [ { text: "성냥의 발화제", icon: "🔥" }, { text: "농업용 비료", icon: "🌾" }, { text: "우리 몸의 뼈", icon: "🦴" } ],
      history: "1669년 헤니히 브란트가 소변(!)을 끓여서 처음 발견했습니다. '빛을 가져오는 자'라는 뜻입니다."
    }
  },
  16: {
    id: 16, symbol: "S", nameKo: "황", nameEn: "Sulfur",
    structure: { protons: 16, neutrons: 16, electrons: 16, shells: [2, 8, 6] },
    info: {
      phase: "고체", category: "기타 비금속",
      description: "온천이나 화산 근처에서 나는 쾌꼬리한 달걀 썩은 냄새의 원인이에요. 노란색을 띠고 화약의 재료로 쓰입니다.",
      usage: [ { text: "온천 입욕제", icon: "♨️" }, { text: "화약 제조", icon: "🧨" }, { text: "타이어(고무 강화)", icon: "🛞" } ],
      history: "고대부터 알려진 원소로, 성경에도 '유황불'로 등장합니다. 라틴어 'Sulphur'에서 유래했습니다."
    }
  },
  17: {
    id: 17, symbol: "Cl", nameKo: "염소", nameEn: "Chlorine",
    structure: { protons: 17, neutrons: 18, electrons: 17, shells: [2, 8, 7] },
    info: {
      phase: "기체", category: "할로젠",
      description: "수영장에서 나는 특유의 소독약 냄새가 바로 염소예요. 세균을 없애는 데 아주 탁월한 황록색 가스랍니다.",
      usage: [ { text: "수영장 물 소독", icon: "🏊‍♂️" }, { text: "락스(표백제)", icon: "👕" }, { text: "플라스틱(PVC) 파이프", icon: "🚰" } ],
      history: "1774년 칼 빌헬름 셸레가 발견했습니다. 그리스어로 황록색을 뜻하는 'Chloros'에서 따왔습니다."
    }
  },
  18: {
    id: 18, symbol: "Ar", nameKo: "아르곤", nameEn: "Argon",
    structure: { protons: 18, neutrons: 22, electrons: 18, shells: [2, 8, 8] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "다른 물질과 절대 반응하지 않는 게으른 성격이에요. 그래서 전구 안의 필라멘트가 타지 않게 보호해 주는 역할을 해요.",
      usage: [ { text: "백열전구 충전재", icon: "💡" }, { text: "용접 보호 가스", icon: "🛠️" }, { text: "단열 유리창", icon: "🪟" } ],
      history: "1894년 레일리 경과 윌리엄 램지가 공기 중에서 발견했습니다. 그리스어로 '게으른'이라는 뜻입니다."
    }
  },
  19: {
    id: 19, symbol: "K", nameKo: "칼륨", nameEn: "Potassium",
    structure: { protons: 19, neutrons: 20, electrons: 19, shells: [2, 8, 8, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "바나나에 많이 들어있는 영양소예요. 나트륨과 비슷하게 물에 닿으면 보라색 불꽃을 내며 폭발적으로 반응하죠.",
      usage: [ { text: "식물 비료", icon: "🪴" }, { text: "비누 제조", icon: "🧼" }, { text: "인체 신경 전달", icon: "🍌" } ],
      history: "1807년 험프리 데이비가 분리했습니다. 독일어로는 '칼륨(Kalium)', 영어로는 '포타슘(Potassium)'이라고 부릅니다."
    }
  },
  20: {
    id: 20, symbol: "Ca", nameKo: "칼슘", nameEn: "Calcium",
    structure: { protons: 20, neutrons: 20, electrons: 20, shells: [2, 8, 8, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "우유와 멸치에 많이 들어있어서 우리의 뼈와 치아를 아주 튼튼하게 만들어주는 고마운 은백색 금속이에요.",
      usage: [ { text: "튼튼한 뼈와 치아", icon: "🦷" }, { text: "석고 깁스", icon: "🩹" }, { text: "시멘트 원료", icon: "🧱" } ],
      history: "1808년 험프리 데이비가 분리했습니다. 조개껍데기나 석회석을 뜻하는 라틴어 'Calx'에서 유래했어요."
    }
  },
21: {
    id: 21, symbol: "Sc", nameKo: "스칸듐", nameEn: "Scandium",
    structure: { protons: 21, neutrons: 24, electrons: 21, shells: [2, 8, 9, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아주 가벼우면서도 알루미늄만큼 튼튼해요. 야구 배트나 자전거 프레임처럼 가볍고 튼튼해야 하는 곳에 쓰여요.",
      usage: [ { text: "고급 자전거 프레임", icon: "🚲" }, { text: "야구 배트", icon: "⚾" }, { text: "경기장 조명", icon: "🏟️" } ],
      history: "1879년 라르스 닐손이 발견했습니다. 스칸디나비아 반도에서 발견되어 이름이 붙었어요."
    }
  },
  22: {
    id: 22, symbol: "Ti", nameKo: "티타늄", nameEn: "Titanium",
    structure: { protons: 22, neutrons: 26, electrons: 22, shells: [2, 8, 10, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "강철만큼 튼튼하지만 무게는 절반밖에 안 되는 마법의 금속이에요! 인공 뼈를 만들 때도 쓰일 만큼 사람 몸과 잘 맞아요.",
      usage: [ { text: "인공 관절과 임플란트", icon: "🦴" }, { text: "우주선과 전투기", icon: "✈️" }, { text: "튼튼한 안경테", icon: "👓" } ],
      history: "1791년 윌리엄 그레고어가 발견했습니다. 그리스 신화의 거인족 '타이탄'에서 유래했습니다."
    }
  },
  23: {
    id: 23, symbol: "V", nameKo: "바나듐", nameEn: "Vanadium",
    structure: { protons: 23, neutrons: 28, electrons: 23, shells: [2, 8, 11, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "철에 아주 조금만 섞어도 강철을 엄청나게 단단하게 만들어주는 '금속 비타민' 같은 친구예요.",
      usage: [ { text: "단단한 공구(스패너)", icon: "🔧" }, { text: "자동차 엔진 부품", icon: "🏎️" }, { text: "대용량 배터리", icon: "🔋" } ],
      history: "1801년 안드레스 마누엘 델리오가 발견했습니다. 아름다운 색깔 때문에 스칸디나비아 미의 여신 '바나디스'의 이름을 땄어요."
    }
  },
  24: {
    id: 24, symbol: "Cr", nameKo: "크로뮴", nameEn: "Chromium",
    structure: { protons: 24, neutrons: 28, electrons: 24, shells: [2, 8, 13, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "반짝반짝 빛나고 절대 녹슬지 않게 해줘요. 수도꼭지나 자동차 휠이 반짝이는 이유가 바로 크로뮴 코팅 덕분이죠.",
      usage: [ { text: "반짝이는 수도꼭지", icon: "🚰" }, { text: "녹슬지 않는 스테인리스", icon: "🍴" }, { text: "루비의 붉은빛", icon: "🔴" } ],
      history: "1797년 루이 니콜라 보클랭이 발견했습니다. 그리스어로 '색깔(chroma)'이라는 뜻을 가졌습니다."
    }
  },
  25: {
    id: 25, symbol: "Mn", nameKo: "망가니즈", nameEn: "Manganese",
    structure: { protons: 25, neutrons: 30, electrons: 25, shells: [2, 8, 13, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "유리가 초록색으로 변하는 걸 막아주는 투명 마법사예요. 건전지 속에도 숨어있답니다.",
      usage: [ { text: "일반 건전지", icon: "🔋" }, { text: "투명한 유리 제조", icon: "🪟" }, { text: "철강을 단단하게", icon: "🏗️" } ],
      history: "1774년 요한 고틀리브 간이 분리해 냈습니다. 옛날에는 자석을 뜻하는 '마그네스'와 헷갈리기도 했어요."
    }
  },
  26: {
    id: 26, symbol: "Fe", nameKo: "철", nameEn: "Iron",
    structure: { protons: 26, neutrons: 30, electrons: 26, shells: [2, 8, 14, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "우리 몸속 피를 붉게 만들고, 튼튼한 건물과 자동차의 뼈대가 되는 아주 고마운 금속이에요.",
      usage: [ { text: "튼튼한 건축물 뼈대", icon: "🏗️" }, { text: "자동차와 기차", icon: "🚂" }, { text: "우리 몸의 헤모글로빈", icon: "🩸" } ],
      history: "우주의 무거운 별들이 수명이 다해 터질 때 만들어진, 별의 종착역 같은 원소입니다."
    }
  },
  27: {
    id: 27, symbol: "Co", nameKo: "코발트", nameEn: "Cobalt",
    structure: { protons: 27, neutrons: 32, electrons: 27, shells: [2, 8, 15, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아름다운 파란색을 내는 데 쓰여요. 자석을 만드는 데도 필수적이고, 전기차 배터리에도 들어간답니다.",
      usage: [ { text: "파란색 도자기 안료", icon: "🏺" }, { text: "강력한 영구자석", icon: "🧲" }, { text: "전기차 리튬 배터리", icon: "🔋" } ],
      history: "1735년 게오르그 브란트가 발견했습니다. 독일 전설 속 지하실 요정 '코볼트(Kobold)'에서 이름이 유래했어요."
    }
  },
  28: {
    id: 28, symbol: "Ni", nameKo: "니켈", nameEn: "Nickel",
    structure: { protons: 28, neutrons: 31, electrons: 28, shells: [2, 8, 16, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "동전을 반짝이게 만들고, 철과 섞여서 절대 녹슬지 않는 '스테인리스'를 만드는 일등 공신이에요.",
      usage: [{text: "은빛 동전", icon: "🪙" }, { text: "주방용 냄비와 수저", icon: "🥄" }, { text: "충전용 건전지", icon: "🔋" } ],
      history: "1751년 악셀 프레드릭 크론스테트가 발견. 광부들이 구리인 줄 알았다가 속았다고 해서 '악마의 구리(Kupfernickel)'라 불렀습니다."
    }
  },
  29: {
    id: 29, symbol: "Cu", nameKo: "구리", nameEn: "Copper",
    structure: { protons: 29, neutrons: 34, electrons: 29, shells: [2, 8, 18, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "전기를 아주 잘 통하게 해서 우리가 쓰는 모든 전선의 재료가 돼요. 시간이 지나면 자유의 여신상처럼 초록색으로 변한답니다.",
      usage: [ { text: "가전제품 전선", icon: "🔌" }, { text: "보일러 파이프", icon: "♨️" }, { text: "자유의 여신상", icon: "🗽" } ],
      history: "기원전 9000년경부터 인류가 사용한 가장 오래된 금속 중 하나입니다. 키프로스(Cyprus) 섬의 이름에서 유래했어요."
    }
  },
  30: {
    id: 30, symbol: "Zn", nameKo: "아연", nameEn: "Zinc",
    structure: { protons: 30, neutrons: 35, electrons: 30, shells: [2, 8, 18, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "철이 녹슬지 않게 대신 희생해서 부식을 막아주는 착한 보디가드 금속이에요. 선크림에도 들어있죠!",
      usage: [ { text: "건축용 철판 코팅", icon: "🛡️" }, { text: "자외선 차단 선크림", icon: "🧴" }, { text: "면역력 영양제", icon: "💊" } ],
      history: "독일의 연금술사 파라셀수스가 처음 아연을 'Zincum'이라 불렀으며, 뾰족하게 결정이 맺히는 모양에서 유래했습니다."
    }
  },
  31: {
    id: 31, symbol: "Ga", nameKo: "갈륨", nameEn: "Gallium",
    structure: { protons: 31, neutrons: 39, electrons: 31, shells: [2, 8, 18, 3] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "손바닥에 올려놓으면 사람의 체온만으로도 아이스크림처럼 스르르 녹아버리는 신기한 마술 같은 금속이에요.",
      usage: [ { text: "손에서 녹는 마술 장난감", icon: "🫠" }, { text: "LED 조명", icon: "💡" }, { text: "고성능 반도체", icon: "💻" } ],
      history: "1875년 폴에밀 르코크 드부아보드랑이 발견했습니다. 조국 프랑스의 옛 이름인 '갈리아'를 따서 지었어요."
    }
  },
  32: {
    id: 32, symbol: "Ge", nameKo: "게르마늄", nameEn: "Germanium",
    structure: { protons: 32, neutrons: 41, electrons: 32, shells: [2, 8, 18, 4] },
    info: {
      phase: "고체", category: "준금속",
      description: "유리 섬유를 통해 빛이 잘 통과하도록 도와주는 원소예요. 광케이블을 통해 인터넷이 빨라지게 해주죠.",
      usage: [ { text: "광섬유 케이블(인터넷)", icon: "🌐" }, { text: "적외선 카메라 렌즈", icon: "📷" }, { text: "초기 트랜지스터", icon: "📻" } ],
      history: "1886년 클레멘스 빙클러가 발견했습니다. 그의 조국인 독일(Germania)의 이름을 따서 명명했습니다."
    }
  },
  33: {
    id: 33, symbol: "As", nameKo: "비소", nameEn: "Arsenic",
    structure: { protons: 33, neutrons: 42, electrons: 33, shells: [2, 8, 18, 5] },
    info: {
      phase: "고체", category: "준금속",
      description: "독성이 아주 강해서 옛날에는 사약으로 쓰였어요. 하지만 지금은 아주 조금만 사용해서 반도체를 만드는 데 쓰이기도 하죠.",
      usage: [ { text: "전자 칩(반도체)", icon: "📱" }, { text: "과거의 쥐약/사약", icon: "☠️" }, { text: "특수 합금", icon: "⚙️" } ],
      history: "고대부터 화장품이나 독약으로 사용되었으며, '강력한'이라는 뜻의 페르시아어 'Zarnikh'에서 유래했습니다."
    }
  },
  34: {
    id: 34, symbol: "Se", nameKo: "셀레늄", nameEn: "Selenium",
    structure: { protons: 34, neutrons: 45, electrons: 34, shells: [2, 8, 18, 6] },
    info: {
      phase: "고체", category: "기타 비금속",
      description: "빛을 받으면 전기가 통하는 마법 같은 성질이 있어서, 옛날 복사기나 빛 센서에 꼭 필요한 재료였어요.",
      usage: [ { text: "비듬 방지 샴푸", icon: "🧴" }, { text: "태양광 발전 센서", icon: "☀️" }, { text: "항산화 영양제", icon: "💊" } ],
      history: "1817년 베르셀리우스가 발견했습니다. 지구의 위성인 달(Selene)을 기리기 위해 붙여진 이름입니다."
    }
  },
  35: {
    id: 35, symbol: "Br", nameKo: "브로민", nameEn: "Bromine",
    structure: { protons: 35, neutrons: 45, electrons: 35, shells: [2, 8, 18, 7] },
    info: {
      phase: "액체", category: "할로젠",
      description: "주기율표에서 상온일 때 액체인 원소는 수은과 브로민 딱 두 개뿐이에요! 아주 고약한 냄새가 나는 붉은색 액체랍니다.",
      usage: [ { text: "수영장 소독제", icon: "🏊" }, { text: "불에 안 타는 난연제", icon: "🧯" }, { text: "과거 사진 필름", icon: "🎞️" } ],
      history: "1826년 앙투안 제롬 발라르가 바닷물에서 발견했습니다. 그리스어로 '악취(bromos)'라는 뜻입니다."
    }
  },
  36: {
    id: 36, symbol: "Kr", nameKo: "크립톤", nameEn: "Krypton",
    structure: { protons: 36, neutrons: 48, electrons: 36, shells: [2, 8, 18, 8] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "슈퍼맨의 고향 이름과 같죠? 사실은 공기 중에 아주 조금만 '숨어있는' 가스로, 밝은 플래시 불빛을 만들 때 써요.",
      usage: [ { text: "카메라 플래시", icon: "📸" }, { text: "활주로 조명", icon: "🛬" }, { text: "에너지 절약 유리창", icon: "🪟" } ],
      history: "1898년 램지와 트래버스가 액체 공기에서 찾아냈습니다. 그리스어로 '숨겨진 것(kryptos)'이라는 뜻입니다."
    }
  },
  37: {
    id: 37, symbol: "Rb", nameKo: "루비듐", nameEn: "Rubidium",
    structure: { protons: 37, neutrons: 48, electrons: 37, shells: [2, 8, 18, 8, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "불꽃놀이에 넣으면 보석 루비처럼 아주 예쁜 붉은 보라색 불꽃을 내며 터지는 부드러운 금속이에요.",
      usage: [ { text: "붉은 보라색 불꽃놀이", icon: "🎆" }, { text: "진공관의 가스 제거기", icon: "📻" }, { text: "원자시계", icon: "⏱️" } ],
      history: "1861년 키르히호프와 분젠이 분광기로 발견했습니다. 라틴어로 '진한 붉은색(rubidus)'을 뜻합니다."
    }
  },
  38: {
    id: 38, symbol: "Sr", nameKo: "스트론튬", nameEn: "Strontium",
    structure: { protons: 38, neutrons: 50, electrons: 38, shells: [2, 8, 18, 8, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "칼슘과 성질이 아주 비슷해요. 불꽃놀이에서 강력하고 아름다운 빨간색 불꽃을 담당하는 핵심 원소랍니다.",
      usage: [ { text: "빨간색 불꽃놀이", icon: "🎇" }, { text: "야광 페인트", icon: "🎨" }, { text: "민감성 치아용 치약", icon: "🪥" } ],
      history: "1790년 스코틀랜드의 작은 마을 스트론티안(Strontian)의 납 광산에서 처음 발견되었습니다."
    }
  },
  39: {
    id: 39, symbol: "Y", nameKo: "이트륨", nameEn: "Yttrium",
    structure: { protons: 39, neutrons: 50, electrons: 39, shells: [2, 8, 18, 9, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "예전 볼록한 브라운관 TV가 선명한 빨간색을 낼 수 있게 도와줬어요. 지금은 레이저와 LED를 만드는 데 쓰이죠.",
      usage: [ { text: "백색 LED 조명", icon: "💡" }, { text: "의료용 레이저", icon: "빔" }, { text: "합금 첨가제", icon: "⚙️" } ],
      history: "1794년 요한 가돌린이 스웨덴의 위테르비(Ytterby) 마을 광산에서 발견해 마을 이름을 땄습니다."
    }
  },
  40: {
    id: 40, symbol: "Zr", nameKo: "지르코늄", nameEn: "Zirconium",
    structure: { protons: 40, neutrons: 51, electrons: 40, shells: [2, 8, 18, 10, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "다이아몬드처럼 투명하고 반짝이는 가짜 보석(큐빅)을 만드는 재료예요. 엄청난 열을 견뎌서 원자로를 감싸는 데도 쓰이죠.",
      usage: [ { text: "가짜 다이아몬드(큐빅)", icon: "💎" }, { text: "원자로의 파이프", icon: "☢️" }, { text: "초고온 내화 벽돌", icon: "🧱" } ],
      history: "1789년 마르틴 하인리히 클라프로트가 보석인 지르콘에서 발견했습니다. 금색을 뜻하는 페르시아어에서 유래했습니다."
    }
  },
41: {
    id: 41, symbol: "Nb", nameKo: "나이오븀", nameEn: "Niobium",
    structure: { protons: 41, neutrons: 52, electrons: 41, shells: [2, 8, 18, 12, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아주 낮은 온도에서 전기가 저항 없이 흐르는 '초전도체' 마법을 부릴 수 있는 금속이에요.",
      usage: [ { text: "초전도 자석(MRI)", icon: "🧲" }, { text: "입자 가속기", icon: "⚛️" }, { text: "저자극 피어싱", icon: "💍" } ],
      history: "1801년 찰스 해치트가 발견했습니다. 탄탈럼과 성질이 비슷해, 그리스 신화 속 탄탈로스의 딸 '니오베'의 이름을 땄어요."
    }
  },
  42: {
    id: 42, symbol: "Mo", nameKo: "몰리브데넘", nameEn: "Molybdenum",
    structure: { protons: 42, neutrons: 56, electrons: 42, shells: [2, 8, 18, 13, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "엄청난 열을 견뎌서 강철을 더 질기고 단단하게 만들어줘요. 식물이 자랄 때도 꼭 필요한 미량 영양소랍니다.",
      usage: [ { text: "미사일과 장갑차 부품", icon: "🚀" }, { text: "강력한 합금 공구", icon: "🔧" }, { text: "엔진 윤활유", icon: "🛢️" } ],
      history: "1778년 칼 빌헬름 셸레가 발견했습니다. 그리스어로 납을 뜻하는 'molybdos'에서 유래했습니다."
    }
  },
  43: {
    id: 43, symbol: "Tc", nameKo: "테크네튬", nameEn: "Technetium",
    structure: { protons: 43, neutrons: 55, electrons: 43, shells: [2, 8, 18, 13, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "자연에는 없고 인간이 실험실에서 인공적으로 만들어낸 '최초의 인공 원소'예요. 병원에서 뼈 사진을 찍을 때 쓰여요.",
      usage: [ { text: "뼈 암 진단(의료용)", icon: "🏥" }, { text: "방사성 추적자", icon: "🔍" }, { text: "강철 부식 방지", icon: "🛡️" } ],
      history: "1937년 에밀리오 세그레와 카를로 페리에르가 입자가속기를 통해 합성했습니다. 그리스어로 '인공적인(technetos)'이라는 뜻입니다."
    }
  },
  44: {
    id: 44, symbol: "Ru", nameKo: "루테늄", nameEn: "Ruthenium",
    structure: { protons: 44, neutrons: 58, electrons: 44, shells: [2, 8, 18, 15, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "백금 가족에 속하는 단단하고 희귀한 귀금속이에요. 볼펜 끝의 작은 구슬을 단단하게 코팅할 때도 쓰이죠.",
      usage: [ { text: "고급 만년필/볼펜 촉", icon: "🖋️" }, { text: "하드디스크 드라이브", icon: "💾" }, { text: "태양전지", icon: "☀️" } ],
      history: "1844년 러시아의 칼 클라우스가 발견했습니다. 러시아의 라틴어 이름인 'Ruthenia'에서 유래했습니다."
    }
  },
  45: {
    id: 45, symbol: "Rh", nameKo: "로듐", nameEn: "Rhodium",
    structure: { protons: 45, neutrons: 58, electrons: 45, shells: [2, 8, 18, 16, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "세상에서 가장 비싼 금속 중 하나예요! 빛을 아주 잘 반사해서 최고급 거울이나 보석을 반짝이게 코팅할 때 써요.",
      usage: [ { text: "자동차 배기가스 정화장치", icon: "🚗" }, { text: "백금/화이트골드 코팅", icon: "💍" }, { text: "반사율 높은 거울", icon: "🪞" } ],
      history: "1803년 윌리엄 하이드 울러스턴이 발견했습니다. 이 원소의 화합물이 장미색이어서 '장미(rhodon)'라는 뜻이 붙었어요."
    }
  },
  46: {
    id: 46, symbol: "Pd", nameKo: "팔라듐", nameEn: "Palladium",
    structure: { protons: 46, neutrons: 60, electrons: 46, shells: [2, 8, 18, 18] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "수소 가스를 스펀지처럼 엄청나게 많이 빨아들일 수 있는 신기한 금속이에요. 자동차 매연을 깨끗하게 걸러주죠.",
      usage: [ { text: "자동차 촉매 변환기", icon: "🚙" }, { text: "수소 자동차 연료전지", icon: "🔋" }, { text: "치과용 금속 합금", icon: "🦷" } ],
      history: "1803년 윌리엄 하이드 울러스턴이 발견했습니다. 그 당시 새로 발견된 소행성 '팔라스(Pallas)'의 이름을 땄어요."
    }
  },
  47: {
    id: 47, symbol: "Ag", nameKo: "은", nameEn: "Silver",
    structure: { protons: 47, neutrons: 61, electrons: 47, shells: [2, 8, 18, 18, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "세상 모든 금속 중에서 전기를 가장 잘 통하고 열도 가장 잘 전달하는 최고의 챔피언이에요. 반짝이는 보석이기도 하죠.",
      usage: [ { text: "은수저와 장신구", icon: "🥄" }, { text: "최고급 전자기기 회로", icon: "📱" }, { text: "항균 필터(나노 은)", icon: "🦠" } ],
      history: "고대부터 화폐와 장신구로 사용되었습니다. 원소 기호 Ag는 라틴어로 은을 뜻하는 'Argentum'에서 왔어요."
    }
  },
  48: {
    id: 48, symbol: "Cd", nameKo: "카드뮴", nameEn: "Cadmium",
    structure: { protons: 48, neutrons: 66, electrons: 48, shells: [2, 8, 18, 18, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "건전지나 노란색 물감을 만들 때 쓰이지만, 사람 몸에 들어가면 '이타이이타이병'을 일으키는 무서운 독성 금속이에요.",
      usage: [ { text: "충전식 배터리(니카드)", icon: "🔋" }, { text: "노란색/빨간색 물감", icon: "🎨" }, { text: "원자로 제어봉", icon: "☢️" } ],
      history: "1817년 프리드리히 슈트로마이어가 아연 광석에서 발견했습니다. 라틴어로 아연 광석을 뜻하는 'Cadmia'에서 유래했어요."
    }
  },
  49: {
    id: 49, symbol: "In", nameKo: "인듐", nameEn: "Indium",
    structure: { protons: 49, neutrons: 66, electrons: 49, shells: [2, 8, 18, 18, 3] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "아주 부드러워서 이로 깨물면 자국이 남고 구부릴 때 비명 소리 같은 소리가 나요! 스마트폰 터치스크린에 꼭 필요하죠.",
      usage: [ { text: "스마트폰 터치스크린", icon: "📱" }, { text: "투명한 전극(ITO)", icon: "📺" }, { text: "부드러운 합금", icon: "⚙️" } ],
      history: "1863년 페르디난트 라이히와 히로니무스 테오도르 리히터가 발견했습니다. 불꽃 색깔이 짙은 남색(Indigo)이어서 이름이 붙었어요."
    }
  },
  50: {
    id: 50, symbol: "Sn", nameKo: "주석", nameEn: "Tin",
    structure: { protons: 50, neutrons: 70, electrons: 50, shells: [2, 8, 18, 18, 4] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "철이 녹슬지 않게 깡통 겉면에 얇게 발라주는 은빛 금속이에요. 구리와 섞으면 튼튼한 청동이 된답니다.",
      usage: [ { text: "통조림 깡통 코팅", icon: "🥫" }, { text: "납땜(전자회로 연결)", icon: "⚡" }, { text: "청동 조각상", icon: "🗽" } ],
      history: "청동기 시대를 연 핵심 금속입니다. 라틴어 'Stannum'에서 원소 기호 Sn이 유래했습니다."
    }
  },
  51: {
    id: 51, symbol: "Sb", nameKo: "안티모니", nameEn: "Antimony",
    structure: { protons: 51, neutrons: 71, electrons: 51, shells: [2, 8, 18, 18, 5] },
    info: {
      phase: "고체", category: "준금속",
      description: "다른 금속과 섞여서 활자나 자동차 배터리를 단단하게 만들어줘요. 고대 이집트에서는 눈화장 재료로도 썼대요.",
      usage: [ { text: "자동차 납 축전지", icon: "🔋" }, { text: "불에 타지 않는 방염제", icon: "🧯" }, { text: "마이크로일렉트로닉스", icon: "💻" } ],
      history: "고대부터 알려져 있었으며, 원소 기호 Sb는 라틴어 'Stibium'에서 유래했습니다."
    }
  },
  52: {
    id: 52, symbol: "Te", nameKo: "텔루륨", nameEn: "Tellurium",
    structure: { protons: 52, neutrons: 78, electrons: 52, shells: [2, 8, 18, 18, 6] },
    info: {
      phase: "고체", category: "준금속",
      description: "만지면 입에서 마늘 냄새가 나게 만드는 독특한 원소예요! CD를 굽거나 태양광 패널을 만들 때 사용해요.",
      usage: [ { text: "CD와 DVD 기록 층", icon: "💿" }, { text: "태양열 발전 패널", icon: "☀️" }, { text: "온도 조절 냉각기", icon: "❄️" } ],
      history: "1782년 프란츠 요제프 뮐러 폰 라이헨슈타인이 발견했습니다. 라틴어로 '지구'를 뜻하는 'Tellus'에서 이름을 땄어요."
    }
  },
  53: {
    id: 53, symbol: "I", nameKo: "아이오딘", nameEn: "Iodine",
    structure: { protons: 53, neutrons: 74, electrons: 53, shells: [2, 8, 18, 18, 7] },
    info: {
      phase: "고체", category: "할로젠",
      description: "상처가 났을 때 바르는 갈색 소독약(빨간약)의 정체예요. 미역이나 다시마에도 많이 들어있어서 우리 몸을 건강하게 해 주죠.",
      usage: [ { text: "상처 소독약", icon: "🩹" }, { text: "갑상선 건강(미역)", icon: "🌿" }, { text: "사진 필름", icon: "📷" } ],
      history: "1811년 베르나르 쿠르투아가 미역을 태운 재에서 발견했습니다. 보라색 연기를 내기 때문에 그리스어 '보라색(Ioeides)'에서 유래했어요."
    }
  },
  54: {
    id: 54, symbol: "Xe", nameKo: "제논", nameEn: "Xenon",
    structure: { protons: 54, neutrons: 78, electrons: 54, shells: [2, 8, 18, 18, 8] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "자동차의 밝은 HID 헤드라이트나 영화관의 영사기에서 눈부시게 하얀빛을 내뿜는 아주 무거운 기체예요.",
      usage: [ { text: "자동차 밝은 전조등", icon: "🚙" }, { text: "영화관 영사기 램프", icon: "📽️" }, { text: "우주선 이온 엔진", icon: "🚀" } ],
      history: "1898년 램지와 트래버스가 발견했습니다. 공기 중에 아주 희귀해서 그리스어로 '낯선 것(Xenos)'이라는 뜻을 붙였어요."
    }
  },
  55: {
    id: 55, symbol: "Cs", nameKo: "세슘", nameEn: "Cesium",
    structure: { protons: 55, neutrons: 78, electrons: 55, shells: [2, 8, 18, 18, 8, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "시간을 1초의 오차도 없이 아주 정확하게 재는 '원자시계'의 심장이에요. 물에 닿으면 펑! 하고 엄청난 폭발을 일으킨답니다.",
      usage: [ { text: "초정밀 원자시계(GPS)", icon: "⏱️" }, { text: "방사선 치료 기기", icon: "🏥" }, { text: "석유 탐사 장비", icon: "🛢️" } ],
      history: "1860년 분젠과 키르히호프가 분광기로 발견했습니다. 불꽃놀이에서 푸른빛을 내서 라틴어 '하늘색(Caesius)'에서 유래했어요."
    }
  },
  56: {
    id: 56, symbol: "Ba", nameKo: "바륨", nameEn: "Barium",
    structure: { protons: 56, neutrons: 82, electrons: 56, shells: [2, 8, 18, 18, 8, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "병원에서 위장 엑스레이를 찍을 때 하얗게 보이게 하려고 마시는 약(조영제)에 들어있어요. 불꽃놀이에서는 예쁜 초록색을 내죠.",
      usage: [ { text: "엑스레이 위장 조영제", icon: "🩻" }, { text: "초록색 불꽃놀이", icon: "🎆" }, { text: "진공관 가스 제거", icon: "📻" } ],
      history: "1808년 험프리 데이비가 분리했습니다. 무겁다는 뜻의 그리스어 'Barys'에서 이름을 땄어요."
    }
  },
  57: {
    id: 57, symbol: "La", nameKo: "란타넘", nameEn: "Lanthanum",
    structure: { protons: 57, neutrons: 82, electrons: 57, shells: [2, 8, 18, 18, 9, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "주기율표 아래쪽으로 튀어나온 '희토류(란타넘족)' 친구들의 대장이에요! 카메라 렌즈나 전기차 배터리에 쓰여요.",
      usage: [ { text: "고급 카메라 렌즈", icon: "📷" }, { text: "하이브리드 자동차 배터리", icon: "🔋" }, { text: "라이터 돌", icon: "🔥" } ],
      history: "1839년 칼 구스타브 모산데르가 발견했습니다. 오랫동안 숨어 있었다는 뜻의 그리스어 'Lanthanein'에서 유래했습니다."
    }
  },
  58: {
    id: 58, symbol: "Ce", nameKo: "세륨", nameEn: "Cerium",
    structure: { protons: 58, neutrons: 82, electrons: 58, shells: [2, 8, 18, 19, 9, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "마찰을 일으키면 불꽃이 번쩍 튀어서 라이터 돌을 만드는 데 쓰여요. 스마트폰 유리를 매끄럽게 깎을 때도 필요하죠.",
      usage: [ { text: "라이터의 발화 돌", icon: "🔥" }, { text: "유리/렌즈 연마제", icon: "🪟" }, { text: "LED 형광체", icon: "💡" } ],
      history: "1803년 발견되었으며, 당시 새로 발견된 소행성 '세레스(Ceres)'의 이름을 따서 지어졌습니다."
    }
  },
  59: {
    id: 59, symbol: "Pr", nameKo: "프라세오디뮴", nameEn: "Praseodymium",
    structure: { protons: 59, neutrons: 82, electrons: 59, shells: [2, 8, 18, 21, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "유리에 섞으면 햇빛 속의 자외선을 완벽하게 차단해 줘서, 용접용 보호 안경을 만드는 데 아주 중요한 원소예요.",
      usage: [ { text: "용접공의 보호 안경", icon: "🥽" }, { text: "항공기 엔진 합금", icon: "✈️" }, { text: "탄소 아크 조명", icon: "📽️" } ],
      history: "1885년 칼 아우어 폰 벨스바흐가 발견했습니다. 그리스어로 '녹색(prasios)'과 '쌍둥이(didymos)'라는 뜻이 합쳐졌어요."
    }
  },
  60: {
    id: 60, symbol: "Nd", nameKo: "네오디뮴", nameEn: "Neodymium",
    structure: { protons: 60, neutrons: 84, electrons: 60, shells: [2, 8, 18, 22, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "지구상에서 가장 강력한 영구자석을 만들 수 있는 마법의 희토류예요! 스마트폰 진동 모터나 이어폰 안에 꼭 들어있답니다.",
      usage: [ { text: "강력한 네오디뮴 자석", icon: "🧲" }, { text: "이어폰과 스피커", icon: "🎧" }, { text: "전기차 모터", icon: "🏎️" } ],
      history: "1885년 칼 아우어 폰 벨스바흐가 프라세오디뮴과 함께 분리했습니다. '새로운 쌍둥이'라는 뜻을 가지고 있어요."
    }
  },
61: {
    id: 61, symbol: "Pm", nameKo: "프로메튬", nameEn: "Promethium",
    structure: { protons: 61, neutrons: 84, electrons: 61, shells: [2, 8, 18, 23, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "인공적으로 만들어진 방사성 희토류예요. 수명이 아주 긴 초소형 특수 배터리를 만들 때 사용된답니다.",
      usage: [ { text: "인공위성 원자력 전지", icon: "🛰️" }, { text: "과거 야광 페인트", icon: "✨" }, { text: "두께 측정기", icon: "📏" } ],
      history: "1945년 원자로의 핵분열 산물에서 처음 발견되었습니다. 그리스 신화에서 불을 훔친 '프로메테우스'의 이름을 땄어요."
    }
  },
  62: {
    id: 62, symbol: "Sm", nameKo: "사마륨", nameEn: "Samarium",
    structure: { protons: 62, neutrons: 88, electrons: 62, shells: [2, 8, 18, 24, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "높은 온도에서도 자석의 힘을 잃지 않게 해줘요. 전투기나 미사일처럼 뜨거운 곳에 들어가는 모터에 꼭 필요하죠.",
      usage: [ { text: "사마륨-코발트 영구자석", icon: "🧲" }, { text: "뼈 암 치료제", icon: "💊" }, { text: "전투기 모터", icon: "✈️" } ],
      history: "1879년 폴에밀 르코크 드부아보드랑이 '사마스카이트'라는 광물에서 발견했습니다."
    }
  },
  63: {
    id: 63, symbol: "Eu", nameKo: "유로퓸", nameEn: "Europium",
    structure: { protons: 63, neutrons: 89, electrons: 63, shells: [2, 8, 18, 25, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "특정 빛을 받으면 붉은색이나 파란색으로 예쁘게 빛나요. 위조지폐를 막기 위해 유로화 지폐에 숨겨져 있기도 해요!",
      usage: [ { text: "유로화 지폐 위조 방지", icon: "💶" }, { text: "TV/모니터 붉은색 픽셀", icon: "📺" }, { text: "형광등 안료", icon: "💡" } ],
      history: "1901년 외젠 아나톨 드마르세가 분리해 냈으며, 유럽(Europe) 대륙의 이름을 따서 명명했습니다."
    }
  },
  64: {
    id: 64, symbol: "Gd", nameKo: "가돌리늄", nameEn: "Gadolinium",
    structure: { protons: 64, neutrons: 93, electrons: 64, shells: [2, 8, 18, 25, 9, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "자기장에 아주 민감해서, 병원에서 MRI를 찍을 때 우리 몸속 핏줄과 장기가 선명하게 보이도록 도와주는 약(조영제)으로 쓰여요.",
      usage: [ { text: "MRI 혈관 조영제", icon: "🩻" }, { text: "자기 냉각(초저온 냉장고)", icon: "❄️" }, { text: "원자로 제어봉", icon: "☢️" } ],
      history: "1880년 장 샤를 갈리사르 드 마리냐크가 발견. 핀란드 화학자 요한 가돌린의 이름을 땄습니다."
    }
  },
  65: {
    id: 65, symbol: "Tb", nameKo: "터븀", nameEn: "Terbium",
    structure: { protons: 65, neutrons: 94, electrons: 65, shells: [2, 8, 18, 27, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "TV나 스마트폰 화면에서 예쁜 초록색을 만들어내는 원소예요. 자석의 힘을 받으면 모양이 변하는 신기한 합금의 재료이기도 하죠.",
      usage: [ { text: "디스플레이 초록색 픽셀", icon: "📱" }, { text: "지폐 위조 방지 형광물질", icon: "💵" }, { text: "초음파 스피커", icon: "🔊" } ],
      history: "1843년 칼 구스타브 모산데르가 스웨덴의 이테르비(Ytterby) 마을 광석에서 발견했습니다."
    }
  },
  66: {
    id: 66, symbol: "Dy", nameKo: "디스프로슘", nameEn: "Dysprosium",
    structure: { protons: 66, neutrons: 97, electrons: 66, shells: [2, 8, 18, 28, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "네오디뮴 자석에 살짝 섞어주면, 자석이 열을 받아도 힘이 빠지지 않게 강력한 내열성을 부여해 줘요.",
      usage: [ { text: "전기차 모터용 영구자석", icon: "🏎️" }, { text: "풍력 발전기 터빈", icon: "🌬️" }, { text: "하드디스크 기록 장치", icon: "💾" } ],
      history: "1886년 폴에밀 르코크 드부아보드랑이 발견했습니다. 분리하기가 너무 힘들어서 그리스어로 '얻기 힘든'이라는 뜻이 붙었어요."
    }
  },
  67: {
    id: 67, symbol: "Ho", nameKo: "홀뮴", nameEn: "Holmium",
    structure: { protons: 67, neutrons: 98, electrons: 67, shells: [2, 8, 18, 29, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "세상 모든 원소 중에서 자석의 성질(자기 모멘트)이 가장 강력한 원소예요. 정밀한 의료용 레이저로도 쓰여요.",
      usage: [ { text: "전립선/결석 수술용 레이저", icon: "빔" }, { text: "초전도 자석의 극", icon: "🧲" }, { text: "양자 컴퓨터 연구", icon: "💻" } ],
      history: "1878년 마르크 들라퐁텐과 자크루이 소레가 발견했습니다. 스웨덴 스톡홀름의 라틴어 이름에서 유래했습니다."
    }
  },
  68: {
    id: 68, symbol: "Er", nameKo: "어븀", nameEn: "Erbium",
    structure: { protons: 68, neutrons: 99, electrons: 68, shells: [2, 8, 18, 30, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "빛의 신호를 뻥튀기해 주는 역할을 해요. 해저 광케이블에 어븀이 없었다면 대륙 간 빠른 인터넷은 불가능했을 거예요!",
      usage: [ { text: "광통신 신호 증폭기", icon: "🌐" }, { text: "피부과 흉터 치료 레이저", icon: "🏥" }, { text: "분홍색 선글라스 렌즈", icon: "🕶️" } ],
      history: "1843년 스웨덴 이테르비 마을 광석에서 발견된 또 다른 원소입니다. 마을 이름(Ytterby)에서 철자를 따왔어요."
    }
  },
  69: {
    id: 69, symbol: "Tm", nameKo: "툴륨", nameEn: "Thulium",
    structure: { protons: 69, neutrons: 100, electrons: 69, shells: [2, 8, 18, 31, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "희토류 중에서도 가장 희귀한 편이에요. 작고 가벼운 휴대용 엑스레이 기계를 만들 수 있게 해주는 마법의 원소랍니다.",
      usage: [ { text: "휴대용 의료 X선 기기", icon: "🩻" }, { text: "유로화 위조 방지 형광", icon: "💶" }, { text: "정밀 레이저", icon: "빔" } ],
      history: "1879년 페르 테오도르 클레베가 발견했습니다. 북유럽의 신화 속 땅인 '툴레(Thule)'의 이름을 땄어요."
    }
  },
  70: {
    id: 70, symbol: "Yb", nameKo: "이터븀", nameEn: "Ytterbium",
    structure: { protons: 70, neutrons: 103, electrons: 70, shells: [2, 8, 18, 32, 8, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "세슘을 뛰어넘어 우주에서 가장 정확한 '초정밀 원자시계'를 만들 때 사용되는 아주 차갑고 예민한 금속이에요.",
      usage: [ { text: "차세대 광학 원자시계", icon: "⏱️" }, { text: "스테인리스 강철 첨가제", icon: "🏗️" }, { text: "치과용 X선 기기", icon: "🦷" } ],
      history: "1878년 장 드 마리냐크가 발견했습니다. 역시 스웨덴 이테르비(Ytterby) 마을 이름에서 유래한 4개의 원소 중 하나입니다."
    }
  },
  71: {
    id: 71, symbol: "Lu", nameKo: "루테튬", nameEn: "Lutetium",
    structure: { protons: 71, neutrons: 104, electrons: 71, shells: [2, 8, 18, 32, 9, 2] },
    info: {
      phase: "고체", category: "란타넘족",
      description: "희토류 중에서 가장 무겁고 가장 비싼 원소예요. 병원에서 암세포가 어디 있는지 찾는 첨단 PET 스캐너에 들어간답니다.",
      usage: [ { text: "암 진단용 PET 스캐너", icon: "🏥" }, { text: "석유 화학 촉매", icon: "🛢️" }, { text: "우주선 부품", icon: "🚀" } ],
      history: "1907년 조르주 위르뱅이 분리했습니다. 프랑스 파리의 옛 라틴어 이름인 '루테시아'에서 이름을 땄어요."
    }
  },
  72: {
    id: 72, symbol: "Hf", nameKo: "하프늄", nameEn: "Hafnium",
    structure: { protons: 72, neutrons: 106, electrons: 72, shells: [2, 8, 18, 32, 10, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "컴퓨터 두뇌인 인텔 CPU 칩의 크기를 더 작고 빠르게 만들 수 있게 해준 혁신적인 금속이에요.",
      usage: [ { text: "컴퓨터 마이크로프로세서", icon: "💻" }, { text: "원자력 잠수함 제어봉", icon: "☢️" }, { text: "플라즈마 절단기", icon: "⚡" } ],
      history: "1923년 디르크 코스터와 게오르크 폰 헤베시가 코펜하겐에서 발견했습니다. 코펜하겐의 라틴어 'Hafnia'에서 유래했습니다."
    }
  },
  73: {
    id: 73, symbol: "Ta", nameKo: "탄탈럼", nameEn: "Tantalum",
    structure: { protons: 73, neutrons: 108, electrons: 73, shells: [2, 8, 18, 32, 11, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "사람 몸속의 피나 체액과 전혀 반응하지 않아서, 두개골을 메우거나 뼈를 잇는 수술용 금속으로 가장 안전해요.",
      usage: [ { text: "스마트폰 초소형 커패시터", icon: "📱" }, { text: "의료용 인공 뼈/나사", icon: "🦴" }, { text: "제트 엔진 터빈", icon: "✈️" } ],
      history: "1802년 안데르스 에셰베리가 발견했습니다. 그리스 신화에서 영원한 갈증의 형벌을 받는 탄탈로스에서 유래했습니다."
    }
  },
  74: {
    id: 74, symbol: "W", nameKo: "텅스텐", nameEn: "Tungsten",
    structure: { protons: 74, neutrons: 110, electrons: 74, shells: [2, 8, 18, 32, 12, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "세상 모든 금속 중에서 녹는점(3422℃)이 가장 높아요! 옛날 백열전구가 빛을 낼 수 있었던 것도 이 필라멘트 덕분이죠.",
      usage: [ { text: "백열전구 필라멘트", icon: "💡" }, { text: "강력한 드릴/절단기(초경합금)", icon: "🛠️" }, { text: "다트 화살", icon: "🎯" } ],
      history: "스웨덴어로 '무거운(Tung) 돌(sten)'이라는 뜻입니다. 독일어 이름인 볼프람(Wolfram)에서 기호 W를 땄어요."
    }
  },
  75: {
    id: 75, symbol: "Re", nameKo: "레늄", nameEn: "Rhenium",
    structure: { protons: 75, neutrons: 111, electrons: 75, shells: [2, 8, 18, 32, 13, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아주 단단하고 엄청난 열을 견디기 때문에, 불을 뿜으며 날아가는 로켓이나 제트기 엔진을 만드는 데 필수적이에요.",
      usage: [ { text: "제트기 엔진 합금", icon: "✈️" }, { text: "로켓 연소실", icon: "🚀" }, { text: "무연 휘발유 촉매", icon: "⛽" } ],
      history: "1925년 발터 노다크 부부가 발견한, 자연계에서 가장 마지막으로 발견된 안정된 원소입니다. 라인강(Rhine)에서 이름을 땄어요."
    }
  },
  76: {
    id: 76, symbol: "Os", nameKo: "오스뮴", nameEn: "Osmium",
    structure: { protons: 76, neutrons: 114, electrons: 76, shells: [2, 8, 18, 32, 14, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "지구상에서 가장 빽빽하고 무거운(밀도가 높은) 원소예요. 벽돌만 한 크기가 무려 400kg이나 나간답니다!",
      usage: [ { text: "고급 만년필의 단단한 펜촉", icon: "🖋️" }, { text: "레코드플레이어 바늘", icon: "💽" }, { text: "현미경 염색약", icon: "🔬" } ],
      history: "1803년 스미슨 테넌트가 백금 광석에서 발견했습니다. 지독한 냄새가 나서 그리스어로 냄새(Osme)라는 이름을 붙였어요."
    }
  },
  77: {
    id: 77, symbol: "Ir", nameKo: "이리듐", nameEn: "Iridium",
    structure: { protons: 77, neutrons: 115, electrons: 77, shells: [2, 8, 18, 32, 15, 2] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "우주에서 날아온 운석에 많이 들어있어요. 과학자들은 땅속 이리듐 층을 보고 옛날에 소행성이 충돌해 공룡이 멸종했다고 확신했죠.",
      usage: [ { text: "자동차 점화 플러그", icon: "🚙" }, { text: "인공위성 통신 장비", icon: "🛰️" }, { text: "표준 미터 원기(과거)", icon: "📏" } ],
      history: "1803년 스미슨 테넌트가 발견했습니다. 화합물의 색이 무지개처럼 다양해서 무지개 여신 '이리스(Iris)'에서 이름을 땄습니다."
    }
  },
  78: {
    id: 78, symbol: "Pt", nameKo: "백금(플래티넘)", nameEn: "Platinum",
    structure: { protons: 78, neutrons: 117, electrons: 78, shells: [2, 8, 18, 32, 17, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아름다운 은빛을 내는 최고급 귀금속이에요. 보석뿐만 아니라 자동차 배기가스를 맑게 걸러주는 아주 중요한 역할도 한답니다.",
      usage: [ { text: "최고급 보석/반지", icon: "💍" }, { text: "자동차 배기가스 정화장치", icon: "🚗" }, { text: "항암 치료제(시스플라틴)", icon: "💊" } ],
      history: "남미 인디오들이 오래전부터 사용했습니다. 스페인 사람들이 은(Plata)과 비슷하다고 해서 '작은 은(Platina)'이라 불렀어요."
    }
  },
  79: {
    id: 79, symbol: "Au", nameKo: "금", nameEn: "Gold",
    structure: { protons: 79, neutrons: 118, electrons: 79, shells: [2, 8, 18, 32, 18, 1] },
    info: {
      phase: "고체", category: "전이 금속",
      description: "아무리 시간이 지나도 녹슬거나 색이 변하지 않는 세상에서 가장 아름답고 귀한 금속이에요.",
      usage: [ { text: "반짝이는 보석과 화폐", icon: "👑" }, { text: "스마트폰 속 정밀 회로", icon: "📱" }, { text: "우주복 헬멧 자외선 코팅", icon: "👩‍🚀" } ],
      history: "라틴어로 '빛나는 새벽'이라는 뜻의 'Aurum'에서 기호 Au가 유래했습니다. 고대부터 부와 권력의 상징이었죠."
    }
  },
  80: {
    id: 80, symbol: "Hg", nameKo: "수은", nameEn: "Mercury",
    structure: { protons: 80, neutrons: 121, electrons: 80, shells: [2, 8, 18, 32, 18, 2] },
    info: {
      phase: "액체", category: "전이 금속",
      description: "모든 금속 중 유일하게 상온에서 물처럼 찰랑거리는 은빛 액체예요! 신기하지만 독성이 아주 강해서 조심해야 해요.",
      usage: [ { text: "과거의 온도계와 혈압계", icon: "🌡️" }, { text: "형광등 내부 가스", icon: "💡" }, { text: "치과용 아말감(과거)", icon: "🦷" } ],
      history: "라틴어로 '물(hydro)'과 '은(argyros)'이 합쳐진 Hydrargyrum에서 기호를 땄습니다. 영어로는 로마의 전령 신 '머큐리'입니다."
    }
  },
81: {
    id: 81, symbol: "Tl", nameKo: "탈륨", nameEn: "Thallium",
    structure: { protons: 81, neutrons: 123, electrons: 81, shells: [2, 8, 18, 32, 18, 3] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "아주 부드럽지만 엄청난 맹독을 가진 무서운 금속이에요. 추리 소설에서 범인들이 독약으로 자주 사용하던 물질이랍니다.",
      usage: [ { text: "특수 유리 렌즈", icon: "🔍" }, { text: "과거의 쥐약", icon: "🐀" }, { text: "초전도체 연구", icon: "⚡" } ],
      history: "1861년 윌리엄 크룩스가 발견했습니다. 불꽃 반응 색이 예쁜 녹색이라서 '녹색 나뭇가지(Thallos)'라는 뜻을 가졌어요."
    }
  },
  82: {
    id: 82, symbol: "Pb", nameKo: "납", nameEn: "Lead",
    structure: { protons: 82, neutrons: 125, electrons: 82, shells: [2, 8, 18, 32, 18, 4] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "아주 무겁고 빽빽해서 엑스레이(X선)나 방사선을 완벽하게 막아주는 방패 역할을 해요. 무거운 원소들의 최종 은퇴 장소이기도 하죠.",
      usage: [ { text: "병원 엑스레이 방호복", icon: "🩻" }, { text: "자동차 배터리", icon: "🔋" }, { text: "낚시 추", icon: "🎣" } ],
      history: "고대 로마 시대부터 수도관으로 쓰였습니다. 영어 단어 Plumber(배관공)는 납을 뜻하는 라틴어 'Plumbum'에서 유래했어요."
    }
  },
  83: {
    id: 83, symbol: "Bi", nameKo: "비스무트", nameEn: "Bismuth",
    structure: { protons: 83, neutrons: 126, electrons: 83, shells: [2, 8, 18, 32, 18, 5] },
    info: {
      phase: "고체", category: "전이후 금속",
      description: "마치 무지개 계단처럼 화려하고 아름다운 네모난 결정을 만드는 금속이에요. 배가 아플 때 먹는 위장약에도 들어간답니다.",
      usage: [ { text: "무지개빛 금속 결정", icon: "🌈" }, { text: "위장약(펩토비스몰)", icon: "💊" }, { text: "안전한 납 대체재", icon: "🛡️" } ],
      history: "고대부터 알려져 있었지만, 납이나 주석으로 오해받다가 1753년 클로드 프랑수아 조프루아가 독립된 원소로 확인했습니다."
    }
  },
  84: {
    id: 84, symbol: "Po", nameKo: "폴로늄", nameEn: "Polonium",
    structure: { protons: 84, neutrons: 125, electrons: 84, shells: [2, 8, 18, 32, 18, 6] },
    info: {
      phase: "고체", category: "준금속",
      description: "마리 퀴리가 우라늄 광석에서 찾아낸 방사성 원소예요. 엄청난 열과 에너지를 뿜어내지만 매우 위험해요.",
      usage: [ { text: "산업용 정전기 제거기", icon: "⚡" }, { text: "우주선 인공 열원", icon: "🚀" }, { text: "원자력 전지", icon: "🔋" } ],
      history: "1898년 마리 퀴리와 피에르 퀴리가 발견했습니다. 마리 퀴리의 조국인 '폴란드(Poland)'를 기리기 위해 지은 이름이에요."
    }
  },
  85: {
    id: 85, symbol: "At", nameKo: "아스타틴", nameEn: "Astatine",
    structure: { protons: 85, neutrons: 125, electrons: 85, shells: [2, 8, 18, 32, 18, 7] },
    info: {
      phase: "고체", category: "할로젠",
      description: "지구 전체를 통틀어도 모래알만큼밖에 없는, 자연계에서 가장 희귀한 원소예요. 태어나자마자 곧바로 다른 원소로 변해버려요.",
      usage: [ { text: "방사선 암 치료 연구", icon: "🏥" }, { text: "핵의학", icon: "🧬" }, { text: "기초 과학 연구", icon: "🔬" } ],
      history: "1940년 데일 코슨 연구팀이 인공적으로 처음 만들었습니다. 그리스어로 '불안정하다(astatos)'는 뜻입니다."
    }
  },
  86: {
    id: 86, symbol: "Rn", nameKo: "라돈", nameEn: "Radon",
    structure: { protons: 86, neutrons: 136, electrons: 86, shells: [2, 8, 18, 32, 18, 8] },
    info: {
      phase: "기체", category: "비활성 기체",
      description: "색깔도 냄새도 없는 유령 같은 방사성 가스예요. 땅속에서 스멀스멀 올라오기 때문에 집안 환기를 꼭 잘 시켜야 해요!",
      usage: [ { text: "지진 예측 연구(과거)", icon: "🌍" }, { text: "암 치료용 방사선 씨앗", icon: "💊" }, { text: "대기 추적 물질", icon: "☁️" } ],
      history: "1900년 프리드리히 에른스트 도른이 발견했습니다. 라듐(Radium)에서 태어나는 가스라고 해서 이름이 붙여졌습니다."
    }
  },
  87: {
    id: 87, symbol: "Fr", nameKo: "프랑슘", nameEn: "Francium",
    structure: { protons: 87, neutrons: 136, electrons: 87, shells: [2, 8, 18, 32, 18, 8, 1] },
    info: {
      phase: "고체", category: "알칼리 금속",
      description: "물에 닿으면 역사상 가장 강력한 폭발을 일으킬 원소지만, 지구상에 너무 조금밖에 없어서 눈으로 볼 수조차 없어요.",
      usage: [ { text: "원자핵 구조 연구", icon: "⚛️" }, { text: "레이저 포획 실험", icon: "빔" }, { text: "초정밀 기초 물리", icon: "🔬" } ],
      history: "1939년 마르그리트 페레이가 발견한 마지막 자연 원소입니다. 발견자의 조국인 프랑스(France)에서 이름을 땄어요."
    }
  },
  88: {
    id: 88, symbol: "Ra", nameKo: "라듐", nameEn: "Radium",
    structure: { protons: 88, neutrons: 138, electrons: 88, shells: [2, 8, 18, 32, 18, 8, 2] },
    info: {
      phase: "고체", category: "알칼리 토금속",
      description: "어둠 속에서 스스로 예쁜 푸른빛을 내요! 마리 퀴리가 우라늄 찌꺼기 수 톤을 녹여서 딱 0.1그램을 찾아낸 기적의 원소죠.",
      usage: [ { text: "초창기 야광 시계바늘", icon: "⌚" }, { text: "암 치료의 시초", icon: "🏥" }, { text: "방사능 연구", icon: "☢️" } ],
      history: "1898년 마리 퀴리 부부가 발견했습니다. 라틴어로 '빛(Radius)'을 뜻하며, 방사능 시대를 연 아주 중요한 원소입니다."
    }
  },
  89: {
    id: 89, symbol: "Ac", nameKo: "악티늄", nameEn: "Actinium",
    structure: { protons: 89, neutrons: 138, electrons: 89, shells: [2, 8, 18, 32, 18, 9, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "주기율표 가장 아래쪽, 스스로 에너지를 뿜는 위험한 '악티늄족' 친구들의 대장이에요. 어둠 속에서 푸른빛으로 빛난답니다.",
      usage: [ { text: "방사선 동위원소 열전 발전기", icon: "🛰️" }, { text: "표적 항암 치료", icon: "🎯" }, { text: "중성자 발생원", icon: "⚛️" } ],
      history: "1899년 앙드레루이 드비에른이 발견했습니다. 그리스어로 '햇선(aktis)'이라는 뜻을 가졌어요."
    }
  },
  90: {
    id: 90, symbol: "Th", nameKo: "토륨", nameEn: "Thorium",
    structure: { protons: 90, neutrons: 142, electrons: 90, shells: [2, 8, 18, 32, 18, 10, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "우라늄보다 훨씬 안전하고 깨끗한 미래의 원자력 발전소 연료로 기대받고 있는 원소예요. 북유럽 천둥의 신 이름과 같죠!",
      usage: [ { text: "차세대 원전 연료(MSR)", icon: "⚡" }, { text: "고온용 도가니", icon: "🔥" }, { text: "고급 카메라 렌즈(과거)", icon: "📷" } ],
      history: "1828년 베르셀리우스가 발견했습니다. 북유럽 신화의 천둥의 신 '토르(Thor)'의 이름을 따왔습니다."
    }
  },
  91: {
    id: 91, symbol: "Pa", nameKo: "프로탁티늄", nameEn: "Protactinium",
    structure: { protons: 91, neutrons: 140, electrons: 91, shells: [2, 8, 18, 32, 20, 9, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "자연에서 아주 잠시 나타났다가 악티늄(Ac)으로 변신해 버리는 징검다리 같은 원소예요. 아주 희귀하고 독성이 강해요.",
      usage: [ { text: "해양 퇴적물 연대 측정", icon: "🌊" }, { text: "방사능 연구", icon: "☢️" }, { text: "기초 과학", icon: "🔬" } ],
      history: "1913년 카지미에시 파얀스 등이 발견했습니다. '악티늄의 부모(proto-actinium)'라는 뜻을 가졌어요."
    }
  },
  92: {
    id: 92, symbol: "U", nameKo: "우라늄", nameEn: "Uranium",
    structure: { protons: 92, neutrons: 146, electrons: 92, shells: [2, 8, 18, 32, 21, 9, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "자연에서 구할 수 있는 가장 무거운 원소예요! 이 녀석이 쪼개질 때 나오는 엄청난 열로 원자력 발전소를 돌려서 전기를 만들죠.",
      usage: [ { text: "원자력 발전소 연료", icon: "⚡" }, { text: "원자력 잠수함", icon: "항" }, { text: "형광 유리(과거)", icon: "🪟" } ],
      history: "1789년 마르틴 하인리히 클라프로트가 발견했습니다. 그 당시 새로 발견된 천왕성(Uranus)의 이름을 땄습니다."
    }
  },
  93: {
    id: 93, symbol: "Np", nameKo: "넵투늄", nameEn: "Neptunium",
    structure: { protons: 93, neutrons: 144, electrons: 93, shells: [2, 8, 18, 32, 22, 9, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "우라늄보다 무거운 최초의 '초우라늄' 인공 원소예요. 원자로 속에서 우라늄이 변신하면서 만들어진답니다.",
      usage: [ { text: "고에너지 중성자 탐지기", icon: "📡" }, { text: "플루토늄 생성 재료", icon: "⚛️" }, { text: "방사능 물리 연구", icon: "🔬" } ],
      history: "1940년 에드윈 맥밀런 등이 입자가속기로 최초 합성했습니다. 천왕성(Uranus) 다음 행성인 해왕성(Neptune)에서 따왔어요."
    }
  },
  94: {
    id: 94, symbol: "Pu", nameKo: "플루토늄", nameEn: "Plutonium",
    structure: { protons: 94, neutrons: 150, electrons: 94, shells: [2, 8, 18, 32, 24, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "원자 폭탄을 만드는 무서운 물질이기도 하지만, 화성 탐사선이 우주에서 수십 년간 끄떡없이 달리게 해주는 심장 배터리이기도 해요.",
      usage: [ { text: "우주 탐사선 원자력 전지", icon: "🚀" }, { text: "원자력 발전(MOX 연료)", icon: "⚡" }, { text: "핵무기", icon: "☢️" } ],
      history: "1940년 글렌 시보그 연구팀이 합성했습니다. 해왕성 다음인 명왕성(Pluto)의 이름을 땄어요."
    }
  },
  95: {
    id: 95, symbol: "Am", nameKo: "아메리슘", nameEn: "Americium",
    structure: { protons: 95, neutrons: 148, electrons: 95, shells: [2, 8, 18, 32, 25, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "우리가 살고 있는 집 천장에 붙어있는 화재 연기 감지기 속에 아주 조금씩 들어있어서, 불이 나면 삐- 하고 알려주는 고마운 원소예요.",
      usage: [ { text: "가정용 화재(연기) 감지기", icon: "🚨" }, { text: "유리 두께 측정기", icon: "📏" }, { text: "휴대용 방사선원", icon: "📡" } ],
      history: "1944년 글렌 시보그 연구팀이 합성했습니다. 유럽(유로퓸) 바로 밑에 있어서 아메리카(America) 대륙 이름을 땄어요."
    }
  },
  96: {
    id: 96, symbol: "Cm", nameKo: "퀴륨", nameEn: "Curium",
    structure: { protons: 96, neutrons: 151, electrons: 96, shells: [2, 8, 18, 32, 25, 9, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "우주선이 화성에 착륙해서 돌멩이를 주워 분석할 때 쓰는 엑스레이 기계에 꼭 필요한 원소예요. 열을 엄청나게 뿜어내죠.",
      usage: [ { text: "화성 탐사 로봇 X선 분석기", icon: "🤖" }, { text: "우주선 전력원", icon: "🚀" }, { text: "초중량 원소 합성 타겟", icon: "🎯" } ],
      history: "1944년 합성되었으며, 방사능 연구의 위대한 선구자인 마리 퀴리와 피에르 퀴리 부부의 이름을 기려 명명되었습니다."
    }
  },
  97: {
    id: 97, symbol: "Bk", nameKo: "버클륨", nameEn: "Berkelium",
    structure: { protons: 97, neutrons: 150, electrons: 97, shells: [2, 8, 18, 32, 27, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "아주 무거운 인공 원소들을 만들어내기 위한 징검다리 재료로 쓰여요. 너무 조금밖에 안 만들어져서 실생활에는 쓰이지 않아요.",
      usage: [ { text: "더 무거운 원소 합성", icon: "⚛️" }, { text: "방사능 연구", icon: "☢️" }, { text: "기초 화학", icon: "🧪" } ],
      history: "1949년 합성되었으며, 이 원소가 처음 만들어진 미국 캘리포니아 대학교 '버클리(Berkeley)' 캠퍼스의 이름을 땄습니다."
    }
  },
  98: {
    id: 98, symbol: "Cf", nameKo: "캘리포늄", nameEn: "Californium",
    structure: { protons: 98, neutrons: 153, electrons: 98, shells: [2, 8, 18, 32, 28, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "세상에서 가장 비싼 물질 중 하나예요! 1그램에 수백억 원이나 하죠. 강력한 중성자를 쏴서 땅속에 숨겨진 기름이나 금을 찾을 때 쓰여요.",
      usage: [ { text: "지하 석유 탐사 장비", icon: "🛢️" }, { text: "금속 피로도 검사", icon: "✈️" }, { text: "핵연료봉 스캐너", icon: "☢️" } ],
      history: "1950년 합성되었으며, 미국 '캘리포니아(California)' 주의 이름과 대학의 이름을 따서 지어졌습니다."
    }
  },
  99: {
    id: 99, symbol: "Es", nameKo: "아인슈타이늄", nameEn: "Einsteinium",
    structure: { protons: 99, neutrons: 153, electrons: 99, shells: [2, 8, 18, 32, 29, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "최초의 수소 폭탄 실험이 끝나고 남은 찌꺼기 속에서 우연히 발견된 원소예요. 엄청난 방사능 때문에 스스로 푸른빛을 내며 녹아버려요.",
      usage: [ { text: "더 무거운 원소 합성 타겟", icon: "🎯" }, { text: "방사선 파괴 실험", icon: "💥" }, { text: "기초 과학 연구", icon: "🔬" } ],
      history: "1952년 태평양 수소폭탄 실험 잔해에서 발견되었습니다. 역사상 가장 위대한 과학자 '알베르트 아인슈타인'의 이름을 기렸습니다."
    }
  },
  100: {
    id: 100, symbol: "Fm", nameKo: "페르뮴", nameEn: "Fermium",
    structure: { protons: 100, neutrons: 157, electrons: 100, shells: [2, 8, 18, 32, 30, 8, 2] },
    info: {
      phase: "고체", category: "악티늄족",
      description: "주기율표의 딱 100번째를 차지하는 기념비적인 원소예요! 중성자를 흡수해서 원소를 뚱뚱하게 만드는 방법으로 만들 수 있는 마지막 원소랍니다.",
      usage: [ { text: "핵분열 연구", icon: "⚡" }, { text: "초중량 원자핵 물리 실험", icon: "⚛️" }, { text: "기초 화학 반응", icon: "🧪" } ],
      history: "1952년 아인슈타이늄과 함께 수소폭탄 잔해에서 발견되었습니다. 최초의 원자로를 만든 '엔리코 페르미'의 이름을 땄어요."
    }
  },
101: {
    id: 101, symbol: "Md", nameKo: "멘델레븀", nameEn: "Mendelevium",
    structure: { protons: 101, neutrons: 157, electrons: 101, shells: [2, 8, 18, 32, 31, 8, 2] },
    info: {
      phase: "고체 (추측)", category: "악티늄족",
      description: "주기율표를 처음 만든 위대한 과학자의 이름을 딴 원소예요. 만들어지자마자 금방 다른 원소로 쪼개져 버린답니다.",
      usage: [ { text: "핵분열 연구", icon: "⚡" }, { text: "방사능 성질 실험", icon: "🧪" }, { text: "초중량 원자 탐구", icon: "⚛️" } ],
      history: "1955년 알버트 기오르소 연구팀이 합성했습니다. 주기율표의 아버지 '드미트리 멘델레예프'의 이름을 기렸어요."
    }
  },
  102: {
    id: 102, symbol: "No", nameKo: "노벨륨", nameEn: "Nobelium",
    structure: { protons: 102, neutrons: 157, electrons: 102, shells: [2, 8, 18, 32, 32, 8, 2] },
    info: {
      phase: "고체 (추측)", category: "악티늄족",
      description: "다이너마이트를 발명하고 노벨상을 만든 알프레드 노벨의 이름을 딴 원소예요. 입자가속기에서 아주 조금만 만들 수 있어요.",
      usage: [ { text: "초중량 원자 물리 연구", icon: "🔬" }, { text: "입자 가속 실험", icon: "🚀" }, { text: "기초 과학 입증", icon: "📘" } ],
      history: "1958년 미국과 스웨덴, 러시아 과학자들의 경쟁 끝에 확인되었습니다. '알프레드 노벨'의 이름을 땄어요."
    }
  },
  103: {
    id: 103, symbol: "Lr", nameKo: "로렌슘", nameEn: "Lawrencium",
    structure: { protons: 103, neutrons: 159, electrons: 103, shells: [2, 8, 18, 32, 32, 8, 3] },
    info: {
      phase: "고체 (추측)", category: "악티늄족",
      description: "주기율표 아래쪽으로 튀어나온 '악티늄족'의 마지막을 장식하는 원소예요. 3시간 정도면 반으로 줄어들며 사라져버리죠.",
      usage: [ { text: "악티늄족 화학 연구", icon: "🧪" }, { text: "가속기 타겟 분석", icon: "🎯" }, { text: "핵물리학 연구", icon: "☢️" } ],
      history: "1961년 합성되었습니다. 최초의 입자가속기(사이클로트론)를 발명한 '어니스트 로런스'의 이름을 땄습니다."
    }
  },
  104: {
    id: 104, symbol: "Rf", nameKo: "러더포듐", nameEn: "Rutherfordium",
    structure: { protons: 104, neutrons: 163, electrons: 104, shells: [2, 8, 18, 32, 32, 10, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "원자핵을 처음 발견한 과학자의 이름을 딴 초중량 원소예요. 만들어진 지 1분도 안 돼서 다른 원소로 붕괴해 버려요.",
      usage: [ { text: "초중량 원소 성질 예측", icon: "🔮" }, { text: "가속기 충돌 실험", icon: "💥" }, { text: "원자핵 구조 분석", icon: "⚛️" } ],
      history: "1964년 러시아, 1969년 미국에서 합성되었습니다. 원자핵의 아버지 '어니스트 러더퍼드'를 기리는 이름입니다."
    }
  },
  105: {
    id: 105, symbol: "Db", nameKo: "더브늄", nameEn: "Dubnium",
    structure: { protons: 105, neutrons: 163, electrons: 105, shells: [2, 8, 18, 32, 32, 11, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "초중량 원소들을 만들어내는 러시아의 유명한 과학 도시 이름을 딴 원소예요. 탄탈럼(Ta)과 비슷한 성질을 가졌을 것으로 추측돼요.",
      usage: [ { text: "러시아-미국 공동 물리 연구", icon: "🤝" }, { text: "가속기 합성 기술", icon: "⚙️" }, { text: "이론 화학 입증", icon: "📝" } ],
      history: "러시아 두브나(Dubna) 연구소와 미국 버클리 연구소의 치열한 이름 짓기 싸움 끝에 러시아 도시 이름으로 결정됐어요."
    }
  },
  106: {
    id: 106, symbol: "Sg", nameKo: "시보귬", nameEn: "Seaborgium",
    structure: { protons: 106, neutrons: 165, electrons: 106, shells: [2, 8, 18, 32, 32, 12, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "플루토늄을 비롯해 무려 10개의 원소를 발견한 천재 과학자 시보그가 살아있을 때 그의 이름을 따서 지은 특별한 원소예요.",
      usage: [ { text: "초중량 할로젠화물 연구", icon: "🧪" }, { text: "기초 핵물리학", icon: "핵" }, { text: "수명 측정 실험", icon: "⏱️" } ],
      history: "1974년 합성되었습니다. 생존해 있는 과학자(글렌 시보그)의 이름을 딴 최초의 원소로 논란이 많았어요."
    }
  },
  107: {
    id: 107, symbol: "Bh", nameKo: "보륨", nameEn: "Bohrium",
    structure: { protons: 107, neutrons: 163, electrons: 107, shells: [2, 8, 18, 32, 32, 13, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "우리가 지금 보는 껍질 모양의 '원자 모형'을 처음 생각해낸 과학자 닐스 보어의 이름을 딴 아주 무거운 인공 원소예요.",
      usage: [ { text: "양자 역학 이론 입증", icon: "🧠" }, { text: "초중량 동위원소 탐색", icon: "🔍" }, { text: "기초 과학", icon: "🔬" } ],
      history: "1981년 독일 GSI 연구소에서 합성했습니다. 양자역학의 거장 '닐스 보어'의 이름을 땄습니다."
    }
  },
  108: {
    id: 108, symbol: "Hs", nameKo: "하슘", nameEn: "Hassium",
    structure: { protons: 108, neutrons: 169, electrons: 108, shells: [2, 8, 18, 32, 32, 14, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "이 원소를 처음 만들어낸 독일의 헤센 주 이름을 딴 원소예요. 1초도 안 돼서 사라지지만 오스뮴과 비슷할 것으로 예상돼요.",
      usage: [ { text: "초산화물 형성 실험", icon: "💨" }, { text: "중이온 가속기 실험", icon: "입" }, { text: "독일 물리 연구", icon: "🇩🇪" } ],
      history: "1984년 독일 GSI 연구소에서 철과 납을 충돌시켜 합성했습니다. 연구소가 있는 헤센(Hesse)의 라틴어 이름입니다."
    }
  },
  109: {
    id: 109, symbol: "Mt", nameKo: "마이트너륨", nameEn: "Meitnerium",
    structure: { protons: 109, neutrons: 169, electrons: 109, shells: [2, 8, 18, 32, 32, 15, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "핵분열의 원리를 처음으로 밝혀낸 위대한 여성 물리학자 리제 마이트너의 이름을 딴 아주 짧은 수명의 원소예요.",
      usage: [ { text: "초중량 붕괴 사슬 연구", icon: "⛓️" }, { text: "알파 붕괴 실험", icon: "💥" }, { text: "이론 물리", icon: "📐" } ],
      history: "1982년 독일 GSI 연구소에서 철과 비스무트를 충돌시켜 딱 1개의 원자를 확인하며 발견했습니다."
    }
  },
  110: {
    id: 110, symbol: "Ds", nameKo: "다름슈타튬", nameEn: "Darmstadtium",
    structure: { protons: 110, neutrons: 171, electrons: 110, shells: [2, 8, 18, 32, 32, 16, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "많은 초중량 원소들을 만들어낸 독일의 마법 같은 도시 '다름슈타트'를 영원히 기억하기 위해 지은 이름이에요.",
      usage: [ { text: "원소 합성 한계 도전", icon: "🚀" }, { text: "입자 검출기 테스트", icon: "📡" }, { text: "핵 반응 연구", icon: "☢️" } ],
      history: "1994년 독일 GSI 연구소에서 니켈과 납을 충돌시켜 합성했습니다. 연구소가 위치한 도시 이름입니다."
    }
  },
  111: {
    id: 111, symbol: "Rg", nameKo: "뢴트게늄", nameEn: "Roentgenium",
    structure: { protons: 111, neutrons: 171, electrons: 111, shells: [2, 8, 18, 32, 32, 17, 2] },
    info: {
      phase: "고체 (추측)", category: "전이 금속",
      description: "병원에서 뼈 사진을 찍을 수 있게 엑스레이(X선)를 발견한 뢴트겐을 기념하는 원소예요. 금(Au)과 같은 가족이랍니다.",
      usage: [ { text: "금(Au) 족의 상대론적 효과 연구", icon: "👑" }, { text: "초중량 질량 측정", icon: "⚖️" }, { text: "기초 과학", icon: "🔬" } ],
      history: "1994년 독일 GSI 연구소에서 합성했습니다. 제1회 노벨 물리학상 수상자인 '빌헬름 뢴트겐'의 이름을 땄어요."
    }
  },
  112: {
    id: 112, symbol: "Cn", nameKo: "코페르니슘", nameEn: "Copernicium",
    structure: { protons: 112, neutrons: 173, electrons: 112, shells: [2, 8, 18, 32, 32, 18, 2] },
    info: {
      phase: "액체/기체 (추측)", category: "전이 금속",
      description: "태양계의 중심이 태양이라는 것을 밝혀낸 코페르니쿠스의 이름을 땄어요. 수은처럼 상온에서 액체나 기체일 것으로 추측돼요.",
      usage: [ { text: "상대론적 효과에 의한 상온 액체 증명", icon: "💧" }, { text: "수은(Hg) 족 연구", icon: "🌡️" }, { text: "천문학 기념", icon: "🔭" } ],
      history: "1996년 독일 GSI 연구소에서 합성했습니다. 지동설을 주장한 천문학자 '니콜라우스 코페르니쿠스'를 기립니다."
    }
  },
  113: {
    id: 113, symbol: "Nh", nameKo: "니호늄", nameEn: "Nihonium",
    structure: { protons: 113, neutrons: 173, electrons: 113, shells: [2, 8, 18, 32, 32, 18, 3] },
    info: {
      phase: "고체 (추측)", category: "전이후 금속",
      description: "아시아 국가(일본)에서 처음으로 만들어내고 이름을 붙인 초중량 원소예요. 아연을 엄청난 속도로 비스무트에 부딪혀서 만들었죠.",
      usage: [ { text: "아시아 최초 원소 합성 기록", icon: "🏆" }, { text: "이온 가속기 성능 실험", icon: "빔" }, { text: "붕괴 연쇄 분석", icon: "⛓️" } ],
      history: "2004년 일본 이화학연구소(RIKEN) 연구진이 400일 동안 입자를 충돌시킨 끝에 합성해 냈습니다. '일본(Nihon)'의 이름을 땄어요."
    }
  },
  114: {
    id: 114, symbol: "Fl", nameKo: "플레로븀", nameEn: "Flerovium",
    structure: { protons: 114, neutrons: 175, electrons: 114, shells: [2, 8, 18, 32, 32, 18, 4] },
    info: {
      phase: "기체 (추측)", category: "전이후 금속",
      description: "원소들이 금방 사라지지 않고 오래 살아남을 수 있는 '안정의 섬'이라는 마법의 구역에 다가가기 위한 중요한 열쇠 같은 원소예요.",
      usage: [ { text: "안정의 섬(Island of Stability) 연구", icon: "🏝️" }, { text: "납(Pb) 족 특성 비교", icon: "🛡️" }, { text: "원자핵 모델 실험", icon: "⚛️" } ],
      history: "1998년 러시아 두브나 연구소에서 합성했습니다. 러시아 핵물리학자 '게오르기 플료로프'와 플료로프 핵반응 연구소를 기립니다."
    }
  },
  115: {
    id: 115, symbol: "Mc", nameKo: "모스코븀", nameEn: "Moscovium",
    structure: { protons: 115, neutrons: 174, electrons: 115, shells: [2, 8, 18, 32, 32, 18, 5] },
    info: {
      phase: "고체 (추측)", category: "전이후 금속",
      description: "러시아 모스크바 근처에 있는 거대한 입자가속기에서 만들어져 그 이름을 땄어요. 만들어지자마자 니호늄으로 변신하며 사라져요.",
      usage: [ { text: "초중량 붕괴 에너지 측정", icon: "⚡" }, { text: "러시아-미국 공동 가속기 실험", icon: "🤝" }, { text: "이론 화학", icon: "🧪" } ],
      history: "2003년 러시아 두브나 연구소와 미국 공동 연구진이 합성했습니다. 러시아 수도 '모스크바(Moscow)' 주에서 이름을 땄습니다."
    }
  },
  116: {
    id: 116, symbol: "Lv", nameKo: "리버모륨", nameEn: "Livermorium",
    structure: { protons: 116, neutrons: 177, electrons: 116, shells: [2, 8, 18, 32, 32, 18, 6] },
    info: {
      phase: "고체 (추측)", category: "전이후 금속",
      description: "미국의 위대한 물리 연구소 이름이 붙은 원소예요. 118번 오가네손이 태어나자마자 처음으로 변신(붕괴)하는 징검다리이기도 하죠.",
      usage: [ { text: "오가네손(118번) 붕괴 사슬 추적", icon: "👣" }, { text: "알파 입자 방출 측정", icon: "💥" }, { text: "핵물리학 기초 연구", icon: "미" } ],
      history: "2000년 러시아 연구진과 공동 실험을 한 미국 '로런스 리버모어 국립연구소'와 그 도시 이름을 기려 지어졌습니다."
    }
  },
  117: {
    id: 117, symbol: "Ts", nameKo: "테네신", nameEn: "Tennessine",
    structure: { protons: 117, neutrons: 177, electrons: 117, shells: [2, 8, 18, 32, 32, 18, 7] },
    info: {
      phase: "고체 (추측)", category: "할로젠",
      description: "가장 최근에 발견된 초중량 원소 중 하나예요! 플루오린이나 염소 같은 '할로젠' 가족의 마지막 막내지만, 금속에 더 가까울 수 있어요.",
      usage: [ { text: "할로젠 족 상대론적 성질 연구", icon: "⚖️" }, { text: "최신 입자 충돌 실험", icon: "🚀" }, { text: "안정의 섬 진입 시도", icon: "🏝️" } ],
      history: "2010년 러시아와 미국 공동 연구진이 합성했습니다. 미국의 중요 연구소가 밀집해 있는 '테네시(Tennessee)' 주의 이름을 땄습니다."
    }
  },
  118: {
    id: 118, symbol: "Og", nameKo: "오가네손", nameEn: "Oganesson",
    structure: { protons: 118, neutrons: 176, electrons: 118, shells: [2, 8, 18, 32, 32, 18, 8] },
    info: {
      phase: "고체 (추측)", category: "비활성 기체",
      description: "인류 기술이 도달한 주기율표의 가장 마지막 칸, 대망의 끝판왕이에요! 눈 한 번 깜빡할 사이(0.0007초)에 수백 번 생겼다 사라지는 유령 같은 거인이죠.",
      usage: [ { text: "인류 원소 기술의 한계선", icon: "🏁" }, { text: "비활성 기체 예외성 연구", icon: "🤯" }, { text: "가장 무거운 원자핵 붕괴 사슬 분석", icon: "👑" } ],
      history: "2002년 러시아-미국 공동 연구진이 합성했습니다. 초중량 원소 합성에 일생을 바친 러시아 핵물리학자 '유리 오가네시안'의 이름을 땄습니다."
    }
  }
};



