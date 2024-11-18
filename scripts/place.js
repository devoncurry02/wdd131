const temperature = 40;
const windSpeed = 5;

function calculateWindChill(temp,wind) {
    return(35.74+(0.6215*temp)-(35.75*Math.pow(wind,0.16))+(0.4275*temp*Math.pow(wind,0.16))).toFixed(1);
}

function displayWindChill() {
    const weatherElement = document.getElementById("windchill")
    if (temperature<=50 && windSpeed>3) {
        const windChill = calculateWindChill(temperature, windSpeed);
        weatherElement.textContent = `Windchill: ${windChill}F`;
    }
    else {
        weatherElement.textContent = 'N/A';
    }
}

window.addEventListener("load", displayWindChill);