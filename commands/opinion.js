module.exports = {
    name: "opinion",
    description: "Selects a random opinion of mine",
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}