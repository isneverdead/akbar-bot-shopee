const express = require('express')
const app = express()
const { Builder, By, Key } = require("selenium-webdriver")
const logger = require('morgan')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const serviceAccount = require('./akbar-server-firebase-adminsdk-gb0e7-af794d676b.json')
// firebase database
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// var firebase = require("firebase/app")
const firebase = require('firebase')
// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/firestore")
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
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


const firebaseAdmin = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://akbar-server.firebaseio.com'
})
app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))
function isAuthenticated(req, res, next) {

}
// const data = database.ref('/data')
// data.on('value', (snapshot)=> {
//   console.log(snapshot.val())
// })
// read data realtime
var cari = ''
let search = database.ref('/search')
search.on('value', (snapshot)=> {
  console.log(snapshot.val())
  var cari = snapshot.val().s
  this.cari = cari
})
app.get('/', (req, res) =>{
    const dataref = database.ref("data")
    dataref.on('value', (snapshot)=> {
      console.log(snapshot.val())
      let a = snapshot.val()
      console.log(a.one)
      if(a.one == "go") {
        console.log("running")
        async function sss() {
          console.log("build chrome")
          let driver = await new Builder().forBrowser("chrome").build();
            try {
              // Navigate to Url
              
              console.log("goto duckduckgo");
              await driver.get("https://google.com/");
              // Get all the elements available with tag name 'p'
              await driver
                .findElement(By.name("q"))
                .sendKeys(cari, Key.ENTER);
              console.log("duckduckgo search me");
              await driver
                .findElement(By.xpath('//*[@id="rso"]/div[1]/div/div[1]/a/h3'))
                .click();
              // driver.takeScreenshot()
              //     .then(function(data){
              //     fs.writeFileSync('./public/img.png', data, 'base64');
              // });
              await driver.takeScreenshot().then(function(image, err) {
                require("fs").writeFile("./public/img.png", image, "base64", function(err) {
                  console.log(err);
                });
              });
              res.sendFile(__dirname + "/public/index.html");
              // for(let e of elements) {
              //     console.log(await e.getText());
              // }
            } catch(err){
              console.log(err.message);
            }
              await driver.close();
        }
        sss()
      } else {
        console.log("idle")
      }
    })
    res.render('home.ejs')
})
app.get('/wowo', isAuthenticated, (req, res) => {
    res.render('wowo.ejs')
})
app.post('/', (req,res) => {

})

const port = process.env.PORT || 5000;
console.log("line 27 executed");
app.listen(port, () => {
  console.log(`listening to port ${port} now...`);
});