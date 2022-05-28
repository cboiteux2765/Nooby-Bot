module.exports = {
    name: 'collegeshotgun',
    description: 'See several college decisions at once.',
    execute(message, list) {
        let temp = [];
        for (let i = 0; i < list.length; i++) {
            temp.push(list[i]);
        }
        var num = Math.floor(Math.random()*21+5);
        let msg = "";
        for (let i = 0; i < num; i++) {
            var randomIndex = Math.floor(Math.random()*temp.length);
            var college = temp[randomIndex];
            var random = Math.floor(Math.random()*3);
            if (random == 0) {
                msg += `You got rejected by ${college}!\n`;
            } else if (random == 1) {
                msg += `You got accepted by ${college}!\n`;
            } else {
                msg += `You got waitlisted by ${college}!\n`;
            }
            temp.splice(randomIndex, 1);
        }
        for (let i = 0; i < list.length; i++) {
            temp.push(list[i]);
        }
        message.channel.send(msg);
    }
}