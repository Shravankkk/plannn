function crackCookie() {
    var fortuneText = document.getElementById("fortuneText");
    fortuneText.classList.remove("hidden");
    fortuneText.innerHTML = "Your fortune: A coffee date with someone trying to make you smile is coming soon.🤭🤭";
}

function resetCookie() {
    var fortuneText = document.getElementById("fortuneText");
    fortuneText.classList.add("hidden");
}
