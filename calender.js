let events = [
    {
      title: 'Meet and Sip',
      date: new Date('2024-09-24'),
      location: 'Hurlingham',
      attendees: new Set(['Alice', 'Winston']),
    },
    {
        title:'Orientation week',
        date: new Date('2024-09-28'),
        location: 'Lavington',
        attendees: new Set(['Sofia', 'Emily']),
    },
    {
        title:'workshop',
        date: new Date('2024-09-30'),
        location:'westlands',
        attendees: new Set(['Crissy', 'Zoe'])
    }
]

console.log(events)

let today = new Date();
let next7Days = new Date();
next7Days.setDate(today.getDate() + 7);

// Step 3: Use .filter() to find events happening in the next 7 days
let upcomingEvents = events.filter(event => event.date >= today && event.date <= next7Days);

// Step 4: Use .map() to display the relevant details of the events
let eventDetails = upcomingEvents.map(event => ({
  title: event.title,
  date: event.date.toString(),  // Convert date to a readable format
  location: event.location
}));

// Step 5: Display the result
console.log('Upcoming Events in the Next 7 Days:');
console.table(eventDetails);

let eventOrganizers = new WeakMap();

// Add organizers to the WeakMap
eventOrganizers.set(events[0], "Sage"); // Meet and sip
eventOrganizers.set(events[1], "Wilson"); // Orientation week
eventOrganizers.set(events[2], "Suheyb"); // workshop


// Example: Get the organizer for the "Workshop"
console.log("Organizer for Worshop:", eventOrganizers.get(events[2]));

// Display event details in table format using destructuring
console.table(
  events.map(({ title, date, location }) => ({ title, date: date.toLocaleDateString(), location }))
);

function addAttendee(eventTitle, attendeeName) {
  let event = events.find(e => e.title === eventTitle);
  if (event) {
    event.attendees.add(attendeeName);
    console.log(`${attendeeName} added to ${eventTitle}`);
  } else {
    console.log(`Event with title ${eventTitle} not found`);
  }
}

// Example usage
addAttendee('Orientation week', "Sam");
console.log("Orientation week Attendees:", events[1].attendees);

function eventsToJSON() {
  return JSON.stringify(events, (key, value) => {
    if (key === "date") {
      // Adding custom formatted date
      return {
        originalDate: value,
        formattedDate: new Date(value).toString("en-US"),
      };
    }
    return value;
  }, 2); // Indentation of 2 spaces for readability
}




