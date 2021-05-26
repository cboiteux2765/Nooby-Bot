const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
client.descriptions = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = 'nooby ';
let facts = ['In the horizontal direction, projectiles do not have acceleration and their velocity remains constant throughout.', 'The Law of Conservation of Matter applies to all fields in science. "Nothing is lost, nothing is gained, everything is transformed." - Antoine Lavoisier', '6 times 9 plus 6 plus 9 equals 69!', 'The infinite sum of a geometric series whose common ratio is less than the absolute value of 1 eventually converges towards a value. Formula: a1/1-r', 'A solution is not a solution if it isn\'t homogenous.', '1 electronVolt = 1.6 * 10^-19 J', 'c = lambda * nu (Speed of light = wavelength * frequency)', 'e = h * nu (Energy = Planck\'s constant 6.626 * 10^-34 J s * frequency)', 'An electrolyte is a solute that forms ions upon dissolving and conducts electricity. When connected with electrodes, they process electricity to power the electronic system connected to it.'];
let greets = ['Howdy!', 'Hi!', 'Hello!', 'Sup!', 'Greetings'];
let fails = ['https://tenor.com/view/slick-fall-ouch-fail-oops-gif-4402351'];
let opinions = ['I hate bananas.', 'Stinky cheese sucks.', 'C# is Java on steroids.', 'Taiwan is not part of China.', 'Math is fun!', 'Art sucks.'];
let roasts = ['You eat more than you live.', 'It seems that only your body is growing, not the brain...', 'Get a life.', 'You\'re using me because your family left you.', 'You spend a lot of time with me instead of getting straight A\'s.', 'Your mom is so dumb because she brought a spoon the the Super Bowl.', 'You should be spending more time with your friends than me.'];

client.once('ready', () => {
    console.log('Hello hello!');
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) {
        return;
    } 
        
    if (command === 'brain') {
        client.commands.get('brain').execute(message, args);
    } else if (command === 'fact') {
        client.commands.get('fact').execute(message, args, facts);
    } else if (command === 'hello' || command.toLowerCase() === 'hi') {
        client.commands.get('hello').execute(message, args, greets);
    } else if (command === 'roast') {
        client.commands.get('roast').execute(message, args, roasts);
    } else if (command === 'fail') {
        client.commands.get('fail').execute(message, args, fails);
    } else if (command === 'help') {
        message.channel.send('Command descriptions in development.');
        const trimmed = [];
        for (const file of commandFiles) {
            var comm = prefix;
            comm += file.replace('.js', '');
            trimmed.push(comm);
        }
        message.channel.send(trimmed);
    } else if (command === 'math sucks' || command === 'mathsucks') {
        client.commands.get('math sucks').execute(message, args);
    } else if (command === 'opinion') {
        client.commands.get('opinion').execute(message, args, opinions);
    }
})

function answerQuestion(question) {
    const words = ['do', 'you', 'like'];
    var intelligible = true;
    for (let i = 0; i < words.length; i++) {
        if (question.indexOf(words[i]) >= 0) {
            intelligible = false;
            break;
        }
    }
    if (intelligible) {

    } else {
        return "That is an unintelligible question.";
    }
}

function addContent(list, content) {
    list.push(content);
}

function removeContent(list, begin, end, target) {
    // binary search

    var mid = (begin + end)/2;
    if (list[mid] > target) {
        end = mid - 1;
        return removeFact(list, begin, end, target);
    }

    if (list[mid] < target) {
        begin = mid + 1;
        return removeFact(list, begin, end, target);
    }

    if (list[mid] === target) {
        list.pop(mid);
    }

    return `The content "${target}" that you were looking for does not exist in the list. `;
}

function showDashboard() {
    console.log('Welcome to Nooby Bot Control Panel!');
    console.log('1. Notifications');
    console.log('2. Change something');
    var choice = window.prompt('', 1);
    switch (choice) {
        case 1:
            
            break;
        
        case 2:
            break;
    }
}

client.login(config.token);
// Last line