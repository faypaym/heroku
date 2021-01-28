(function (){


    var firebase = require('firebase')
    var firebaseConfig = {
      apiKey: "AIzaSyCeRVEWp4U_B2qjrmW0Ny4oRXTEg9bA66c",
      authDomain: "todo-700e3.firebaseapp.com",
      projectId: "todo-700e3",
      storageBucket: "todo-700e3.appspot.com",
      messagingSenderId: "249952230748",
      appId: "1:249952230748:web:10585975d14ff904143599",
      measurementId: "G-KPPPG1VGQV"
    };
    
    firebase.initializeApp(firebaseConfig);
    
    
    
    //const preObject = document.getElementById("object");
    
    
    const dbRefObject = firebase.database().ref().child("object");
    
    dbRefObject.on('value', snap => console.log(snap.val()));





});



