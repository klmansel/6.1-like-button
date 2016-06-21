var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/like');


var LikeButton = new models.LikeItALot();


$('.like-button').on('click', function(event){
  event.preventDefault();
  var countLikes = LikeButton.addLikes();
console.log(countLikes);
  $('.like-button').text(countLikes);
});
