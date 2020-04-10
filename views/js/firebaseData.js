// inputKodeCata(){
//     let db = database.ref("data")
//     db.set({
//         kodeCata: this.kodeCata,
//     })
// var a = 1;
function pushData() {
    const database = firebase.database()
    const db = database.ref("data")
    
    // a = a+1;
    db.set({
        // one: a+1
        one: document.getElementById('one').value
    })
    return console.log("success addding : "+one)
    
}
function pushSearch() {
    const database = firebase.database()
    const db = database.ref("search")
    
    // a = a+1;
    db.set({
        // one: a+1
        s: document.getElementById('one').value
    })
    return console.log("success addding : "+one)
    
}
function runBot() {
    const database = firebase.database()
    const db = database.ref("data")
    db.set({
        one: 'go'
    })
    return console.log("success set status go")
}
function reloadBot() {
    const database = firebase.database()
    const db = database.ref("data")
    db.set({
        one: 'stop'
    })
    return console.log("success set status idle")
}