
var currentTime = moment().format("H");
var fullCurrentTimeDate = moment().format("MMMM Do YYYY, h:mm a");
var userEntry;
userEntry = JSON.parse(localStorage.getItem("userEntry")) || [];

// adding css classes
for (i = 8; i < 18; i++) {
  if (currentTime < i) {
    $("#" + i).addClass("future");
  }
  if (currentTime == i) {
    $("#" + i).addClass("present");
  }
  if (currentTime > i) {
    $("#" + i).addClass("past");
  }
  if (userEntry.length > 0){
  $("#" + i).text(userEntry[i - 8].text);
  }
  
}

// saving user text
// homeowrk example shows one button per line and that seemed incredibly innefficent and ugly to me.
// this funciton creates an array with user entry saved with the id of the text area

$(".fa-save").click(function () {
  userEntry = [];
  for (i = 8; i < 18; i++) {
    userEntry.push({
      time: i,
      text: $("#" + i).val().trim(),
    });
  }
  localStorage.setItem("userEntry", JSON.stringify(userEntry));
});

// adding current date and time to top of page
$("#currentDay").text(fullCurrentTimeDate);