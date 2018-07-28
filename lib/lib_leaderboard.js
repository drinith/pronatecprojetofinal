//Criando a instancia para acessar o banco
PlayersList = new Mongo.Collection('players');
UserAccounts = Meteor.users;

console.log(Meteor.users)

Images = new FilesCollection({collectionName: 'Images'});
  
// var Images = new FilesCollection({
//     collectionName: 'Images',
//     allowClientCode: false, // Disallow remove files from Client
//     onBeforeUpload: function (file) {
//       // Allow upload files under 10MB, and only in png/jpg/jpeg formats
//       if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
//         return true;
//       } else {
//         return 'Please upload image, with size equal or less than 10MB';
//       }
//     }
//   });
  


//Vamos depois modificar pois Bob está sendo todo momento inserido no banco

// var vetor = PlayersList.find().fetch();
// console.log(vetor );
// if (vetor.count() == 0) {
//     PlayersList.insert({
//         name: "Bob",
//         score: 0
//     });

//     PlayersList.insert({
//         name: "Felipe",
//         score: 0
//     });
//     PlayersList.insert({
//         name: "Fulano",
//         score: 0
//     });
//     PlayersList.insert({
//         name: "Pagodeiro",
//         score: 0
//     });

// }



