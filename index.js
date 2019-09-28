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
  });

  // toggle strikethrough state when user "checks" an item.
  // using class .shopping-item__checked

  const list = $(".shopping-list");
  list.on('click', 'button', function(event) {
    // find the closest upstream <li> element
    let item = $(this).closest("li");
    if (this.className === "shopping-item-toggle") {
      // search the <li> element for class shopping-item
      // toggle the class to get the strikethrough
    item.find(".shopping-item").toggleClass('shopping-item__checked')
    } else {
      // delete the item
      item.remove();
    }
  });

});
