function crackCookie() {
    var fortuneText = document.getElementById("fortuneText");
    fortuneText.classList.remove("hidden");
    fortuneText.innerHTML = "Your fortune: Soon, you’ll be enjoying a coffee date with a quirky guy who makes fun websites. 😉🍪";
}

function resetCookie() {
    var fortuneText = document.getElementById("fortuneText");
    fortuneText.classList.add("hidden");
}
