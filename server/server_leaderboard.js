Meteor.publish('thePlayers', function () {
    
    var currentUserId = Meteor.userId();
    console.log(currentUserId);
    return PlayersList.find({criadoPor: currentUserId});

});

Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });

Meteor.methods({

    "insertPlayerData":function(alunoNome){
        var currentUserId = Meteor.userId();
        PlayersList.insert({ 'name': alunoNome, 'score': 0, 'criadoPor': currentUserId });
    },


    
});