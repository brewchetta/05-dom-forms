// Review

// 1. Choose one of the sharks in the "sharksArray" as your featured shark. Accessing that shark, change each section of the "featured-shark" section so that it has the details for that shark.

// 2. For each shark object in the sharksArray append a new <li> in the "shark-facts-list" with that shark's `funFact`.

const sharksArray = [
    {
        name: "Great White Shark",
        species: "carcharodon carcharias",
        diet: ["fish", "cephalopods", "marine mammals", "sea birds", "sea turtles"],
        funFact: `Great white sharks communicate with each other through a complex array of body language. Most behaviors have been observed at aggregations around seal rookeries shortly after peak hunting periods, where sharks engage in extensive socializing. At least 20 unique forms of body language are known, most of which consist of two sharks swimming with or around each other in passing, parallel, or in circles to examine the other in a ritualized manner.`,
        habitats: ["Northwest Pacific", "Northeast Pacific", "Northwest Atlantic", "Mediterranean", "South Africa", "Oceania"],
    },
    {
        name: "Largetooth Sawfish",
        species: "pristis pristis",
        diet: ["fish", "molluscs", "crustaceans"],
        funFact: `The "saw" can be used both to stir up the bottom to find prey and to slash at groups of fish. Sawfish are docile and harmless to humans, except when captured where they can inflict serious injuries when defending themselves with the "saw".`,
        habitats: ["tropical waters", "sub-tropical waters", "freshwater rivers"],
    },
    {
        name: "Nurse Shark",
        species: "ginglymostoma cirratum",
        diet: ["small fish", "crustaceans", "molluscs", "algae"],
        funFact: `The name "nurse" may have originated from antiquated spelling conventions. The Oxford English Dictionary notes that, in medieval times, the "n" of the word "an" was frequently transferred to a following word that began with a vowel. Huss, husse and hurse were antiquated names for dogfish and other sharks.`,habitats: ["Eastern Atlantic", "Western Atlantic", "East Pacific"],
    },
]