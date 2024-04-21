const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
let inputElement = document.querySelector(".userMessage");


let userMessage;

const MAX_DISTANCE_THRESHOLD = 20; // Anpassen Sie dies je nach Bedarf

const generateResponse = (incomingChatLi, userMessage) => {
    const botResponse = findResponseWithKeywords(userMessage);
    setMessageContent(incomingChatLi, botResponse);
};
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a.charAt(j - 1) === b.charAt(i - 1) ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[b.length][a.length];
}

const findResponseWithKeywords = (userMessage) => {
    for (const responseObj of keywordResponses) {
        for (const keyword of responseObj.keywords) {
            if (userMessage.toLowerCase().includes(keyword.toLowerCase())) {
                return responseObj.response;
            }
        }
    }
    return "Entschuldigung, ich habe das nicht verstanden.";
};


const setMessageContent = (chatLi, message) => {
    const messageElement = chatLi.querySelector("p");
    messageElement.textContent = message;
};

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : ` <span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    setMessageContent(chatLi, message);
    return chatLi;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    inputElement.value = "";
    if (!userMessage) return;

    chatbox.scrollTo(0, chatbox.scrollHeight);
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        const incomingChatLi = createChatLi("Denke nach...", "incoming");
        chatbox.appendChild(incomingChatLi);

        // Verwende die eigene Funktion, um die Antwort zu generieren
        generateResponse(incomingChatLi, userMessage);

        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
};

chatInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        handleChat();
    }
});

chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);
