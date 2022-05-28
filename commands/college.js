const { execute } = require("./brain");

module.exports = {
    name: "college",
    description: "Will you get accepted into a college?",
    execute(message, list) {
        var random = Math.floor(Math.random()*3)
        var randomIndex = Math.floor(Math.random()*list.length);
        var randomCollege = list[randomIndex];
        if (random == 0) {
            message.channel.send(`You got rejected by ${randomCollege}!`);
        } else if (random == 1) {
            message.channel.send(`You got accepted into ${randomCollege}!`);
        } else {
            message.channel.send(`You got waitlisted by ${randomCollege}!`);
        }
    }
}