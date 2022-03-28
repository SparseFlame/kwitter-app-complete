
// YOUR FIREBASE LINKS //

const firebaseConfig = {
  apiKey: "AIzaSyC49_qt2yKyAzHNFVQYMzhSERsJuePu6uY",
  authDomain: "kwitter-test-45c7c.firebaseapp.com",
  databaseURL: "https://kwitter-test-45c7c-default-rtdb.firebaseio.com",
  projectId: "kwitter-test-45c7c",
  storageBucket: "kwitter-test-45c7c.appspot.com",
  messagingSenderId: "759765528834",
  appId: "1:759765528834:web:11cf4fc638d689c20c121b",
  measurementId: "G-ZYMX04KGLN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


