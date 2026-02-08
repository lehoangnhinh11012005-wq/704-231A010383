function startProgress() {
    let bar = document.getElementById("progress-bar");
    let width = 0;
    bar.style.width = "0%";
    bar.innerHTML = "0%";

    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    }, 50); // 100 bước × 50ms = 5 giây
}
