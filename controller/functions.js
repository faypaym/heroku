

const admin = require('firebase-admin');



var serviceAccount = require("./../secret/anniv-app-f859f-firebase-adminsdk-ws4v8-00e0b25aa5.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anniv-app-f859f-default-rtdb.firebaseio.com/"
});





const db = admin.firestore();


function getQuote() {
  const quoteData = {
  quote: "random5",
  author: "String"
  };
  return db.collection("sampleData").doc("inspiration").set(quoteData).then(() => {
  console.log("new quote was written to the database");})
  }
  
  getQuote();