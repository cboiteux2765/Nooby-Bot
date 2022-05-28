module.exports = {
    name: 'motivate',
    description: 'study and grind.',
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}