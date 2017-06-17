import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9jRdSPVeHHWmH3uFn4LSWXS8jOGxsXfI",
  authDomain: "learnit-dd7d3.firebaseapp.com",
  databaseURL: "https://learnit-dd7d3.firebaseio.com",
  projectId: "learnit-dd7d3",
  storageBucket: "learnit-dd7d3.appspot.com",
  messagingSenderId: "818271592954"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;