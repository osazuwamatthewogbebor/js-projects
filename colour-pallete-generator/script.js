const generateBtn = document.getElementById("generate-btn");
const palleteContainer = document.querySelector(".pallete-container");

generateBtn.addEventListener("click", generatePallete);

palleteContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("copy-btn")) {
        const hexValue = e.target.previousElementSibling.textContent

        // copy to clipboard
        navigator.clipboard
            .writeText(hexValue)
            .then(() => showCopySuccess(e.target))
            .catch((err) => console.log(err));
    } else if (e.target.classList.contains("colour")) {
        const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;
    
        // copy to clipboard
        navigator.clipboard
            .writeText(hexValue)
            .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn")))
            .catch((err) => console.log(err));
    };

});

function showCopySuccess(copyBtn) {
    copyBtn.classList.remove("far", "fa-copy");
    copyBtn.classList.add("fas", "fa-check");

    copyBtn.style.color = "$48bb78";

    setTimeout(() => {
        copyBtn.classList.remove("fas", "fa-check");
        copyBtn.classList.add("far", "fa-copy");
        copyBtn.style.color = "";
    }, 1500)
}

function generatePallete() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    };

    updatePalleteDisplay(colors);
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color
}


function updatePalleteDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".colour-box");

    colorBoxes.forEach((box, index) => {
        const color = colors[index]
        const colorDiv = box.querySelector(".colour");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    });
}

// Generate new pallete on refresh
generatePallete();