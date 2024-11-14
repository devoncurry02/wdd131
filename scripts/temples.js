const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', function () {
	navigation.classList.toggle('open');
	hamButton.textContent = hamButton.textContent === '❌' ? '☰' : '❌';
});