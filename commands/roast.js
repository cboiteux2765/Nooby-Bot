module.exports = {
    name: 'roast',
    description: 'ooooo roasted',
    execute(message, args, list) {
        var random = Math.floor(Math.random()*(list.length));
        message.channel.send(list[random]);
    }
}