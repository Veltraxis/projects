function generate() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    if (isNaN(min) || isNaN(max)) {
        alert("Enter valid numbers!");
        return;
    }
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerText = "Generated: " + number;
    // AI-style reasoning (fun logic)
    let reasons = [
        "This number balances the range evenly.",
        "Chosen based on random distribution.",
        "Optimized for fairness.",
        "This value ensures unpredictability.",
        "Generated to maintain randomness."
    ];
    let randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("reason").innerText = randomReason;
}
