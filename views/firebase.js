var app_firebase = {};

(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5NpeEeD48iduQzgtSbnoahp3HF-3PEdk",
    authDomain: "akbar-server.firebaseapp.com",
    databaseURL: "https://akbar-server.firebaseio.com",
    projectId: "akbar-server",
    storageBucket: "akbar-server.appspot.com",
    messagingSenderId: "564819667246",
    appId: "1:564819667246:web:b8ea720bcd5026c82cb2bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
})();