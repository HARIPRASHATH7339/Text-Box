const text = document.getElementById("text");
const count = document.getElementById("count");
const remaining = document.getElementById("remaining");
const progress = document.getElementById("progress");

text.addEventListener("input", function () {

    let length = text.value.length;

    count.textContent = length;

    remaining.textContent =
        (200 - length) + " characters left";

    progress.style.width =
        (length / 200) * 100 + "%";

});