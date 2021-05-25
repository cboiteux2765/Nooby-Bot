module.exports = {
    name: 'fail',
    description: 'Fail.',
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}