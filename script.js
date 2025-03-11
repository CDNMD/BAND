document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".cyber-header h1");
    let direction = 1;

    setInterval(() => {
        direction *= -1;
        header.style.transform = `translateX(${direction * 10}px)`;
    }, 1000);
});
