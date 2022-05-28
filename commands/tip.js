module.exports = {
    name:"tip",
    description:"Important tips",
    execute(message, list) {
        var random = Math.floor(Math.random()*list.length);
        message.reply(list[random]);
    }
}