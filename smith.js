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
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver")

const express        =        require("express");
const bodyParser     =        require("body-parser");
const app            =        express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", async(req, res) => {
    res.render("home.ejs")
})

function panggil() {
  console.log("yak")
}

var driver = ''

// HTML ELEMENT
const url = "https://shopee.co.id/"
const C_close_button_popup = "shopee-popup__close-btn"
const C_login_button = "navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium"
const X_login_button = "/html/body/div[1]/div/div[2]/div[1]/div/div[1]/div/ul/li[5]"
const C_phone_login_button = "social-white-sms-png"
const X_phone_login_button = "/html/body/div[2]/aside/div[1]/div/div/div/div[3]/button[1]"
// " _19chmk  "
// " _1R7DTh   "
// " _1A9Noy  "
//form
const N_phone_input = "phone"
const N_cata_input = "captcha"
const N_verif_input = "otp"
const C_button_verif = "_2thXug"
// get from client
const IN_phone_number = "08567500965"
const IN_kode_cata = ""
const IN_kode_verif = ""

app.post("/", async(req, res) => {
    var status = req.body.status
    console.log("hasil : "+req.body.status)
    async function buildChrome() {
        driver = await new Builder().forBrowser("chrome").build()
    }
    async function gotoShopee() {
      await driver
          .get(url)   
    }
    async function closePopup() {
      await driver
          .findElement(By.className(C_close_button_popup))
          .click()
    }
    async function clickLogin() {
      await driver
          .findElement(By.xpath(X_login_button))   
          .click()
    }
    async function clickByPhone() {
      await driver
          .findElement(By.className(C_phone_login_button))   
          .click()
    }
    async function isiNumPhone() {
      await driver
          .findElement(By.name(N_phone_input))   
          .sendKeys(IN_phone_number)
    }
    if (status == "run") {
      console.log("machine is idle")
        buildChrome()
    } else if (status == "go") {
      console.log("goto : "+ url)
        gotoShopee()
    } else if (status == "2") {
      console.log("closing popup")
      closePopup()
    } else if (status == "3") {
      console.log("klik login button")
      clickLogin()
    } else if (status == "4") {
      console.log("klik phone login")
      clickByPhone()
    } else if (status == "5") {
      console.log("Input Phone Number : "+ IN_phone_number)
      isiNumPhone()
    } else if (status == "r") {
      console.log("Driver Reset")
      await driver.close()
      driver = await new Builder().forBrowser("chrome").build()
    }

    // console.log(status)
    // res.end("yes");
})

// app.use(express.bodyParser());
app.post('/', function(req, res) {
  console.log(req.body.status)
})


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening to port ${port} now...`)
})




// //////////////////////////////////////////////////////////////////////////////
// var driver = ''
// async function buildChrome() {
//     driver = await new Builder().forBrowser("chrome").build()
// }
// const url = "https://shopee.co.id/"
// const C_close_button_popup = "shopee-popup__close-btn"

// async function gotoShopee() {
//     await buildChrome()
//     await driver
//         .get(url)   
// }
// async function closePopup() {
//     await gotoShopee()
//     await driver
//         .findElement(By.className(C_close_button_popup))
//         .click()
// }

// async function wait() {
//     await closePopup()
    
//     setTimeout(function() {
//         driver.close()
//     }, 10000)
    
// }

// wait().then(console.log("executed"))
//////////////////////////////////////////////////////////////////////////////



// var phoneNumber = ''
// function getPhone(panggil) {
//     const phoneRef = database.ref('/phone')
//     phoneRef.on('value', (snapshot)=> {
//     console.log(snapshot.val().nomer)
//     let a =  snapshot.val().nomer
//     panggil(a)
//     })
    
// }

// function getData(data) {
//     console.log("berhasil : "+data)
// }
// getPhone(getData)

// async function kk () {
//     phoneNumber = await getData()
// }


// var data = getPhone(handleResult)

// function handleResult(result) {
//     return result
// }
// console.log(data)

// const a = database.ref('/phone').child('object')
// a.on('value', snap => snap, val())
// var la = a
//   console.log(la)