const formSearchbar = document.querySelector('.searchbar-form');
if(formSearchbar){
const inputSearchbar = formSearchbar.querySelector('input[type="text"]');
const buttonSearchbar = formSearchbar.querySelector('.searchbar-btn');

formSearchbar.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = inputSearchbar.value.trim();
  if (searchTerm) {
    window.location.href = `/search?q=${searchTerm}`;
  }
});
}