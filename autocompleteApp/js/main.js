const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

let countriesData = [];

async function loadCountries() {
    const res = await fetch('./data/countries.json');
    countriesData = await res.json();
}

loadCountries();

function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function searchCountries(value) {
    value = value.trim();
    if (!value) {
        matchList.innerHTML = "";
        return;
    };
    
    const safeValue = escapeRegex(value);
    const regex = new RegExp(`^${safeValue}`, 'i');
    
    let matches = countriesData.filter(country => 
        regex.test(country.name) || 
        regex.test(country.iso2) || 
        regex.test(country.iso3)
    );


    outputHtml(matches);
};

function outputHtml(matches) {
    if (!matches.length) {
        matchList.innerHTML = "";
        return;
    }

    const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.name} (${match.iso3}) 
                <span class="text-primary">${match.capital}</span><br>
                <span class="text-success">${match.region}</span>
            </h4>
            <small>Lat: ${match.latitude} / Long: ${match.longitude}</small>
            <small>Phone code: ${match.phone_code}</small>
            <small>Currency: ${match.currency_name} / ${match.currency} / ${match.currency_symbol}</small>
        </div>
        `
    ).join("");

    matchList.innerHTML = html
}

search.addEventListener("input", () => searchCountries(search.value));


