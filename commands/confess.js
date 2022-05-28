module.exports = {
    name:"confess",
    description:"Nooby will confess something",
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.channel.send(list[random]);
    }
}