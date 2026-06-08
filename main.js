const lottoContainer = document.getElementById('lotto-container');
const generatorBtn = document.getElementById('generator-btn');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getNumberColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
}

function displayNumber(numbers) {
    lottoContainer.innerHTML = '';
    for (const number of numbers) {
        const lottoNumber = document.createElement('div');
        lottoNumber.classList.add('lotto-number');
        lottoNumber.textContent = number;
        lottoNumber.style.backgroundColor = getNumberColor(number);
        lottoContainer.appendChild(lottoNumber);
    }
}

generatorBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumber(numbers);
});

// Initial number generation
const initialNumbers = generateNumbers();
displayNumber(initialNumbers);
