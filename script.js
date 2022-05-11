console.log('Hello World');


$(document).ready(onReady);

function onReady(){
    console.log('so ready!👍🏾');
   let titleHeader = $('h1');
   // let titleHeader = <h1>..</h1>
   console.log('titleHeader is', titleHeader)
   //console.log('titleHeader', <h1>..</h1>)

   let allListItems = $('li');
   console.log('li elements', allListItems);

//# --> ID(Can only have one element)   
let justThatOneListItem = $('#madame-li-element');

//. --> class ( can  have multiple classes);
justThatOneListItem.text('DOM Manipulation');
$('.first-and-last').css('color', 'blue');



$('ul').append('<li>forms<button>😃</button><li>');



$('#the-button').on('click', whenIClickTheButton);

}
function whenIClickTheButton(){
    console.log('Someone click me!');
    $('li').last().remove();
   let titleText = $('h1').text();
   console.log('title text is', titleText);
}