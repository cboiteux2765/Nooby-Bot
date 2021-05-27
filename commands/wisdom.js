module.exports = {
    name: 'wisdom',
    description: 'Obtain words of wisdom.',
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}