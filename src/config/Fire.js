import firebase from'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD0q4x0AG-8-HuWA3IU930ebckd9zeMaC0",
    authDomain: "project-3abff.firebaseapp.com",
    databaseURL: "https://project-3abff.firebaseio.com",
    projectId: "project-3abff",
    storageBucket: "project-3abff.appspot.com",
    messagingSenderId: "721738462913",
    appId: "1:721738462913:web:ae1afc7805b6b9b4834640",
    measurementId: "G-D1ZC8V7FDZ"
  };

  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;