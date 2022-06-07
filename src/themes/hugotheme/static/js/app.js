document.addEventListener("DOMContentLoaded", () => {
    for (let el of document.getElementsByClassName("a-card")) {
        el.onclick = (event) => {
            document.location.href = el.dataset["href"];
        };
    }
});