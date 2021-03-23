
const admin = require('firebase-admin');



var serviceAccount = require("./../secret/anniv-app-f859f-firebase-adminsdk-ws4v8-00e0b25aa5.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anniv-app-f859f-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();



function insert($id,$nom,$date,$cadeau) {
  const params = {
  date: $date,
  cadeau: $cadeau
  };
  return db.collection($id).doc($nom).set(params).then(() => {
  console.log("new people was written to the database");})
}


exports.insert = insert;