// I want to keep track of when I wake up and when I go to sleep

const routine = [
  "10:00:00 AM",
  "11:00:00 PM",
  "12:30:00 PM",
  "02:45:00 PM",
  "01:00:00 AM",
  "12:00:00 AM",
];

const routineBetter = [
  {
    wakeup: "10:00:00 AM",
    sleep: "11:00:00 PM",
    sleptWell: true,
    exercise: {
      start: "01:00:00 PM",
      stop: "01:30:00 PM",
      routines: ["running", "jogging"],
    },
  },
  {
    wakeup: "12:30:00 PM",
    sleep: "02:45:00 PM",
    sleptWell: true,
    exercise: {
      start: "02:00:00 PM",
      stop: "02:30:00 PM",
      routines: ["running"],
    },
  },
  {
    wakeup: "01:00:00 AM",
    sleep: "12:00:00 AM",
  },
];

routineBetter.forEach((timeDisplay) => {
  console.log(timeDisplay.sleptWell);
});

// For homework, I need an Array, that contains the following objects:
// - a weeks worth of wakeup and sleep times (like above)
// - a "sleptWell" boolean value
// - an "exercise" object that contains "start", "stop", and a "routines" array which contain different exercises
// - an "eat" array, that contains 1 object that lists: "breakfast", "lunch", and "dinner" in which each meal has an array
//   - For example: "eat": [ { "breakfast": [], "lunch": [], "dinner": [] } ]
// - One of the days in the week, should have "sleptWell: false"
// - Finally, I need this Array, to be filtered so that only the "sleptWell: true" days are returned (should only return 6 days)
