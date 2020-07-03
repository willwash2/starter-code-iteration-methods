// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyecolor === "green")
printKata(0, greenEyes1)

const isActive1 = users.filter(user => user.isActive === true)
printKata(1, isActive1)

const email1 = users.map(user => user.email)
printKata(2, email1)

const company1 = users.some(user => user.company === "OVATION")
printKata(3, company1)

const ageOver38 = users.find(user => user.age > 38)
printKata(4, ageOver38)

const ageOver38Active = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
printKata(5, ageOver38Active)

const balanceCompany = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)
printKata(6, balanceCompany)

const ageFugiatTag = users
    .filter(user => user.tags.includes("fugiat"))
    .map(user => user.age)
printKata(7, ageFugiatTag)




