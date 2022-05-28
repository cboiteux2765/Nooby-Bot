module.exports = {
    name: 'roast',
    description: 'ooooo roasted',
    execute(message, list) {
        var random = Math.floor(Math.random()*(list.length));
        message.channel.send(list[random]);
    }
}