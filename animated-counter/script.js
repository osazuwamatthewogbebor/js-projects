const counters = document.querySelectorAll(".counter");
const speed = 1000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.textContent;
        
        const inc = target / speed;

        if (count < target) {
            counter.textContent = count + inc
            
            setTimeout(updateCount, 1);
        }
    }

    updateCount();
})