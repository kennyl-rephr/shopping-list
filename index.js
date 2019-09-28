//event listeners
// add item form submit
// check button click
// delete button click

$(function() {
  // add item when form submits
  // listen to form submit
  // stop form from submitting
  // capture the text
  // create a new div
  $("#js-shopping-list-form").submit(function(event) {
    // stop form from submitting
    event.preventDefault();
    // save the text
    let item = $('#shopping-list-entry').val();
    // get handle to list
    const list = $(".shopping-list");
    // append new item
    list.append(`<li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
    // clear the input
    $('#shopping-list-entry').val("");

  })
});
