const express = require("express");
const app = express();
const { Builder, By, Key } = require("selenium-webdriver");
const fs = require("fs");
const serveStatic = require('serve-static')
const path = require('path')
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = {
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

var firebase = require('firebase');
var firebaseui = require('firebaseui');

app.get("/main", async (req, res) => {
  res.sendFile(__dirname + "/views/main.html");
});
app.get("/login", async (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
// app.use(express.static("dist"));
// app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.set('view engine', __dirname + '/node_modules/ejs');
app.set('view engine', 'ejs');
app.get("/test", async (req, res) => {
  let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
  res.render('index');
});
app.get("/a", async (req, res) => {
  
  let driver = await new Builder().forBrowser("chrome").build();
try {
  // Navigate to Url
  console.log("goto duckduckgo");
  await driver.get("http://google.com");
  // Get all the elements available with tag name 'p'
  await driver
    .findElement(By.name("q"))
    .sendKeys("frz_akbar instagram", Key.ENTER);
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
});
app.get("/b", async (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT || 5000;
console.log("line 27 executed");
app.listen(port, () => {
  console.log(`listening to port ${port} now...`);
});
