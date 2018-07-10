// =====================================================
// GLOBAL VARIABLES
// =====================================================

var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var errorUserAlert = document.querySelector('.error-alert');
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
  if (validateURL() == true) {
    addCard();
    wipeInput();
  } else {
    errorAlert();
    urlInput.value = '';
    urlInput.focus();
  }     
});

cardUl.addEventListener('click', function(event) {
  if (event.target.className === "delete-button") {
    event.target.parentNode.parentNode.remove()
    cardCount -= 1;
    updateCount();
  }
});

cardUl.addEventListener('click', function(event) {
  if (event.target.className === "read-button") {
    event.target.parentNode.parentNode.classList.toggle("read");
    updateCount();
  }
});

// =====================================================
// FUNCTIONS
// =====================================================

function validateURL() {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(urlInput.value);
}

function addCard() {
  var cardItem = document.createElement('li');
  cardItem.innerHTML = `
  <h3>${titleInput.value}</h3>
  <hr>
  <a href="${urlInput.value}" target="_blank">${urlInput.value}</a>
  <hr>
    <div class="clearfix">
      <button class="read-button">Read</button><button class="delete-button">Delete</button>
    </div>`;
  cardUl.prepend(cardItem);
  cardCount += 1;
};

function errorAlert() {
  if (titleInput.value.length === 0 || urlInput.value.length === 0) {
    errorUserAlert.innerText = 'Please enter a title and valid website url'; 
  }
};

function updateCount() {
  readCount = document.getElementsByClassName("read").length;
  unreadCount = cardCount - readCount;
  console.log(readCount, cardCount, unreadCount)
}

function checkInput() {
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
}