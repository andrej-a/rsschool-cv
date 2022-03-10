"use strict";
const triggers = document.querySelectorAll(".header__download-btn");
const path = "./src/img/testFile.docx";

function CreateDownloadItem(path) {
    const element = document.createElement("a");

    element.setAttribute("href", path);
    element.setAttribute("download", "amelyanovich-CV");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function init() {
    triggers.forEach(btn => {
        btn.addEventListener("click", () => {
            CreateDownloadItem(path);
        });
    });
}
export default init;