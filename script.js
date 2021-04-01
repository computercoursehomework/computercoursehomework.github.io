var modal = document.getElementById("DownloadModal");
  var btn = document.getElementById("downloadhw");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


//Redir
function openMail(){
  document.location = "mailto:opengallery19amargallery@gmail.com";
}
function redir(){
  document.location = "student_list.html";
}
function redirHome(){
  document.location = "index.html";
}
//Download Function
function download() {
    var studentid = document.getElementById('javstudentid').value;
    var courseid = document.getElementById('javcourseid').value;

    if((studentid == 'BCC1PS1') && (courseid == 'BCC1')){
        setTimeout(function() {document.location = "Homework/Homework.pdf" });
    }
}

function validation() {
    var studentid = document.getElementById('javstudentid').value;
    var courseid = document.getElementById('javcourseid').value;

    if (studentid == ""){
    document.getElementById('studentiderror').style.display = "block";
    document.getElementById('studentiderror').innerHTML = "This field is required";
    document.getElementById('javstudentid').style.borderBottomColor = "red";
    document.getElementById('javstudentid').style.backgroundColor = "rgba(255, 0, 0, 0.144)";
    document.getElementById('submit').disabled = true;
    return false;
    }
    if (studentid == "BCC1S1"){
        document.getElementById('studentiderror').style.display = "block";
        document.getElementById('studentiderror').innerHTML = "Example can't be used";
        document.getElementById('javstudentid').style.borderBottomColor = "red";
        document.getElementById('javstudentid').style.backgroundColor = "rgba(255, 0, 0, 0.144)";
        document.getElementById('submit').disabled = true;
        return false;
    }
    if (!isNaN(studentid)){
        document.getElementById('studentiderror').style.display = "block";
        document.getElementById('studentiderror').innerHTML = "ID can't be in number only";
        document.getElementById('javstudentid').style.borderBottomColor = "red";
        document.getElementById('javstudentid').style.backgroundColor = "rgba(255, 0, 0, 0.144)";
        document.getElementById('submit').disabled = true;
        return false;
    }
    if ((studentid.length <=6 ) || (studentid.length >=8)){
        document.getElementById('studentiderror').style.display = "block";
        document.getElementById('studentiderror').innerHTML = "Invalid ID";
        document.getElementById('javstudentid').style.borderBottomColor = "red";
        document.getElementById('javstudentid').style.backgroundColor = "rgba(255, 0, 0, 0.144)";
        document.getElementById('submit').disabled = true;
        return false;
    }
    if ((studentid.length != 0) && (studentid.length = 7)){
        document.getElementById('studentiderror').style.display = "none";
        document.getElementById('javstudentid').style.borderBottomColor = "green";
        document.getElementById('javstudentid').style.backgroundColor = "rgba(0, 128, 0, 0.144)";
        document.getElementById('submit').disabled = false;
        return false;
    }

    if (courseid == ""){
        document.getElementById('courseiderror').style.display = "block";
        document.getElementById('courseiderror').innerHTML = "This field is required";
        document.getElementById('javcourseid').style.borderBottomColor = "red";
        document.getElementById('javcourseid').style.backgroundColor = "rgba(255, 0, 0, 0.144)";
        document.getElementById('submit').disabled = true;
        return false;
        }
        if (courseid.length !=0){
          document.getElementById('courseiderror').style.display = "block";
          document.getElementById('javcourseid').style.borderBottomColor = "green";
          document.getElementById('javcourseid').style.backgroundColor = "rgba(0, 128, 0, 0.144)";
          document.getElementById('submit').disabled = true;
          return false;
        }
}

