// let signup = () => {
//    let email = document.getElementById('email')
// let password = document.getElementById('password')
// firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }
let signin = () => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(result)
  // The signed-in user info.
  var user = result.user;
  let pic = result.additionalUserInfo.profile.picture
  let nme = result.additionalUserInfo.profile.name; 
  document.getElementById('image').src = pic
  document.getElementById('hea').innerHTML = nme
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(error)
  // ...
});
}
function gui() {
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  console.log(result.user.additionalUserInfo)
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}
