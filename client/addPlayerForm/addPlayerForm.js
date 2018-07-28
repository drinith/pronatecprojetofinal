Meteor.subscribe('files.images.all');

Template.addPlayerForm.events({

    'submit form': function (event) {
        event.preventDefault();

        let alunoNome = event.target.playerName.value;
        let arquivo = event.target.pic.value;
        console.log(arquivo);
        // let currentUserId = Meteor.userId();
        // let alunoNome = $('#inputName').val();

        // PlayersList.insert({ 'name': alunoNome, 'score': 0, 'criadoPor': currentUserId });
        Meteor.call("insertPlayerData", alunoNome);


        event.target.playerName.value = "";
    },

    'click .remove': function (event) {

        var idAluno = Session.get("selecionado");

        PlayersList.remove({ idAluno });


    },

    

});


//Template da imagem
Template.uploadForm.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
    currentUpload: function () {
        return Template.instance().currentUpload.get();
    }
});

Template.uploadForm.events({
    'change #fileInput': function (e, template) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case 
            // multiple files were selected
            var upload = Images.insert({
                file: e.currentTarget.files[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);

            upload.on('start', function () {
                template.currentUpload.set(this);
            });

            upload.on('end', function (error, fileObj) {
                if (error) {
                    alert('Error during upload: ' + error);
                } else {
                    alert('File "' + fileObj.name + '" successfully uploaded');
                }
                template.currentUpload.set(false);
            });

            upload.start();

            console.log(upload);
        }
    }
});

Template.file.helpers({
    imageFile: function () {
      return Images.findOne();
    },
   
  });