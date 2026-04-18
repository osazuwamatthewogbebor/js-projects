const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImageEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async () => {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating..."
        animeImageEl.src = "spinner.svg"

        const response = await fetch("https://nekos.best/api/v2/wink");
        const data = await response.json();

        animeContainerEl.style.display = "block";
        animeNameEl.innerText = data.results[0].anime_name;
        animeImageEl.src = data.results[0].url;
        
    } catch (error) {
        console.log(error);
        animeNameEl.innerText = "Network problem. Please try again in a few minutes!";
        
    } finally {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";

    }
})