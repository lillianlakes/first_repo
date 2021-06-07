function emailSubmitted() {
  var txt;
  if (confirm("I look forward to keeping you up-to-date on my software projects!  By providing your email address, you agree to receive update emails from me. Press OK to proceed or cancel if you prefer not to be emailed. Thank you.")) {
    txt = "Thank you for joining my email list.";
  } else {
    txt = "I am sorry you chose not to join my email list.  Please keep in touch.";
  }
  document.getElementById("emailConfirmation").innerHTML = txt;
}

function commentFunction1() {
  var txt;
  var person = prompt("Please share your name:", "First Last");
  var comment = prompt("Please share your comment on this project:", "Great job! Keep up the good work.");
  if (person === null || person === "") {
    txt = "We did not receive your name.  Please try again.";
  } else if (comment === null || comment === "") {
    txt = "We did not receive your comment.  Please try again.";
  } else {
    txt = `${person}: ${comment}`;
  }
  document.getElementById("comment1").innerHTML = txt;
}

function commentFunction2() {
  var txt;
  var person = prompt("Please share your name:", "First Last");
  var comment = prompt("Please share your comment on this project:", "Great job! Keep up the good work.");
  if (person === null || person === "") {
    txt = "We did not receive your name.  Please try again.";
  } else if (comment === null || comment === "") {
    txt = "We did not receive your comment.  Please try again.";
  } else {
    txt = `${person}: ${comment}`;
  }
  document.getElementById("comment2").innerHTML = txt;
}

function commentFunction3() {
  var txt;
  var person = prompt("Please share your name:", "First Last");
  var comment = prompt("Please share your comment on this project:", "Great job! Keep up the good work.");
  if (person === null || person === "") {
    txt = "We did not receive your name.  Please try again.";
  } else if (comment === null || comment === "") {
    txt = "We did not receive your comment.  Please try again.";
  } else {
    txt = `${person}: ${comment}`;
  }
  document.getElementById("comment3").innerHTML = txt;
}

function commentFunction4() {
  var txt;
  var person = prompt("Please share your name:", "First Last");
  var comment = prompt("Please share your comment on this project:", "Great job! Keep up the good work.");
  if (person === null || person === "") {
    txt = "We did not receive your name.  Please try again.";
  } else if (comment === null || comment === "") {
    txt = "We did not receive your comment.  Please try again.";
  } else {
    txt = `${person}: ${comment}`;
  }
  document.getElementById("comment4").innerHTML = txt;
}

function commentFunction5() {
  var txt;
  var person = prompt("Please share your name:", "First Last");
  var comment = prompt("Please share your comment on this project:", "Great job! Keep up the good work.");
  if (person === null || person === "") {
    txt = "We did not receive your name.  Please try again.";
  } else if (comment === null || comment === "") {
    txt = "We did not receive your comment.  Please try again.";
  } else {
    txt = `${person}: ${comment}`;
  }
  document.getElementById("comment5").innerHTML = txt;
}