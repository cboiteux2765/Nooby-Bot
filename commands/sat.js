module.exports = {
    name: 'sat',
    description: 'Generate a random SAT score.',
    execute(message) {
        let math = Math.floor(Math.random()*61+20)*10;
        let english = Math.floor(Math.random()*61+20)*10;
        let total = math + english;
        message.channel.send(`Your SAT Score is: ${total}\nMath: ${math}\nEnglish: ${english}`)
    }
} // 400 - 1600, 200 - 800 per section