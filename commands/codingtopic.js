const { execute } = require("./brain");

module.exports = {
    name: 'codingtopic',
    description: 'Choose a random coding topic.',
    execute(message, list) {
        let rand = Math.floor(Math.random()*list.length);
        message.channel.send(list[rand]);
    }
}