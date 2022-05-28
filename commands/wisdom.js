module.exports = {
    name: 'wisdom',
    description: 'Obtain words of wisdom.',
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}