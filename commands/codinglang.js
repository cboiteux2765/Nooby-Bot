module.exports = {
    name: 'codinglang',
    description: 'Choose a coding language to work with.',
    execute(message, list) {
        let rand = Math.floor(Math.random()*list.length);
        message.channel.send(list[rand]);
    }
}