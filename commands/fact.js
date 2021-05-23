module.exports = {
    name: 'fact',
    description: 'generates a random fact',
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length); 
        message.channel.send(list[random]);
    }
}