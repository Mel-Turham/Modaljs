const openModal = document.querySelector('.js-open-modal');
const conatainerModal = document.querySelector('.js-container-modal');
const closeModal = document.querySelector('button[type="reset"]');

closeModal.addEventListener('click', () => {
	conatainerModal.classList.remove('active');
});

openModal.addEventListener('click', () => {
	conatainerModal.classList.add('active');
});
