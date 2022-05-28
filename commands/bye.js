module.exports = {
    name: 'bye',
    description: 'Goodbye.',
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}