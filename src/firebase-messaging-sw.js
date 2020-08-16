importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAtvXQnN0bPa87kWvhrhBHfb2QAYTOKhNU",
    authDomain: "fir-task-9d067.firebaseapp.com",
    databaseURL: "https://fir-task-9d067.firebaseio.com",
    projectId: "fir-task-9d067",
    storageBucket: "fir-task-9d067.appspot.com",
    messagingSenderId: "811621327736",
    appId: "1:811621327736:web:d743d10a450676c039de8d",
    measurementId: "G-HGHTZ17J3M"
});

const messaging = firebase.messaging();