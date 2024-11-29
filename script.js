const surpriseBtn = document.getElementById('surprise-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.getElementById('close-btn');

// Show popup when surprise button is clicked
surpriseBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Hide popup when close button is clicked
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});