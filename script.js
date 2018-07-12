$(document).ready(function() {
});

var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var errorUserAlert = document.querySelector('.error-alert');
var resetButton = document.querySelector('.reset-button');
var cardUl = document.querySelector('.card-ul')
var cardCount = 0;
var readCount = 0;
var unreadCount = cardCount - readCount;

titleInput.focus();
$(".user-stats").hide();

titleInput.addEventListener('keyup', checkInput);
urlInput.addEventListener('keyup', checkInput);
enterButton.addEventListener('click', enterInput)
cardUl.addEventListener('click', deleteCard)
cardUl.addEventListener('click', readCard)
resetButton.addEventListener('click', clearRead)


function enterInput(event) {
  event.preventDefault();
  if (validateURL() == true) {
    addCard();
    wipeInput();
  } else {
    errorAlert();
    urlInput.value = '';
    urlInput.focus();
  }     
};

function validateURL() {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(urlInput.value);
}

function errorAlert() {
  if (titleInput.value.length === 0 || urlInput.value.length === 0) {
    errorUserAlert.innerText = 'Please enter a title and valid website url'; 
  }
};

function addCard() {
  var cardItem = document.createElement('li');
  cardItem.innerHTML = `
  <h3>${titleInput.value}</h3>
  <hr>
  <a class="link" href="${urlInput.value}" target="_blank">${urlInput.value}</a>
  <hr class="second">
    <div class="clearfix">
      <button class="read-button">Read</button><button class="delete-button">Delete</button>
    </div>`;
  cardUl.prepend(cardItem);
  cardCount += 1;
  updateCount();
  $(".user-stats").show();
};

function deleteCard(event) {
  event.preventDefault();
  if (event.target.className === "delete-button") {
    event.target.parentNode.parentNode.remove()
    cardCount -= 1;
    updateCount();
  }
};

function readCard(event) {
  event.preventDefault();
  if (event.target.className === "read-button" || event.target.className === "read-button read") {
    event.target.parentNode.parentNode.classList.toggle("read-li");
    event.target.classList.toggle("read");
    updateCount();
  }
};

function updateCount() {
  cardCount = document.querySelectorAll('li').length;
  readCount = document.getElementsByClassName("read").length;
  unreadCount = cardCount - readCount;
  userUpdateCount();
  hideStats();
}

function userUpdateCount() {
  var userCardCount = document.querySelector('.bookmarks');
  userCardCount.innerText = cardCount
  var userReadCount = document.querySelector('.read-links');
  userReadCount.innerText = readCount
  var userUnreadCount = document.querySelector('.unread-links');
  userUnreadCount.innerText = unreadCount
};

function checkInput(event) {
  event.preventDefault();
  if (titleInput.value.length > 0 && urlInput.value.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}; 

function wipeInput() {
  titleInput.value = '';
  urlInput.value = ''; 
  titleInput.focus();
};

function clearRead(event) {
  event.preventDefault();
  var readCards = document.getElementsByClassName('read-li');
  while (readCards.length > 0) {
    readCards[0].parentNode.removeChild(readCards[0]);
  }
  updateCount();
};

function hideStats() {
  if (cardCount == 0) {
    $(".user-stats").hide();
  } else {
    $(".user-stats").show();
  }
}

