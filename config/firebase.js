import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD8bd4FR3TN4EJiE_x-4hHjlKFLvHlH4dI",
  authDomain: "time-tracker-a443b.firebaseapp.com",
  databaseURL: "https://time-tracker-a443b.firebaseio.com",
  projectId: "time-tracker-a443b",
  storageBucket: "time-tracker-a443b.appspot.com",
  messagingSenderId: "540328416851"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
