const rangeBar = document.getElementById('range-bar');
const numberOfChars = document.getElementById('number-of-chars');

rangeBar.addEventListener('input', () => {
	numberOfChars.value = rangeBar.value;
});

numberOfChars.addEventListener('input', () => {
	rangeBar.value = numberOfChars.value;
});
