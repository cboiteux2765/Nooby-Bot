module.exports = {
    name: "meditate",
    description: "Performs Clementian Meditation",
    execute(message) {
        let steps = ['The Clementian Meditation Principles', '1. Don\'t hate. Only forgive.','2. Always think about what you are doing in life that helps other people.','3. NEVER THINK NEGATIVELY.','4. You must calm down.','5. Believe.','6. Be determined.','7. Be courageous.','8. Be thankful.','9. Be understanding.','10. Be the right person.'];
        message.channel.send(steps);
        message.channel.send("Breathe in and breathe out, perform each one for 1 minute graciously.");
    }
}