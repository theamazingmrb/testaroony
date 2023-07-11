// $
// create elements
// query elemenets ( querySelectorAll)
// add eventListeners

const $title = $(".title");
const $button = $("button");

$button.click((e) => {
  $.ajax({
    url: "https://api.thecatapi.com/v1/images/search?limit=10",
  }).then(function (data) {
    $("div").empty();
    console.log(data);
    addImageToScreen(data[0].url);
    $button.off();
  });
});

$title.text("I am the title");
// let li = document.createElement('li')
//  li.textContent = 'like somethig'
// document.querySelector('body').append(li)

let addNameToScreen = (name) => {
  // let name = "Billie";
  let $li = $(`<li>Hello ${name}</li>`);

  $("body").append($li);
};

let addImageToScreen = (image) => {
  // let name = "Billie";

  let $li = $(`<img src="${image}" alt="Some image" />`);

  $("body").append($li, "<h1> yay you won </h1>");
};
