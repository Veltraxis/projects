async function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;
    if (message === "") return;
    let chatbox = document.getElementById("chatbox");
    // Show user message
    chatbox.innerHTML += `<p><b>You:</b> ${message}</p>`;
    input.value = "";
    // Call AI API via backend proxy
    let response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: message }]
        })
    });
    let data = await response.json();
    let reply = data.choices[0].message.content;
    // Show AI reply
    chatbox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
}
