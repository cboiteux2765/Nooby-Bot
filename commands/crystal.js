module.exports = {
    name: "crystal",
    description: "Fortune telling",
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length); 
        message.channel.send(list[random]);
    }
}