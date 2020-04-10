function checkIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
            console.log(user)
            console.log("user sign in")
            document.getElementById('signin')
            .setAttribute('style', 'display: none; visible: hidden;')
            document.getElementById('google-pic')
            .setAttribute('src', localStorage.getItem('google_photo'))
            document.getElementById('signout')
            .setAttribute('style', 'display: inline-block; visible: visible;')
        } else {
            console.log(user)
            console.log("user sign out")
            document.getElementById('signin')
            .setAttribute('style', 'display: inline-block; visible: visible;')
            document.getElementById('signout')
            .setAttribute('style', 'display: none; visible: hidden;')
        }

    })
}
checkIfLoggedIn()
function signOut() {
    firebase.auth().signOut()
    localStorage.removeItem('firebase_token')
    localStorage.removeItem('google-photo')
    checkIfLoggedIn()
}
function signInWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider
    
    firebase.auth().signInWithPopup(googleAuthProvider)
            .then((data) => {
                console.log(data)
                
            })
            .catch((error) => {
                console.log(error)
            })
}