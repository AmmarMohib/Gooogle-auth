let signin = () => {
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log(result)

  // ...
}).catch(function(error) {
console.log(error)
});
}
