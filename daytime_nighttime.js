// I want to keep track of when I wake up and when I go to sleep


// For homework, I need an Array, that contains the following objects:
// - a weeks worth of wakeup and sleep times (like above)
// - a "sleptWell" boolean value
// - an "exercise" object that contains "start", "stop", and a "routines" array which contain different exercises
// - an "eat" array, that contains 1 object that lists: "breakfast", "lunch", and "dinner" in which each meal has an array
//   - For example: "eat": [ { "breakfast": [], "lunch": [], "dinner": [] } ]
// - One of the days in the week, should have "sleptWell: false"
// - Finally, I need this Array, to be filtered so that only the "sleptWell: true" days are returned (should only return 6 days)




const weeklyData = [
    {
        day: "Monday",
        wakeup: "7:00 AM",
        sleep: "10:30 PM",
        sleptWell: true,
        exercise: {
            start: "7:30 AM",
            stop: "8:00 AM",
            routines: ["jogging", "stretching"]
        },
        eat: [
            {
                breakfast: ["oatmeal", "banana"],
                lunch: ["chicken salad", "water"],
                dinner: ["grilled salmon", "quinoa"]
            }
        ]
    },
    {
        day: "Tuesday",
        wakeup: "6:45 AM",
        sleep: "10:00 PM",
        sleptWell: true,
        exercise: {
            start: "6:50 AM",
            stop: "7:20 AM",
            routines: ["yoga", "strength training"]
        },
        eat: [
            {
                breakfast: ["smoothie", "toast"],
                lunch: ["pasta", "salad"],
                dinner: ["stir-fry", "rice"]
            }
        ]
    },
    {
        day: "Wednesday",
        wakeup: "7:15 AM",
        sleep: "11:00 PM",
        sleptWell: false,
        exercise: {
            start: "7:30 AM",
            stop: "8:00 AM",
            routines: ["cycling", "core workout"]
        },
        eat: [
            {
                breakfast: ["eggs", "avocado"],
                lunch: ["sushi", "miso soup"],
                dinner: ["chicken curry", "rice"]
            }
        ]
    },
    {
        day: "Thursday",
        wakeup: "7:00 AM",
        sleep: "10:15 PM",
        sleptWell: true,
        exercise: {
            start: "7:10 AM",
            stop: "7:40 AM",
            routines: ["walking", "bodyweight exercises"]
        },
        eat: [
            {
                breakfast: ["yogurt", "granola"],
                lunch: ["taco bowl", "water"],
                dinner: ["vegetable stew", "bread"]
            }
        ]
    },
    {
        day: "Friday",
        wakeup: "6:30 AM",
        sleep: "10:45 PM",
        sleptWell: true,
        exercise: {
            start: "6:35 AM",
            stop: "7:05 AM",
            routines: ["running", "flexibility training"]
        },
        eat: [
            {
                breakfast: ["pancakes", "fruit"],
                lunch: ["burger", "fries"],
                dinner: ["pizza", "salad"]
            }
        ]
    },
    {
        day: "Saturday",
        wakeup: "8:00 AM",
        sleep: "12:00 AM",
        sleptWell: true,
        exercise: {
            start: "8:15 AM",
            stop: "8:45 AM",
            routines: ["hiking", "yoga"]
        },
        eat: [
            {
                breakfast: ["smoothie bowl", "nuts"],
                lunch: ["quiche", "greens"],
                dinner: ["pasta", "garlic bread"]
            }
        ]
    },
    {
        day: "Sunday",
        wakeup: "7:30 AM",
        sleep: "11:30 PM",
        sleptWell: true,
        exercise: {
            start: "7:45 AM",
            stop: "8:15 AM",
            routines: ["swimming", "cardio"]
        },
        eat: [
            {
                breakfast: ["french toast", "berries"],
                lunch: ["wraps", "chips"],
                dinner: ["roast chicken", "vegetables"]
            }
        ]
    }
];

// Filtering for days where sleptWell is true
//const sleptWellDays = weeklyData.filter(day => day.sleptWell);

//const lookingberries = weeklyData.filter (day => day.eat[0].breakfast.includes("berries"));

//console.log(lookingberries);

const lookingforswimming = weeklyData.filter (day => day.exercise.routines.includes("swimming"));

console.log(lookingforswimming);