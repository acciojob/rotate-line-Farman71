document.addEventListener("DOMContentLoaded", () => {
    let angle = 0;
    const line = document.getElementById('line');

    if (line) {
        setInterval(() => {
            angle += 2;
            line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }, 20);
    } else {
        console.error("Element #line not found!");
    }
});
