const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const subjectSelect = document.getElementById("subjectSelect");
const explanationEl = document.getElementById("explanation");

let correctAnswer = "", explanationText = "", selectedSubject = "";
let timerInterval = null;
let questionHistory = JSON.parse(localStorage.getItem("questionHistory") || "[]");

function closeQuiz() {
    document.getElementById("quiz-popup").style.display = "none";
    clearInterval(timerInterval);
}

// --- Lưu lịch sử ---
function saveQuestionToHistory(q) {
    if (!questionHistory.includes(q)) {
        questionHistory.push(q);
        localStorage.setItem("questionHistory", JSON.stringify(questionHistory.slice(-50)));
    }
}
function getAvoidListPrompt() {
    if (questionHistory.length === 0) return "";
    return `\nTránh lặp lại các câu hỏi sau:\n- ${questionHistory.join('\n- ')}\n`;
}

// --- Timer ---
function startTimer(duration) {
    clearInterval(timerInterval);
    let timeLeft = duration;
    updateTimerDisplay(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        if (timeLeft <= 0) { clearInterval(timerInterval); handleTimeout(); }
    }, 1000);
}
function updateTimerDisplay(sec) {
    timerEl.textContent = `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}
function handleTimeout() {
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) btn.classList.add("correct");
    });
    questionEl.textContent = "⏰ Hết giờ!";
    showExplanation();
}

// --- Load câu hỏi ---
async function loadQuestion() {
    if (!selectedSubject) { questionEl.textContent = "⚠️ Hãy chọn môn học trước"; return; }
    questionEl.textContent = "Loading...";
    optionsEl.innerHTML = ""; explanationEl.style.display = "none"; timerEl.textContent = "";

    const q = await fetchQuestionFromGemini();
    if (!q || !q.question) { questionEl.textContent = "❌ Lỗi tải câu hỏi"; return; }
    saveQuestionToHistory(q.question);

    questionEl.textContent = q.question;
    correctAnswer = q.answer;
    explanationText = q.explanation || "Không có giải thích.";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt; btn.className = "option-btn";
        btn.onclick = () => { clearInterval(timerInterval); handleAnswer(btn, opt); };
        optionsEl.appendChild(btn);
    });
    startTimer((selectedSubject === "it" || selectedSubject === "english") ? 10 : 60);
}

function handleAnswer(btn, opt) {
    document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
    if (opt === correctAnswer) { btn.classList.add("correct"); }
    else {
        btn.classList.add("incorrect");
        document.querySelectorAll(".option-btn").forEach(b => { if (b.textContent === correctAnswer) b.classList.add("correct"); });
    }
    showExplanation();
}
function showExplanation() {
    explanationEl.textContent = explanationText;
    explanationEl.style.display = "block";
}

// --- API Gemini ---
async function fetchQuestionFromGemini() {
    const avoidList = getAvoidListPrompt();
    let prompt = "";
    if (selectedSubject === "English") {
        prompt = `Hãy tạo một câu hỏi trắc nghiệm về từ vựng tiếng anh theo các chủ đề như: Technology, Environment, Health, Education, Culture, Travel, Food, Sports, Business,...
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến từ vựng tiếng anh.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
    }
    else if (selectedSubject === "ds") {
        prompt = `Hãy tạo một câu hỏi trắc nghiệm về môn học đại số tuyến tính tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến đại số tuyến tính.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
    }
    else if (selectedSubject === "jp") {
        prompt = `Hãy tạo một câu hỏi ôn tập bảng chữ cái tiếng nhật Hiragana và Katakana
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến bảng chữ cái tiếng nhật Hiragana và Katakana.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
- Giải thích bằng tiếng Việt.
- Trả về kết quả dưới dạng JSON như sau:
{
  "question": "Câu hỏi ở đây?",
  "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"],
  "answer": "Lựa chọn đúng",
  "explanation": "Giải thích đáp án đúng"
}`;
    }
    else if (selectedSubject === "gt") {
        prompt = `Hãy tạo một câu hỏi ôn tập giải tích 1 tại việt nam (hust)
${avoidList}
Yêu cầu:
- Nội dung câu hỏi liên quan trực tiếp đến giải tích 1.
- Ngẫu nhiên chọn một trong các chủ đề.
- Câu hỏi có 4 lựa chọn trả lời, trong đó chỉ có 1 đáp án đúng.
- Tránh lặp lại câu hỏi và đáp án ở các lần gọi.
- Thêm phần giải thích ngắn gọn (1-5 câu) cho đáp án đúng.(không giải thích thêm)
- Câu trả lời đưa ra tuân thủ hoàn toàn theo định dạng JSON và không giải thích gì thêm.
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
    try { return JSON.parse(txt); } catch (e) { console.error("Parse error", txt); return null; }
}

// --- sự kiện ---
subjectSelect.addEventListener("change", e => { selectedSubject = e.target.value; if (selectedSubject) loadQuestion(); });
document.getElementById("Load").addEventListener("click", loadQuestion);