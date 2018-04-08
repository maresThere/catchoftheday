import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCIVQJfPjaDE1e_9kXTcPdEvoAr9DBH7h4",
    authDomain: "catch-of-the-day-mkelly.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mkelly.firebaseio.com"

  });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
