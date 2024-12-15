// 完整的單字列表
const vocabularyList = [
    { word: 'abuse', options: ['濫用；虐待', '殘酷的', '脆弱的', '強調'], correctAnswer: 0 },
    { word: 'brutal', options: ['虐待', '殘酷的；野蠻的', '易受傷害的', '突顯'], correctAnswer: 1 },
    { word: 'vulnerable', options: ['殘酷的', '強調', '脆弱的；易受傷害的', '無情地'], correctAnswer: 2 },
    { word: 'highlight', options: ['虐待', '殘酷的', '脆弱的', '強調；突顯'], correctAnswer: 3 },
    { word: 'mercilessly', options: ['無情地；殘忍地', '永久的', '經濟', '操作員'], correctAnswer: 0 },
    { word: 'permanent', options: ['經濟', '永久的；持久的', '操作員', '足夠的'], correctAnswer: 1 },
    { word: 'economy', options: ['永久的', '操作員', '經濟', '需求'], correctAnswer: 2 },
    { word: 'operator', options: ['經濟', '永久的', '需求', '操作員；營運商'], correctAnswer: 3 },
    { word: 'adequate', options: ['足夠的；適當的', '需求', '罷工', '疲憊'], correctAnswer: 0 },
    { word: 'demand', options: ['足夠的', '需求；要求', '罷工', '疲憊'], correctAnswer: 1 },
    { word: 'strike', options: ['需求', '疲憊', '罷工；打擊', '非法的'], correctAnswer: 2 },
    { word: 'exhaustion', options: ['需求', '罷工', '非法的', '疲憊；耗盡'], correctAnswer: 3 },
    { word: 'illegal', options: ['非法的', '承諾', '複雜的', '群眾'], correctAnswer: 0 },
    { word: 'commit', options: ['非法的', '犯（罪）；承諾', '複雜的', '群眾'], correctAnswer: 1 },
    { word: 'complex', options: ['承諾', '群眾', '複雜的', '順從的'], correctAnswer: 2 },
    { word: 'herd', options: ['複雜的', '承諾', '順從的', '牧群；群眾'], correctAnswer: 3 },
    { word: 'obedient', options: ['順從的；聽話的', '聰明的', '誘惑', '溫順的'], correctAnswer: 0 },
    { word: 'intelligent', options: ['順從的', '聰明的；有才智的', '誘惑', '溫順的'], correctAnswer: 1 },
    { word: 'lure', options: ['聰明的', '溫順的', '誘惑；引誘', '順從的'], correctAnswer: 2 },
    { word: 'tame', options: ['誘惑', '聰明的', '順從的', '馴服的；溫順的'], correctAnswer: 3 },
    { word: 'pilgrimage', options: ['朝聖之旅', '統一', '誇張', '精確的'], correctAnswer: 0 },
    { word: 'unify', options: ['朝聖', '統一；使成一體', '誇大', '當局'], correctAnswer: 1 },
    { word: 'exaggeration', options: ['統一', '當局', '誇張；誇大', '投擲'], correctAnswer: 2 },
    { word: 'undoubtedly', options: ['誇張', '統一', '當局', '毫無疑問地'], correctAnswer: 3 },
    { word: 'exact', options: ['精確的；確切的', '當局', '演員', '褪色'], correctAnswer: 0 },
    { word: 'authorities', options: ['精確的', '當局；官方', '褪色', '人群'], correctAnswer: 1 },
    { word: 'cast', options: ['當局', '人群', '投擲；演員陣容', '爆炸性的'], correctAnswer: 2 },
    { word: 'fade', options: ['演員', '人群', '爆炸性的', '褪色；消失'], correctAnswer: 3 },
    { word: 'throng', options: ['人群；群眾', '爆炸物', '刺穿', '出現'], correctAnswer: 0 },
    { word: 'explosive', options: ['人群', '爆炸性的；爆炸物', '穿透', '祝福'], correctAnswer: 1 },
    { word: 'pierce', options: ['爆炸性的', '出現', '刺穿；穿透', '跪下'], correctAnswer: 2 },
    { word: 'emerge', options: ['刺穿', '祝福', '跪下', '出現；浮現'], correctAnswer: 3 },
    { word: 'blessing', options: ['祝福；恩賜', '跪下', '人行道', '款待'], correctAnswer: 0 },
    { word: 'kneel', options: ['祝福', '跪下', '人行道', '設施'], correctAnswer: 1 },
    { word: 'pavement', options: ['跪下', '款待', '人行道', '住宿'], correctAnswer: 2 },
    { word: 'hospitality', options: ['人行道', '設施', '宗教的', '款待；好客'], correctAnswer: 3 },
    { word: 'enthusiastically', options: ['熱情地', '設施', '住宿', '宗教的'], correctAnswer: 0 },
    { word: 'facilities', options: ['熱情', '設施；設備', '宗教的', '人性'], correctAnswer: 1 },
    { word: 'accommodations', options: ['設施', '宗教的', '住宿；膳宿', '儀式'], correctAnswer: 2 },
    { word: 'religious', options: ['住宿', '人性', '儀式', '宗教的'], correctAnswer: 3 },
    { word: 'humanity', options: ['人性；人類', '儀式', '信仰', '遺產'], correctAnswer: 0 },
    { word: 'ritual', options: ['人性', '儀式；典禮', '指定', '理論'], correctAnswer: 1 },
    { word: 'belief', options: ['儀式', '遺產', '信仰；信念', '心理學'], correctAnswer: 2 },
    { word: 'designate', options: ['信仰', '遺產', '理論', '指定；指派'], correctAnswer: 3 },
    { word: 'heritage', options: ['遺產；傳統', '理論', '心理學', '證明'], correctAnswer: 0 },
    { word: 'theory', options: ['遺產', '理論；學說', '解釋', '決定'], correctAnswer: 1 },
    { word: 'psychology', options: ['理論', '證明', '心理學', '僵硬的'], correctAnswer: 2 },
    { word: 'demonstrate', options: ['心理學', '解釋', '決定', '證明；示範'], correctAnswer: 3 },
    { word: 'interpret', options: ['解釋；詮釋', '決定', '僵硬的', '抓'], correctAnswer: 0 },
    { word: 'determine', options: ['解釋', '決定；確定', '抓', '展覽'], correctAnswer: 1 },
    { word: 'stiff', options: ['決定', '展覽', '僵硬的', '姿勢'], correctAnswer: 2 },
    { word: 'scratch', options: ['僵硬的', '展覽', '姿勢', '抓；刮'], correctAnswer: 3 },
    { word: 'exhibit', options: ['展覽；展現', '姿勢', '此外', '意識到的'], correctAnswer: 0 },
    { word: 'gesture', options: ['展覽', '姿勢；手勢', '觀察', '反轉'], correctAnswer: 1 },
    { word: 'moreover', options: ['姿勢', '意識到的', '此外；而且', '情況'], correctAnswer: 2 },
    { word: 'conscious', options: ['此外', '觀察', '反轉', '有意識的；意識到的'], correctAnswer: 3 },
    { word: 'observe', options: ['觀察；遵守', '反轉', '情況', '最初'], correctAnswer: 0 },
    { word: 'reverse', options: ['觀察', '反轉；相反', '最初', '瞥一眼'], correctAnswer: 1 },
    { word: 'circumstance', options: ['反轉', '瞥一眼', '情況；環境', '自動地'], correctAnswer: 2 },
    { word: 'initially', options: ['情況', '瞥一眼', '追蹤', '最初；開始'], correctAnswer: 3 },
    { word: 'glance', options: ['瞥一眼', '自動地', '追蹤', '崇拜'], correctAnswer: 0 },
    { word: 'automatically', options: ['瞥一眼', '自動地', '愛慕', '互動'], correctAnswer: 1 },
    { word: 'track', options: ['自動地', '愛慕', '追蹤；軌道', '有意義的'], correctAnswer: 2 },
    { word: 'adore', options: ['追蹤', '愛慕', '互動', '崇拜；愛慕'], correctAnswer: 3 },
    { word: 'affection', options: ['愛慕；情感', '互動', '有意義的', '同伴'], correctAnswer: 0 },
    { word: 'interact', options: ['愛慕', '互動；交流', '同伴', '有意義的'], correctAnswer: 1 },
    { word: 'meaningful', options: ['互動', '同伴', '有意義的', '傢伙'], correctAnswer: 2 },
    { word: 'fellow', options: ['有意義的', '互動', '愛慕', '同伴；傢伙'], correctAnswer: 3 }
];

let quizWords = [];
let currentWordIndex = 0;
let timer;
let timeLeft;
const TIMER_SECONDS = 15;
const QUESTIONS_PER_QUIZ = 10;
const DELAY_BEFORE_NEXT = 2000; // 2秒延遲
let score = 0;
let answeredQuestions = [];

const wordElement = document.getElementById('current-word');
const speakButton = document.getElementById('speak-btn');
const optionsContainer = document.getElementById('options-container');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');

// Speech synthesis setup
const speech = window.speechSynthesis;

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speech.speak(utterance);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeQuiz() {
    quizWords = shuffleArray([...vocabularyList]).slice(0, QUESTIONS_PER_QUIZ);
    currentWordIndex = 0;
    score = 0;
    answeredQuestions = [];
    displayWord();
}

function startTimer() {
    timeLeft = TIMER_SECONDS;
    timerElement.textContent = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    clearInterval(timer);
    disableOptions();
    resultElement.innerHTML = '<div class="result-message incorrect">時間到！<br>正確答案：' + 
        quizWords[currentWordIndex].options[quizWords[currentWordIndex].correctAnswer] + '</div>';
    answeredQuestions.push({
        word: quizWords[currentWordIndex].word,
        correct: false,
        answer: '未作答',
        correctAnswer: quizWords[currentWordIndex].options[quizWords[currentWordIndex].correctAnswer]
    });
    
    setTimeout(proceedToNext, DELAY_BEFORE_NEXT);
}

function displayWord() {
    if (currentWordIndex >= QUESTIONS_PER_QUIZ) {
        showFinalResults();
        return;
    }

    const currentWord = quizWords[currentWordIndex];
    wordElement.textContent = currentWord.word;
    optionsContainer.innerHTML = '';
    resultElement.textContent = '';
    
    currentWord.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    nextButton.style.display = 'none';
    startTimer();
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentWord = quizWords[currentWordIndex];
    const options = document.querySelectorAll('.option-btn');
    const isCorrect = selectedIndex === currentWord.correctAnswer;
    
    options.forEach((option, index) => {
        if (index === currentWord.correctAnswer) {
            option.classList.add('correct');
        }
        if (index === selectedIndex && selectedIndex !== currentWord.correctAnswer) {
            option.classList.add('wrong');
        }
    });
    
    disableOptions();
    
    if (isCorrect) {
        score += 10;
        resultElement.innerHTML = '<div class="result-message correct">答對了！ +10分</div>';
    } else {
        resultElement.innerHTML = '<div class="result-message incorrect">答錯了！<br>正確答案：' + 
            currentWord.options[currentWord.correctAnswer] + '</div>';
    }
    
    answeredQuestions.push({
        word: currentWord.word,
        correct: isCorrect,
        answer: currentWord.options[selectedIndex],
        correctAnswer: currentWord.options[currentWord.correctAnswer]
    });
    
    setTimeout(proceedToNext, DELAY_BEFORE_NEXT);
}

function proceedToNext() {
    currentWordIndex++;
    displayWord();
}

function disableOptions() {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        option.disabled = true;
    });
}

function showFinalResults() {
    const container = document.querySelector('.quiz-container');
    let resultsHTML = `
        <h2>測驗結束！</h2>
        <h3>總分：${score} / 100</h3>
        <div class="answers-review">
            <h3>答題記錄：</h3>
            <table class="results-table">
                <tr>
                    <th>單字</th>
                    <th>你的答案</th>
                    <th>正確答案</th>
                    <th>結果</th>
                </tr>
    `;
    
    answeredQuestions.forEach((q, index) => {
        resultsHTML += `
            <tr>
                <td>${q.word}</td>
                <td>${q.answer}</td>
                <td>${q.correctAnswer}</td>
                <td>${q.correct ? '✓' : '✗'}</td>
            </tr>
        `;
    });
    
    resultsHTML += `
            </table>
        </div>
        <button onclick="initializeQuiz()" class="next-btn">重新開始</button>
    `;
    
    container.innerHTML = resultsHTML;
}

// Event listeners
speakButton.addEventListener('click', () => {
    speak(quizWords[currentWordIndex].word);
});

nextButton.addEventListener('click', () => {
    if (nextButton.textContent === 'Start Quiz') {
        nextButton.textContent = 'Next Word';
        initializeQuiz();
    }
});

// Initialize first question when page loads
nextButton.textContent = 'Start Quiz';
