const $add = document.querySelector(".add-btn")
const $modal = document.querySelector('.for-modal')
let visiblityModal;
$modal.style.display = 'none';


$add.addEventListener('click', openAddBookModal);

function openAddBookModal(){
 
  $modal.style.display = 'block';
    console.log('hai')
}function closeAddBookModal(){
  $modal.style.display = 'none';
}