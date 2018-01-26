import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQIU6H3pT0Zvhl1d0lGZ1QkCFd8_iA0Jk",
    authDomain: "oscar-time.firebaseapp.com",
    databaseURL: "https://oscar-time.firebaseio.com",
    projectId: "oscar-time",
    storageBucket: "oscar-time.appspot.com",
    messagingSenderId: "633466173917"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;