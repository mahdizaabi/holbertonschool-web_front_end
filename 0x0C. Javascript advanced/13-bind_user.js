const user = {
    hobby: "Calligraphy",
favoriteSport: "Hockey",
astrologicalSign: "Aries",
firstName: "Buillaume",
lastName: "Ialva",
location: "Telaviv",
occupation: "Engineer",
x: this.occupation
}

function logWelcomeUser (welcomeString)  {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)

}
const bindLogWelcomeUser = logWelcomeUser.bind(user)
bindLogWelcomeUser('hello')

/*const arrow = () => {
    console.log(this.occupation)
}
NO!!!
You cannot rebind this in an arrow function. It will always be defined as the context in which it was defined. If you require this to be meaningful you should use a normal function.

*/