module.exports = {
    name: "crystal",
    description: "Fortune telling",
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length); 
        message.reply(list[random]);
    }
}