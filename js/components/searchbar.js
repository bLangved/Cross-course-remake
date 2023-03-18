const form = document.querySelector('.searchbar-form');
const input = form.querySelector('input[type="text"]');
const button = form.querySelector('.searchbar-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm) {
    window.location.href = `/search?q=${searchTerm}`;
  }
});