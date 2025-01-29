const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    cursorOutline.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        topt: `${posY}px`
    }, { duration: 500, fill: "forwards" })
})
