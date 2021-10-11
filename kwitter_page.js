//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAeucg75DDEd1r9gLVK6WxxT8YHX-0viCs",
      authDomain: "kwitter-4e361.firebaseapp.com",
      databaseURL: "https://kwitter-4e361-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e361",
      storageBucket: "kwitter-4e361.appspot.com",
      messagingSenderId: "1031459592177",
      appId: "1:1031459592177:web:fe210df8689bc5c93ed650"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("Message").value;
          firebase.database().ref(room_name).push({
           Name:user_name,
            Message:msg,
            likes:0


          });
          document.getElementById("Message").innerHTML=" ";

          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
