var library = JSON.parse(localStorage.getItem('library'));
const $add = document.querySelector(".add-btn");
const $modal = document.querySelector('.for-modal');
const $title = document.querySelector('#book-title');
const $author = document.querySelector('#book-author');
const $pageNo = document.querySelector("#book-pages");
const $notreadStatus = document.querySelector('#book-Notread-status');
const $readStatus = document.querySelector('#book-Read-status');
const $btnSubmit = document.querySelector('.input-submit-button')

let $InfoStatusButton = document.querySelectorAll(".InfoStatusButton");

$InfoStatusButton.forEach(function(button){
  let currentElement = button.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML;
  
  button.addEventListener("click", function(){
    console.log($InfoStatusButton)
    findBook(currentElement)
  })
}) 


$btnSubmit.addEventListener('click',e => {
  
  e.preventDefault();
  if(($notreadStatus.checked || $readStatus.checked )  
  && $title.value != '' 
  && $author.value != '' 
  && $pageNo.value != ''){ 
    
    
    makingObject(checkStatus());
    render();
    closeAddBookModal();
    

    $title.value = '';
    $author.value = ''; 
    $pageNo.value = '';
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

function checkStatus(){
  if($notreadStatus.checked){
    return "Not Read";
  }else{
    return "Read";
  }
}



function BookConstructor(title,author,pageNo,readValue){
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
  if(readValue == "Read"){
    this.readValue = "Read";
  }else{
    this.readValue = "Not Read";
  } 
}

 
function makingObject(readValue){
  let newBook = new BookConstructor($title.value, $author.value, $pageNo.value,readValue)
  library.push(newBook);
  
 
  
}

function render(){
  
  var domElement = [];
  library.forEach((book,index) => {
    domElement += `
    <div class='for-listing'>
      <div class="listing-div-tile"><h3 class="listing-text-tile" >${book.title}</h3></div>
      <div class="listing-div-author"><h3 class="listing-text-author">${book.author}</h3></div>
      <div class="listing-div-pages"><h3 class="listing-text-pages">${book.pageNo}</h3></div>
      <div><button class="InfoStatusButton" onclick="findBook(${index})">${book.readValue}</button> </div>
      <div><button class="InfoDeleteButton" onclick="deleteBook(${index})">Delete</button> </div>
    </div>
    `;
     document.querySelector(".for-only-dom").innerHTML= domElement;
     saveToLocalStorage();
    
  }
  
    )
   
    
}function findBook(currentElementIndex){
  let currentElementStatus =  library[currentElementIndex].readValue;
  if( currentElementStatus == "Not Read"){
    library[currentElementIndex].readValue = "Read";
    console.log(library[currentElementIndex].readValue);
  }else{
    library[currentElementIndex].readValue = "Not Read";
    console.log(library[currentElementIndex].readValue);
  }
  render();
  
  }
  function deleteBook(currentElementIndex){
    library.splice(currentElementIndex,1);
    render();
  }
  function saveToLocalStorage(){
    localStorage.setItem("library", JSON.stringify(library))
  }