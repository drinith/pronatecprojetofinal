Meteor.publish('thePlayers', function () {

    var currentUserId = Meteor.userId();
    console.log(currentUserId);
    return PlayersList.find({ criadoPor: currentUserId });

});



Meteor.methods({

    "insertPlayerData": function (alunoNome, imagem) {
        var currentUserId = Meteor.userId();
        PlayersList.insert({ 'name': alunoNome, 'score': 0, 'criadoPor': currentUserId, 'imagem': imagem });
    },

});