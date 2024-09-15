
let adviceCounter = 1;
let nextAdvice = '';

async function getAdvice() {

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('advice').textContent =  `"${data.slip.advice}"`;

        adviceCounter++;
        document.getElementById('adviceNumber').textContent = `ADVICE #${adviceCounter}`
    } catch (error) {
        console.error("Error in finding advice", error)
    }

 
}

getAdvice();
document.getElementById('getAdvice').addEventListener('click', getAdvice);


