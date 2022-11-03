function newImage() {
    var image = document.getElementById('wihimg');
    if (image.src.match("assets/herodotus.jpg")) {
        image.src = "assets/18.jpg";
    } else {
        image.src = "assets/herodotus.jpg";
    }
}

function questionwih() {
       var questionwih = prompt("How many categories does history have?");
       if (questionwih == 5) {
  alert("Correct answer.");
       } else {
         prompt("Incorrect Answer, try again. How many categories does history have? ");
  }
}

function result() {
  var score=0;
  if (document.getElementById('correct1').checked) {
    score++;
  }
  if (document.getElementById('correct2').checked) {
    score++;
  }
  if (document.getElementById('correct3').checked) {
    score++;
  }
  if (document.getElementById('correct4').checked) {
    score++;
  }
  if (document.getElementById('correct5').checked) {
    score++;
  }
  alert("Your score is: "+score +" out of 5.")
}
