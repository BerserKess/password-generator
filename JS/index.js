const password = document.getElementById('password-generated');
const generateBtn = document.getElementById('generate-button');
const copyBtn = document.getElementById('copy-button');

const upperCase = [];
const lowerCase = [];
const numbers = [];
const symbols = ['$', '&', '-', '@', '?', '_', '#', '!'];

// Criar Listas
function createList(list, index1, index2) {
	for (let i = index1; i <= index2; i++) {
		list.push(String.fromCharCode(i));
	}
}

createList(upperCase, 65, 90);
createList(lowerCase, 97, 122);
createList(numbers, 48, 57);
function reset() {
	generatedPassword = '';
}
// Gerar senhas a partir das listas criadas
function generatePassword() {
	const upperCaseCheck = document.getElementById('char-type1');
	const lowerCaseCheck = document.getElementById('char-type2');
	const numbersCheck = document.getElementById('char-type3');
	const symbolsCheck = document.getElementById('char-type4');
	const amountOfChars = document.getElementById('number-of-chars').value;
	let generatedPassword = '';
	let charSet = [];
	if (
		upperCaseCheck.checked ||
		lowerCaseCheck.checked ||
		numbersCheck.checked ||
		symbolsCheck.checked
	) {
		reset();
		if (upperCaseCheck.checked) {
			charSet = charSet.concat(upperCase);
		}
		if (lowerCaseCheck.checked) {
			charSet = charSet.concat(lowerCase);
		}
		if (numbersCheck.checked) {
			charSet = charSet.concat(numbers);
		}
		if (symbolsCheck.checked) {
			charSet = charSet.concat(symbols);
		}
		reset();
		for (let i = 0; i < amountOfChars; i++) {
			let randomIndex = Math.floor(Math.random() * charSet.length);
			generatedPassword += charSet[randomIndex];
		}

		password.textContent = generatedPassword;
	} else {
		alert('Selecione uma opção primeiro!');
		password.textContent = '';
	}
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', () => {
	const passwordText = password.textContent;
	navigator.clipboard
		.writeText(passwordText)
		.then(() => {
			const copiedPopup = document.createElement('div');
			copiedPopup.textContent = 'Copiado';
			copiedPopup.classList.add('copied-popup');
			copyBtn.appendChild(copiedPopup);
			setTimeout(() => {
				copiedPopup.remove();
			}, 2000);
		})
		.catch(() => {
			alert('not copied');
		});
});
