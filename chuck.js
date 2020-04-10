const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver")
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");


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

// HTML ELEMENT
const url = "https://shopee.co.id/"
const C_close_button_popup = "shopee-popup__close-btn"
const C_login_button = "navbar__link navbar__link--account navbar__link--tappable navbar__link--hoverable navbar__link-text navbar__link-text--medium"
const X_login_button = "//*[@id='main']/div/div[2]/div[1]/div/div[1]/div/ul/li[5]"
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
// getting client data
var phoneNumber = ''
let phoneRef = database.ref('/phone')
phoneRef.on('value', (snapshot)=> {
  console.log(snapshot.val())
  console.log("aa")
  phoneNumber = snapshot.val().nomer
  return console.log(phoneNumber)
})
console.log("phone number is : "+phoneNumber)
// .sendKeys("cari", Key.ENTER)
async function run(){
  let driver = await new Builder().
  withCapabilities(caps).forBrowser("chrome").build()
    console.log("goto shopee");
        await driver.get(url)
        //closing popup
        await driver
        .findElement(By.className(C_close_button_popup))
        .click()
        console.log("klik login")
        console.log("phone number is : "+phoneNumber)
        await driver
        .findElement(By.xpath(X_login_button))
        .click()

        await driver
        .manage().setTimeouts({implicit: (5000)})
        console.log("phone number is (seteah 10) : "+phoneNumber)
        
        await driver
        .wait(until.elementLocated(By.className(C_phone_login_button)), 5000)
        await driver
        .findElement(By.className(C_phone_login_button))
        .click()
        await driver
        .findElement(By.name(N_phone_input))
        .sendKeys(phoneNumber)
        await driver
        .findElement(By.name(N_cata_input))
        .sendKeys(IN_kode_cata)
        await driver
        .findElement(By.name(N_verif_input))
        .sendKeys(IN_kode_verif)
        await driver
        .findElement(By.className(C_button_verif))
        // .click()
        // await driver.close();
}
run()
