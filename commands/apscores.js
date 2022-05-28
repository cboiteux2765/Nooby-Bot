module.exports = {
    name: 'apscores',
    description: 'Nooby will predict your AP scores.',
    execute(message, list) {
        let temp = [];
        let apMsgs = [];
        let msg = "";
        for (let i = 0; i < list.length; i++) {
            temp.push(list[i]);
        }
        let numAPs = Math.floor(Math.random()*14+1);
        for (let i = 0; i < numAPs; i++) {
            let randomScore = Math.floor(Math.random()*5+1);
            let randomIndex = Math.floor(Math.random()*temp.length);
            let randomAP = temp[randomIndex];

            apMsgs.push(`${randomAP} | Your Score: ${randomScore}`);
            temp.splice(randomIndex, 1);
        }
        apMsgs.sort();
        for (let i = 0; i < apMsgs.length; i++) {
            msg += apMsgs[i];
            msg += "\n";
        }


        for (let i = 0; i < list.length; i++) {
            temp.push(list[i]);
        }
        message.channel.send(msg);


    }
}