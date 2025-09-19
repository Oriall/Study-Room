const texts = [
    "",
    "Stay focused and keep learning.",
    "Never give up, success is waiting for you.",
    "A day without learning is a day wasted.",
    "Type 'quiz' to let AI generate quiz questions for you.",
    "Type 'pdf' to upload a file and start learning.",
    "Type 'text' to add your own notes and keep track of ideas."
];

let index = 0;
const textContainer = document.getElementById("text-container");

function typeTextAnimation(element, text, speed = 70, callback) { // Tăng speed để gõ chậm hơn
    element.textContent = ""; // Xóa nội dung cũ
    let i = 0;

    function typeChar() {
        if (i < text.length) {
            element.textContent += text[i]; // Hiển thị cả dấu cách
            i++;
            setTimeout(typeChar, speed);
        } else {
            setTimeout(callback, 2000); // Chờ 4 giây trước khi đổi sang câu tiếp theo
        }
    }

    typeChar();
}

function startTyping() {
    typeTextAnimation(textContainer, texts[index], 120, () => { // Tốc độ gõ là 120ms/ký tự
        index = (index + 1) % texts.length;
        startTyping();
    });
}

startTyping();
