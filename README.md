# 05 Third-Party APIs: Work Day Scheduler

## Description
For the module 5 assignment I updated the calendar application to dynamically display the hours and update the color of the timeslot based on past, present and future time. When an event is saved, the text is saved in local storage so that the changes persist when the page is reloaded.  

The webpage can be found here: https://mdelmain.github.io/work-day-scheduler-VLOzzGbS

## Installation 
N/A

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following image demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](/Assets/images/module-5-screenshot.png)

