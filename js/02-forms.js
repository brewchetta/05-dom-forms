const sharkSightingForm = document.querySelector("#shark-sighting-form")
const sharkSpeciesInput = document.querySelector("#shark-species-input")
const sharkLocationInput = document.querySelector("#shark-location-input")
const sharkDateInput = document.querySelector("#shark-date-input")
const sharkSightingsList = document.querySelector("#shark-sightings-list")

function handleSightingSubmit( event ) {
    // preventDefault will keep the page from refreshing on submit
    event.preventDefault()

    // event.target is what TRIGGERED the event
    console.log(event.target)
    
    // to get information from an input we access the .value
    const sharkSpecies = sharkSpeciesInput.value
    const sharkLocation = sharkLocationInput.value
    const sharkDate = sharkDateInput.value

    // create the new element
    const newLi = document.createElement("li")
    newLi.textContent = `${sharkSpecies} - ${sharkLocation} - ${sharkDate}`
    sharkSightingsList.append(newLi)
}

// submit is a special form event that happens when you click the submit button OR submit the form in any other way
sharkSightingForm.addEventListener( "submit", handleSightingSubmit )





// 1. Create a comment box <form> for adding comments. This comment form only has inputs for a comment and a submit. You may add this directly to the html OR if you're feeling spicy you may add this using Javascript.

// 2. Add a "comments-section" <ul> below the <form> in order to see comments.

// 3. Create an event listener for the form. When the form is submitted, create a new <li> for the "comments-section" with `textContent` based on the submitted form and append the <li> to the "comments-section".

// RETURN AT 12:30 EST
//     RETURN AT 12:30 EST
//         RETURN AT 12:30 EST
//             RETURN AT 12:30 EST
//             RETURN AT 12:30 EST
//             RETURN AT 12:30 EST
//         RETURN AT 12:30 EST
//     RETURN AT 12:30 EST
// RETURN AT 12:30 EST
