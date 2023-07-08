var Library =[] ;
var readStatus = true;
var notReadStatus = true; 
const $add = document.querySelector(".add-btn");
const $modal = document.querySelector('.for-modal');
const $title = document.querySelector('#book-title');
const $author = document.querySelector('#book-author');
const $pageNo = document.querySelector("#book-pages");
const $notreadStatus = document.querySelector('#book-Notread-status');
const $readStatus = document.querySelector('#book-read-status');

const $btnSubmit = document.querySelector('.input-submit-button').addEventListener('click',e => {
  
  e.preventDefault();
  if(($notreadStatus.checked || $readStatus.checked )  
  && $title.value != '' 
  && $author.value != '' 
  && $pageNo.value != ''){ checkReadStatus();
    checkReadStatus()
    makingObject();
    render();
    
   }else{
    alert('plz enter somthing there')
   }
  
  
})
 
$modal.style.display = 'none';
$add.addEventListener('click', openAddBookModal);

function openAddBookModal(){
    $modal.style.display = 'block';
    
}function closeAddBookModal(){
  $modal.style.display = 'none';
}

function checkReadStatus(){
  if($notreadStatus.checked){
    readStatus = false;
  }else if($readStatus.checked){
    notReadStatus = false;
  }}

function BookConstructor(title,author,pageNo,readStatus,notReadStatus){
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  this.readStatus = readStatus;
  this.notReadStatus = notReadStatus;
}
 
function makingObject(){
  var newBook = new BookConstructor($title.value, $author.value, $pageNo.value ,readStatus,notReadStatus)
  Library.push(newBook);
}

function render(){
  
}