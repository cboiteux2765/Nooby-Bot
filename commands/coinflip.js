module.exports = {
    name: 'coinflip',
    description: 'Flip a coin.',
    execute(message) {
        let rand = Math.floor(Math.random()*2);
        if (rand == 0) {
            message.channel.send('Heads!');
        } else {
            message.channel.send('Tails!');
        }
    },

    crusstyCoin(message) {
        let rand = Math.floor(Math.random()*2);
        if (rand == 0) {
            message.channel.send('Crussty');
        } else {
            message.channel.send('Crussty');
        }
    }
}