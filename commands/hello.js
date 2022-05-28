module.exports = {
    name: 'hello',
    description: 'greet someone',
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}