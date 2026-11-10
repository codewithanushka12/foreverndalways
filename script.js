

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {
    const isHidden = surpriseMessage.hidden;

    surpriseMessage.hidden = !isHidden;

    surpriseBtn.textContent = isHidden
        ? "Close Surprise ♡"
        : "Open Your Surprise 🎁";

    surpriseBtn.setAttribute("aria-expanded", String(isHidden));
});
