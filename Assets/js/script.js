$(function () {
  createTimeSlots();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function createHourContainer(hour) {
  var hourContainer = $("<div>");
  hourContainer.addClass("row time-block past");
  hourContainer.attr("id", "hour-" + hour);
  $(".container-fluid").append(hourContainer);

  var hourLabel = $("<div>");
  hourLabel.addClass("col-2 col-md-1 hour text-center py-3");
  hourLabel.text(convert24to12(hour));
  hourContainer.append(hourLabel);

  var textArea = $("<textarea>");
  textArea.addClass("col-8 col-md-10 description");
  textArea.attr("rows", "3");
  hourContainer.append(textArea);

  var button = $("<button>");
  button.addClass("btn saveBtn col-2 col-md-1");
  button.attr("aria-label", "save");
  hourContainer.append(button);

  var buttonImage = $("<i>");
  buttonImage.addClass("fas fa-save");
  buttonImage.attr("aria-hidden", "true");
  button.append(buttonImage);
}

function createTimeSlots() {
  for (var hour = 9; hour <= 17; hour++) {
    createHourContainer(hour);
  }
}

function convert24to12(hour) {
  if (hour === 0) {
    return (hour+12) + "AM";
  }
  if (hour < 12) {
    return hour + "AM";
  }
  if (hour === 12) {
    return hour + "PM";
  }
  if (hour > 12) {
    return (hour-12) + "PM";
  }
}
