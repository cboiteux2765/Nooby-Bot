module.exports = {
    name:"tip",
    description:"Important tips",
    execute(message, args, list) {
        var random = Math.floor(Math.random()*list.length);
        message.reply(list[random]);
    }
}