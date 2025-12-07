// ==================== BỘ DATA TỪ VỰNG ====================
const vocabularyData = [
  // Bài 5
  { id: 1, hiragana: "いきます", kanji: "行きます", meaning: "đi" },
  { id: 2, hiragana: "きます", kanji: "来ます", meaning: "đến" },
  { id: 3, hiragana: "かえります", kanji: "帰ります", meaning: "về" },
  { id: 4, hiragana: "がっこう", kanji: "学校", meaning: "trường học" },
  { id: 5, hiragana: "スーパー", kanji: "", meaning: "siêu thị" },
  { id: 6, hiragana: "えき", kanji: "駅", meaning: "ga, nhà ga" },
  // Bài 6
  { id: 7, hiragana: "たべます", kanji: "食べます", meaning: "ăn" },
  { id: 8, hiragana: "のみます", kanji: "飲みます", meaning: "uống" },
  { id: 9, hiragana: "みます", kanji: "見ます", meaning: "xem, nhìn" },
  { id: 10, hiragana: "ききます", kanji: "聞きます", meaning: "nghe, hỏi" },
  { id: 11, hiragana: "よみます", kanji: "読みます", meaning: "đọc" },
  { id: 12, hiragana: "かきます", kanji: "書きます", meaning: "viết" },
  // Bài 7
  { id: 13, hiragana: "きります", kanji: "切ります", meaning: "cắt" },
  { id: 14, hiragana: "おくります", kanji: "送ります", meaning: "gửi" },
  { id: 15, hiragana: "あげます", kanji: "", meaning: "cho, tặng" },
  { id: 16, hiragana: "もらいます", kanji: "", meaning: "nhận" },
  { id: 17, hiragana: "かします", kanji: "貸します", meaning: "cho mượn" },
  { id: 18, hiragana: "かります", kanji: "借ります", meaning: "mượn" },
];

const kanjiData = [
  {
    id: 1,
    kanji: "日",
    meaning: "mặt trời, ngày",
    onyomi: "にち、じつ",
    kunyomi: "ひ、か",
    examples: ["日本 (にほん) - Nhật Bản", "毎日 (まいにち) - mỗi ngày"]
  },
  {
    id: 2,
    kanji: "月",
    meaning: "mặt trăng, tháng",
    onyomi: "げつ、がつ",
    kunyomi: "つき",
    examples: ["月曜日 (げつようび) - thứ hai", "一月 (いちがつ) - tháng một"]
  },
  {
    id: 3,
    kanji: "火",
    meaning: "lửa",
    onyomi: "か",
    kunyomi: "ひ",
    examples: ["火曜日 (かようび) - thứ ba", "火事 (かじ) - hỏa hoạn"]
  },
  {
    id: 4,
    kanji: "水",
    meaning: "nước",
    onyomi: "すい",
    kunyomi: "みず",
    examples: ["水曜日 (すいようび) - thứ tư", "水道 (すいどう) - vòi nước"]
  },
  {
    id: 5,
    kanji: "木",
    meaning: "cây",
    onyomi: "もく、ぼく",
    kunyomi: "き",
    examples: ["木曜日 (もくようび) - thứ năm", "木 (き) - cây"]
  },
  {
    id: 6,
    kanji: "金",
    meaning: "vàng, tiền",
    onyomi: "きん、こん",
    kunyomi: "かね",
    examples: ["金曜日 (きんようび) - thứ sáu", "お金 (おかね) - tiền"]
  },
  {
    id: 7,
    kanji: "土",
    meaning: "đất",
    onyomi: "ど、と",
    kunyomi: "つち",
    examples: ["土曜日 (どようび) - thứ bảy", "土地 (とち) - đất đai"]
  },
  {
    id: 8,
    kanji: "人",
    meaning: "người",
    onyomi: "じん、にん",
    kunyomi: "ひと",
    examples: ["人 (ひと) - người", "日本人 (にほんじん) - người Nhật"]
  },
  {
    id: 9,
    kanji: "一",
    meaning: "một",
    onyomi: "いち",
    kunyomi: "ひと",
    examples: ["一つ (ひとつ) - một cái", "一日 (いちにち) - một ngày"]
  },
  {
    id: 10,
    kanji: "二",
    meaning: "hai",
    onyomi: "に",
    kunyomi: "ふた",
    examples: ["二つ (ふたつ) - hai cái", "二日 (ふつか) - ngày 2"]
  },
];

// ==================== CODE CHÍNH ====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const subjectSelect = document.getElementById("subjectSelect");
const explanationEl = document.getElementById("explanation");

let correctAnswer = "";
let explanationText = "";
let selectedSubject = "";
let timerInterval = null;
let currentQuestionType = ""; // "multiple-choice" - "essay" - "kanji"
let questionCounter = 0;

// Quản lý lịch sử câu hỏi (lưu trong memory)
let questionHistory = [];
let kanjiHistory = [];

// ==================== QUẢN LÝ LỊCH SỬ ====================
function saveQuestionToHistory(questionText) {
  if (!questionHistory.includes(questionText)) {
    questionHistory.push(questionText);
    if (questionHistory.length > 50) {
      questionHistory.shift();
    }
  }
}

function saveKanjiToHistory(kanjiChar) {
  if (!kanjiHistory.includes(kanjiChar)) {
    kanjiHistory.push(kanjiChar);
    if (kanjiHistory.length > 50) {
      kanjiHistory.shift();
    }
  }
}

function getAvoidListPrompt() {
  if (questionHistory.length === 0) return "";
  return `\nTránh lặp lại các câu hỏi sau:\n- ${questionHistory.join('\n- ')}\n`;
}

// ==================== TIMER ====================
function startTimer(duration) {
  clearInterval(timerInterval);
  let timeLeft = duration;
  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `${mins}:${secs}`;
}

function handleTimeout() {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });
  questionEl.innerHTML = '<span style="color: #FF2323;">⏰ Hết giờ!</span> Đáp án đúng đã được hiển thị.';
  showExplanation();
}

// ==================== CHỌN LOẠI CÂU HỎI ====================
function chooseQuestionType() {
  if (selectedSubject !== "jp") {
    return "multiple-choice";
  }

  questionCounter++;
  
  // Mỗi 4 câu từ vựng thì chèn 1 câu Kanji
  if (questionCounter % 5 === 0) {
    return "kanji";
  }

  // Ngẫu nhiên giữa trắc nghiệm và tự luận cho từ vựng
  return Math.random() < 0.7 ? "multiple-choice" : "multiple-choice";
}

// ==================== TẠO CÂU HỎI KANJI ====================
function generateKanjiQuestion() {
  const availableKanji = kanjiData.filter(k =>
    !kanjiHistory.includes(k.kanji)
  );

  if (availableKanji.length < 4) {
    kanjiHistory = [];
  }

  const kanjiToUse = availableKanji.length >= 4 ? availableKanji : kanjiData;
  const correctKanji = kanjiToUse[Math.floor(Math.random() * kanjiToUse.length)];

  // Tạo 3 đáp án sai
  const wrongKanji = [];
  while (wrongKanji.length < 3) {
    const randomKanji = kanjiData[Math.floor(Math.random() * kanjiData.length)];
    if (randomKanji.id !== correctKanji.id &&
      !wrongKanji.find(k => k.id === randomKanji.id)) {
      wrongKanji.push(randomKanji);
    }
  }

  // Kiểm tra xem có phải là số không
  const numberKanji = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万"];
  const isNumberKanji = numberKanji.includes(correctKanji.kanji);

  // Tạo danh sách các kiểu câu hỏi
  const questionTypes = [
    {
      type: "meaning",
      question: `Chữ Kanji "${correctKanji.kanji}" có nghĩa là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.meaning),
      answer: correctKanji.meaning
    },
    {
      type: "reading",
      question: `Cách đọc Onyomi của chữ "${correctKanji.kanji}" là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.onyomi),
      answer: correctKanji.onyomi
    }
  ];

  // Chỉ thêm câu hỏi Kunyomi nếu KHÔNG phải là số và có kunyomi
  if (!isNumberKanji && correctKanji.kunyomi && correctKanji.kunyomi.trim() !== "") {
    questionTypes.push({
      type: "kunyomi",
      question: `Cách đọc Kunyomi của chữ "${correctKanji.kanji}" là gì?`,
      options: [correctKanji, ...wrongKanji].sort(() => Math.random() - 0.5).map(k => k.kunyomi),
      answer: correctKanji.kunyomi
    });
  }

  const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

  const explanation = `
    <div style="font-size: 48px; font-weight: bold; color: #B3ADDD; margin: 12px 0; text-align: center; text-shadow: 0 0 15px rgba(179, 173, 221, 0.4);">${correctKanji.kanji}</div>
    <div style="background: rgba(132, 79, 156, 0.15); padding: 12px; border-radius: 6px; margin: 10px 0; font-size: 12px; line-height: 1.7; color: #ffffffa3; font-family: Montserrat; border: 1px solid rgba(179, 173, 221, 0.2);">
      <strong style="color: rgba(255, 255, 255, 0.77);">Nghĩa:</strong> ${correctKanji.meaning}<br>
      <strong style="color: rgba(255, 255, 255, 0.77);">Onyomi:</strong> ${correctKanji.onyomi}<br>
      ${correctKanji.kunyomi && correctKanji.kunyomi.trim() !== "" ? `<strong style="color: rgba(255, 255, 255, 0.77);">Kunyomi:</strong> ${correctKanji.kunyomi}<br>` : ''}
      <strong style="color: rgba(255, 255, 255, 0.77);">Ví dụ:</strong><br>
      ${correctKanji.examples.map(ex => `<span style="color: #828487; margin-left: 8px;">• ${ex}</span>`).join('<br>')}
    </div>
  `;

  saveKanjiToHistory(correctKanji.kanji);

  return {
    question: selectedType.question,
    options: selectedType.options,
    answer: selectedType.answer,
    explanation: explanation
  };
}

// ==================== TẠO CÂU HỎI TỪ VỰNG ====================
function generateJapaneseMultipleChoice() {
  const availableWords = vocabularyData.filter(word =>
    !questionHistory.includes(word.hiragana)
  );

  if (availableWords.length < 4) {
    questionHistory = [];
  }

  const wordsToUse = availableWords.length >= 4 ? availableWords : vocabularyData;
  const correctWord = wordsToUse[Math.floor(Math.random() * wordsToUse.length)];

  const wrongWords = [];
  while (wrongWords.length < 3) {
    const randomWord = vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (randomWord.id !== correctWord.id &&
      !wrongWords.find(w => w.id === randomWord.id)) {
      wrongWords.push(randomWord);
    }
  }

  const allOptions = [correctWord, ...wrongWords]
    .sort(() => Math.random() - 0.5)
    .map(word => word.hiragana);

  const questionData = {
    question: `"${correctWord.meaning}" trong tiếng Nhật là gì?`,
    options: allOptions,
    answer: correctWord.hiragana,
    explanation: `<div style="color: #ffffffa3; font-family: Montserrat; font-size: 12px; line-height: 1.6;">
      <strong style="color: rgba(255, 255, 255, 0.77);">Đáp án đúng:</strong> <span style="color: #8FDF51; font-weight: 600;">${correctWord.hiragana}</span>${correctWord.kanji ? ` <span style="color: #B3ADDD;">(${correctWord.kanji})</span>` : ''}<br>
      <strong style="color: rgba(255, 255, 255, 0.77);">Nghĩa:</strong> ${correctWord.meaning}
    </div>`
  };

  saveQuestionToHistory(correctWord.hiragana);
  return questionData;
}

// ==================== LOAD CÂU HỎI ====================
async function loadQuestion() {
  if (!selectedSubject) {
    questionEl.textContent = "⚠️ Hãy chọn môn học trước";
    return;
  }

  questionEl.textContent = "Loading...";
  optionsEl.innerHTML = "";
  explanationEl.style.display = "none";
  timerEl.textContent = "";

  let questionData;

  // Nếu là môn Nhật thì dùng database có sẵn
  if (selectedSubject === "jp") {
    currentQuestionType = chooseQuestionType();

    if (currentQuestionType === "kanji") {
      questionData = generateKanjiQuestion();
    } else {
      questionData = generateJapaneseMultipleChoice();
    }
  } else {
    // Các môn khác vẫn dùng Gemini API
    currentQuestionType = "multiple-choice";
    questionData = await fetchQuestionFromGemini();
  }

  if (!questionData || !questionData.question) {
    questionEl.textContent = "❌ Lỗi tải câu hỏi";
    return;
  }

  if (selectedSubject !== "jp") {
    saveQuestionToHistory(questionData.question);
  }

  questionEl.innerHTML = questionData.question;
  correctAnswer = questionData.answer;
  explanationText = questionData.explanation || "Không có giải thích.";

  optionsEl.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => {
      clearInterval(timerInterval);
      handleAnswer(btn, option);
    };
    optionsEl.appendChild(btn);
  });

  // Timer
  if (selectedSubject === "english" || selectedSubject === "jp") {
    startTimer(15);
  } else {
    startTimer(60);
  }
}

// ==================== XỬ LÝ TRẢ LỜI ====================
function handleAnswer(button, selectedOption) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (selectedOption === correctAnswer) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    buttons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  showExplanation();
}

function showExplanation() {
  explanationEl.innerHTML = explanationText;
  explanationEl.style.display = "block";
}

// ==================== GỌI GEMINI API (cho các môn khác) ====================
async function fetchQuestionFromGemini() {
  const avoidList = getAvoidListPrompt();
  let prompt = "";

  if (selectedSubject === "english") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về từ vựng tiếng anh theo các chủ đề như: Technology, Environment, Health, Education, Culture, Travel, Food, Sports, Business,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến từ vựng tiếng anh.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "ds") {
    prompt = `Hãy tạo một câu hỏi trắc nghiệm về môn học đại số tuyến tính tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến đại số tuyến tính.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  } else if (selectedSubject === "gt") {
    prompt = `Hãy tạo một câu hỏi ôn tập giải tích 1 tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến giải tích 1.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
  }

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCbWfOla29VASM0_jlfPIhUCqeCyaZA5jU", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  const data = await res.json();
  let txt = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  txt = txt.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(txt);
  } catch (e) {
    console.error("Parse error", txt);
    return null;
  }
}

// ==================== SỰ KIỆN ====================
subjectSelect.addEventListener("change", e => {
  selectedSubject = e.target.value;
  questionCounter = 0; // Reset counter khi đổi môn
  questionHistory = []; // Reset lịch sử
  kanjiHistory = []; // Reset lịch sử kanji
  if (selectedSubject) loadQuestion();
});

document.getElementById("Load").addEventListener("click", loadQuestion);