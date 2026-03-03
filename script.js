/* ===== QUIZ DATA ===== */
const questions = [
  {
    id: 1,
    text: '후배가 "저는 잘하는 게 없어요"라고 말한다면?',
    options: [
      { label: 'A', text: '구체적으로 잘한 사례를 하나씩 짚어준다', type: 'A' },
      { label: 'B', text: '"그럴 수 있어"라며 감정을 먼저 공감한다', type: 'B' },
      { label: 'C', text: '강점 찾기 방법을 체계적으로 설명해준다', type: 'C' },
      { label: 'D', text: '내 경험을 이야기해주며 동기를 자극한다', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '누군가 목표를 못 지켰다고 한다면?',
    options: [
      { label: 'A', text: '왜 못 지켰는지 원인을 같이 분석한다', type: 'A' },
      { label: 'B', text: '너무 자책하지 말라고 위로한다', type: 'B' },
      { label: 'C', text: '목표를 더 잘게 나눠 다시 설계한다', type: 'C' },
      { label: 'D', text: '다시 도전하게 만드는 말을 해준다', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '멘토링에서 가장 중요하다고 생각하는 것은?',
    options: [
      { label: 'A', text: '현실적인 조언', type: 'A' },
      { label: 'B', text: '정서적 지지', type: 'B' },
      { label: 'C', text: '방향성과 전략', type: 'C' },
      { label: 'D', text: '용기와 자극', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '당신의 업무 스타일은?',
    options: [
      { label: 'A', text: '문제 원인부터 파악', type: 'A' },
      { label: 'B', text: '팀 분위기 먼저 살핌', type: 'B' },
      { label: 'C', text: '구조화·계획 수립', type: 'C' },
      { label: 'D', text: '추진력·속도', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '학생이 "공부가 왜 필요한지 모르겠어요"라고 하면?',
    options: [
      { label: 'A', text: '현실적인 이유를 설명한다', type: 'A' },
      { label: 'B', text: '그 생각이 드는 이유를 묻는다', type: 'B' },
      { label: 'C', text: '진로와 연결해 설계해준다', type: 'C' },
      { label: 'D', text: '꿈 사례를 들려주며 자극한다', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '누군가 고민을 말할 때 나는?',
    options: [
      { label: 'A', text: '해결책부터 떠오른다', type: 'A' },
      { label: 'B', text: '감정이 먼저 느껴진다', type: 'B' },
      { label: 'C', text: '정리해주고 싶어진다', type: 'C' },
      { label: 'D', text: '힘을 주고 싶어진다', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '봉사를 한다면 나는?',
    options: [
      { label: 'A', text: '실질적 도움 주는 역할', type: 'A' },
      { label: 'B', text: '관계 맺는 역할', type: 'B' },
      { label: 'C', text: '체계 만드는 역할', type: 'C' },
      { label: 'D', text: '분위기 띄우는 역할', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '"멘토"라는 단어를 들으면?',
    options: [
      { label: 'A', text: '인생 조언자', type: 'A' },
      { label: 'B', text: '든든한 어른', type: 'B' },
      { label: 'C', text: '방향 제시자', type: 'C' },
      { label: 'D', text: '동기부여가', type: 'D' },
    ],
  },
];

const typeResults = {
  A: {
    class: 'type-a',
    badge: 'A형',
    icon: '\uD83D\uDCD8',
    name: '현실 조언가형',
    en: 'Practical Coach',
    traits: [
      '문제 분석 능력이 탁월합니다',
      '경험 기반의 현실적 조언을 합니다',
      '실행 중심으로 움직입니다',
    ],
    role: '학습 코칭, 진로 현실 조언',
    quote: '당신의 경험은 이미 검증된 교과서입니다.',
    color: 'var(--type-a)',
  },
  B: {
    class: 'type-b',
    badge: 'B형',
    icon: '\uD83D\uDC9B',
    name: '공감 지지형',
    en: 'Empathy Supporter',
    traits: [
      '감정 캐치 능력이 높습니다',
      '안정감을 제공합니다',
      '관계 형성에 강점이 있습니다',
    ],
    role: '정서적 멘토, 장기 멘토링에 적합',
    quote: '누군가에게는, 당신이 안전지대입니다.',
    color: 'var(--type-b)',
  },
  C: {
    class: 'type-c',
    badge: 'C형',
    icon: '\uD83D\uDDFA\uFE0F',
    name: '전략 설계형',
    en: 'Strategic Planner',
    traits: [
      '구조화 능력이 뛰어납니다',
      '목표 설정과 로드맵 작성에 능합니다',
      '명확한 방향을 제시합니다',
    ],
    role: '진로 설계 멘토, 학습 전략 코치',
    quote: '길을 아는 사람이 길을 만듭니다.',
    color: 'var(--type-c)',
  },
  D: {
    class: 'type-d',
    badge: 'D형',
    icon: '\uD83D\uDD25',
    name: '동기 부여형',
    en: 'Motivator',
    traits: [
      '에너지 전달력이 강합니다',
      '경험 스토리텔링에 능합니다',
      '도전을 자극합니다',
    ],
    role: '꿈 탐색 멘토, 진로 강연형',
    quote: '당신의 한 마디가 시작점이 됩니다.',
    color: 'var(--type-d)',
  },
};

/* ===== STATE ===== */
let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let isTransitioning = false;

/* ===== NAVIGATION ===== */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ===== QUIZ LOGIC ===== */
function startQuiz() {
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const optionsDiv = document.getElementById('options');
  const progressFill = document.getElementById('progress-fill');
  const currentQ = document.getElementById('current-q');

  currentQ.textContent = currentQuestion + 1;
  progressFill.style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';

  questionText.textContent = q.text;
  optionsDiv.innerHTML = '';

  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-label">${opt.label}</span>
      <span>${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(btn, opt.type));
    optionsDiv.appendChild(btn);
  });

  container.classList.remove('slide-out');
  container.classList.add('slide-in');
  container.addEventListener(
    'animationend',
    () => {
      container.classList.remove('slide-in');
    },
    { once: true }
  );
}

function selectOption(btn, type) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Visual feedback
  document.querySelectorAll('.option-btn').forEach((b) => b.classList.remove('selected'));
  btn.classList.add('selected');

  scores[type]++;

  // Delay before next question for animation
  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
      showResult();
    } else {
      const container = document.getElementById('question-container');
      container.classList.add('slide-out');
      container.addEventListener(
        'animationend',
        () => {
          renderQuestion();
          isTransitioning = false;
        },
        { once: true }
      );
    }
  }, 400);
}

/* ===== RESULT ===== */
function showResult() {
  const winner = getWinnerType();
  const result = typeResults[winner];
  const content = document.getElementById('result-content');

  content.className = `result-content ${result.class}`;
  content.innerHTML = `
    <div class="result-type-badge">${result.badge}</div>
    <div class="result-type-icon">${result.icon}</div>
    <h1 class="result-type-name">${result.name}</h1>
    <p class="result-type-en">${result.en}</p>

    <div class="result-card">
      <h3>당신의 멘토링 강점</h3>
      <ul class="trait-list">
        ${result.traits.map((t) => `<li><span class="trait-check">\u2714</span>${t}</li>`).join('')}
      </ul>
    </div>

    <div class="result-role">
      <div class="result-role-label">드림클래스에서의 역할</div>
      <div class="result-role-text">${result.role}</div>
    </div>

    <div class="result-quote">${result.quote}</div>

    <div class="score-breakdown">
      <h3>유형별 점수</h3>
      ${buildScoreBars()}
    </div>

    <div class="result-actions">
      <button class="btn-primary" onclick="startQuiz()">다시 테스트하기</button>
      <button class="btn-secondary" onclick="shareResult('${winner}')">결과 공유하기</button>
    </div>
  `;

  showScreen('result');

  // Animate score bars after render
  requestAnimationFrame(() => {
    setTimeout(animateScoreBars, 200);
  });
}

function getWinnerType() {
  let max = 0;
  let winner = 'A';
  for (const [type, score] of Object.entries(scores)) {
    if (score > max) {
      max = score;
      winner = type;
    }
  }
  return winner;
}

function buildScoreBars() {
  const types = [
    { key: 'A', label: '현실 조언가', color: 'var(--type-a)' },
    { key: 'B', label: '공감 지지', color: 'var(--type-b)' },
    { key: 'C', label: '전략 설계', color: 'var(--type-c)' },
    { key: 'D', label: '동기 부여', color: 'var(--type-d)' },
  ];

  return types
    .map(
      (t) => `
    <div class="score-row">
      <span class="score-label">${t.label}</span>
      <div class="score-bar-bg">
        <div class="score-bar-fill" data-type="${t.key}" style="background: ${t.color};"></div>
      </div>
      <span class="score-count">${scores[t.key]}</span>
    </div>
  `
    )
    .join('');
}

function animateScoreBars() {
  const maxScore = questions.length;
  document.querySelectorAll('.score-bar-fill').forEach((bar) => {
    const type = bar.dataset.type;
    const pct = (scores[type] / maxScore) * 100;
    bar.style.width = pct + '%';
  });
}

function shareResult(type) {
  const result = typeResults[type];
  const text = `나는 "${result.name}" (${result.en}) 멘토!\n${result.quote}\n\n나는 어떤 멘토인가? - 삼성 드림클래스 진단 테스트`;

  if (navigator.share) {
    navigator.share({
      title: '나는 어떤 멘토인가?',
      text: text,
    }).catch(() => {
      copyToClipboard(text);
    });
  } else {
    copyToClipboard(text);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('결과가 클립보드에 복사되었습니다!');
  }).catch(() => {
    showToast('공유 기능을 사용할 수 없습니다.');
  });
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: var(--text);
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
