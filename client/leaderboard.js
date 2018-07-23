Session.set("myTemplate", "apresentaleaderboard");

Template.leaderboard.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 

    myTemplate: function () {
        return Session.get("myTemplate");
    }
}); 

Template.leaderboard.events({
    'click .btn_adicionar': function () {

        let nome = "addPlayerForm";
        Session.set("myTemplate", nome);
        console.log("Clicou no botão usuário");

        console.log(Session.get("myTemplate"));
    },

    'click .btn_listar': function () {

        let nome = "apresentaleaderboard";
        Session.set("myTemplate", nome);
        console.log("Clicou no botão usuário");

        console.log(Session.get("myTemplate"));
    }
}); 


