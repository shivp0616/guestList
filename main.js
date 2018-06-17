var fireId;
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function (content) {
  console.log(content);
  fireId = content;

  document.getElementById("markP").style.display="none";
  document.getElementById("searchD").style.display="block";
  // document.getElementById("name").style.display="none";
  // document.getElementById("institute").style.display="none";
  // document.getElementById("email").style.display="none";
  // document.getElementById("gender").style.display="none";

  document.getElementById("Uniq").innerHTML = fireId;

});
Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
});

function fireSearch(){

// var playersRef = firebase.database().ref(fireId)
     var playersRef = firebase.database().ref(fireId)

     playersRef.on("value", function(snapshot) {
       var newUser = snapshot.val();
       if (!newUser)
         console.log("Not exist");
       else
         {
           document.getElementById("name").style.display="block";
           document.getElementById("institute").style.display="block";
           document.getElementById("email").style.display="block";
           document.getElementById("gender").style.display="block";
           document.getElementById("name").innerHTML = "Name: "+newUser.name;
           document.getElementById("institute").innerHTML = "Institution: "+newUser.institute;
           document.getElementById("email").innerHTML = "Email: "+newUser.email;
           document.getElementById("gender").innerHTML = "Gender: "+newUser.gender;
           document.getElementById("markP").style.display="block";
           document.getElementById("searchD").style.display="none";
           // playersRef.update({
           //    attandance:'absent'
           //  });
        }
      });
}


function markPre(){

// var playersRef = firebase.database().ref(fireId)
     var playersRef = firebase.database().ref(fireId)

     playersRef.on("value", function(snapshot) {
       var newUser = snapshot.val();
           document.getElementById("markP").style.display="none";
           document.getElementById("searchD").style.display="none";
           document.getElementById("name").style.display="none";
           document.getElementById("institute").style.display="none";
           document.getElementById("email").style.display="none";
           document.getElementById("gender").style.display="none";
           playersRef.update({
              attandance:'Present'
            });

      });
}
