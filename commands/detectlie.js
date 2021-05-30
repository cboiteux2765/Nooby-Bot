module.exports = {
    name: "detectlie",
    description: "Detects a lie",
    execute(message, args) {
        var random = Math.floor(Math.random()*2);
        if (random == 0) {
            message.channel.send('They\'re lying.');
        } else if (random == 1) {
            message.channel.send('They are telling the truth.');
        }
    }
}