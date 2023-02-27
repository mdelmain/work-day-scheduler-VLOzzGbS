$(function () {
  updateDate();
  createTimeSlots();
  updateTimeSlots();
  addSaveHandlers();
  loadSavedEvents();
});

function updateDate() {
  var date = dayjs().format("dddd, MMMM Do");
  $("#currentDay").text(date);
}

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
    return hour + 12 + "AM";
  }
  if (hour < 12) {
    return hour + "AM";
  }
  if (hour === 12) {
    return hour + "PM";
  }
  if (hour > 12) {
    return hour - 12 + "PM";
  }
}

function getHour() {
  return dayjs().hour();
}

function updateTimeSlots() {
  var currentHour = getHour();
  for (var hour = 9; hour <= 17; hour++) {
    $("#hour-" + hour).removeClass("present future past");
    if (hour < currentHour) {
      $("#hour-" + hour).addClass("past");
    }
    if (hour === currentHour) {
      $("#hour-" + hour).addClass("present");
    }
    if (hour > currentHour) {
      $("#hour-" + hour).addClass("future");
    }
  }
}

function addSaveHandlers() {
  $(".saveBtn").click(function () {
    var key = $(this).parent().get(0).id;
    var value = $(this).parent().find("textarea").get(0).value;
    localStorage.setItem(key, value);

    var notification = $(".notification");
    notification.text("Appointment added to");
    var localStorageText = $(".localstoragetext");
    localStorageText.text("localStorage")
    var checkmark = $(".check");
    checkmark.text("✔");
  
    setTimeout(() => {
      notification.text("");
      localStorageText.text("")
      checkmark.text("");
  }, 2000);
  });
}

function loadSavedEvents() {
  for (var hour = 9; hour <= 17; hour++) {
    $("#hour-" + hour).find("textarea").get(0).value = localStorage.getItem("hour-" + hour)
  }
}