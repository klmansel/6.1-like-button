var Backbone = require('backbone');


var LikeItALot = Backbone.Model.extend ({
  defaults: {
    'count' : 0
  },

  initialize: function(){

  },

  addLikes: function(){
    var totalLikes = this.get('count') + 1;
    this.set('count', totalLikes);
    if(totalLikes === 1)
    return totalLikes + ' Like';
    else {
      return totalLikes + ' Likes';
    }
  }
});




module.exports = {
  'LikeItALot' : LikeItALot
};
