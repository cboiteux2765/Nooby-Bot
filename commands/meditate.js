module.exports = {
    name: "meditate",
    description: "Performs Clementian Meditation",
    execute(message, args) {
        let steps = ['The Clementian Medidation Principles', 
        '1. Don\'t hate. Only forgive.'
        ,'2. Always think about what you are doing in life that helps other people.'
        ,'3. NEVER THINK NEGATIVELY.'
        ,'4. You must calm down.'
        ,'5. Believe.'
        ,'6. Be determined.'
        ,'7. Be courageous.'
        ,'8. Be thankful.'
        ,'9. Be understanding.'
        ,'10. Be the right person.'];
        var mins = Date.now();
        message.channel.send('We shall begin the meditation process. Breathe in. Close your eyes. Think. Every principle practice lasts for 2 minutes. Begin.');
        for (let i = 0; i < steps.length && mins < 120000; i++) {
            message.channel.send(steps[i]);
            if (mins === 119999) {
                message.channel.send('Good. Now, moving on to the next principle.');
            }
        }
        message.channel.send('The meditation process has ended. You may be free. Remember to stay calm, think wisely, and don\'t harm others. Good luck on your journey, my friend.');
    }
}