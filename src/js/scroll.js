"use strict";
export default function scroll() {
    const btn = document.querySelectorAll(".header__menu__list__item");

    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            window.scrollTo({
                top: document.querySelector(`.${e.target.innerText.toLowerCase()}`).getBoundingClientRect().top,
                behavior: "smooth"
            });
        });
    });
}