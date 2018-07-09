// =====================================================
// GLOBAL VARIABLES
// =====================================================

// user input
var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
// buttons
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
// cards
var cardUl = document.querySelector('.card-ul')
var cardCount = 0;
var readCount = 0;
var unreadCount = cardCount - readCount;

titleInput.focus();


// =====================================================
// EVENT LISTENERS
// =====================================================


titleInput.addEventListener('keyup', checkInput);
urlInput.addEventListener('keyup', checkInput);

enterButton.addEventListener('click', function(event) {
  event.preventDefault();
  addCard();
  titleInput.value = '';
  urlInput.value = '';          
});

cardUl.addEventListener('click', function(event) {
  
  if (event.target.className === "delete-button") {
    event.target.parentNode.parentNode.parentNode.remove()
  }
});

// =====================================================
// FUNCTIONS
// =====================================================

function addCard() {
  var cardItem = document.createElement('li');
  cardItem.innerHTML = `
  <li>
  <h3>${titleInput.value}</h3>
  <hr>
  <a>${urlInput.value}</a>
  <hr>
    <div class="clearfix">
      <button class="read-button">Read</button><button class="delete-button">Delete</button>
    </div>
  </li>`;
  cardUl.appendChild(cardItem);
};

function checkInput() {
  event.preventDefault();
  if (titleInput.value.length > 0 && urlInput.value.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}; 

rewrite regexp
function verifyUrl() {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test = true) {
    return true;
  } else {
    return false;
  }
}