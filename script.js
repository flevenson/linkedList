// user input
var titleInput = document.querySelector('.title-input').value;
var urlInput = document.querySelector('url-input').value;
// buttons
var enterButton = document.querySelector('enter-button');
var readButton = document.querySelector('read-button');
var deleteButton = document.querySelector('delete-button');
// messages
var notValid = document.querySelector('');
cardCount.value = document.querySelector('');
readCount.value = document.querySelector('');
unreadCount.value = document.querySelector('');
// counters
var cardCount = 0;
var readCount = 0;
var unreadCount = cardCount - readCount;

titleInput.focus();

enterbutton.addEventListener('keyup', function() {
  even.preventDefault();
  if (titleInput.value.length * urlInput.value.length > 0) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
});

enterButton.addEventListener('click', function() {
  event.preventDefault();
  if (verifyUrl(urlInput.value) = true) {
    addCard();
    titleInput.value = '';
    urlInput.value = '';
    cardCount += 1;
    return;
  } else {
    notValid = 'Please enter a valid URL';
    return;
  }
});

readButton.addEventListener('click', function() {
  event.preventDefault();
  readCount += 1;
});

deleteButton.addEventListener('click', function(event) {
    var button = event.target;
    button.parentNode.parentNode.removeChild(button.parentNode);
});

// rewrite regexp
function verifyUrl() {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test = true) {
    return true;
  } else {
    return false;
  }
}

// add li card
function addCard() {
  var li = document.createElement('li');
  li.innerHTML = `
  <li>
  <h3>${titleInput.value}</h3>
  <hr>
  <a>${urlInput.value}</a>
  <hr>
    <div class="clearfix">
      <button class="read-button">Read</button><button class="delete-button">Delete</button>
    </div>
  </li>`;
  document.getElementById('ul').appendChild(li);
};

// $("ul").on("click", "button", function(e) {
//     e.preventDefault();
//     $(this).parent().remove();
// });