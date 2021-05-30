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
let facts = ['In the horizontal direction, projectiles do not have acceleration and their velocity remains constant throughout.', 'The Law of Conservation of Matter applies to all fields in science. "Nothing is lost, nothing is gained, everything is transformed." - Antoine Lavoisier', '6 times 9 plus 6 plus 9 equals 69!', 'The infinite sum of a geometric series whose common ratio is less than the absolute value of 1 eventually converges towards a value. Formula: a1/1-r', 'A solution is not a solution if it isn\'t homogenous.', '1 electronVolt = 1.6 * 10^-19 J', 'c = lambda * nu (Speed of light = wavelength * frequency)', 'e = h * nu (Energy = Planck\'s constant 6.626 * 10^-34 J s * frequency)', 'An electrolyte is an ionic compound that forms ions upon dissolving and conducts electricity. When connected with electrodes, they process electricity to power the electronic system connected to it.'];
let greets = ['Howdy!', 'Hi!', 'Hello!', 'Sup!', 'Greetings'];
let fails = ['https://tenor.com/view/slick-fall-ouch-fail-oops-gif-4402351'];
let opinions = ['I hate bananas.', 'Stinky cheese sucks.', 'C# is Java on steroids.', 'Taiwan is not part of China.', 'Math is fun!', 'Art sucks.', 'Dawnold Jay Chrump is the worst man in history.', 'Java is a good coding language to start with.'];
let farewells = ['Farewell, my friend!', ':wave:', 'Bye! Have a good day!', 'Cya', 'Ttyl'];
let fortunes = ['You will be wealthy in the future.', 'You will end up like a bum.', 'You will be the next Elon Musk.', 'Good things will happen if you give to people who need.', 'You will score all 1\'s on your AP tests.', 'You will score all 5\'s on your AP tests.', 'You will be forgiven of your sins.'];
let wisdoms = ['Confucius said, admitting that you don\'t know something is knowledge.'];
let motivations = ['If you do your homework I\'ll buy you a family-sized cookie.', 'Dream big. Work hard. Win big.','You got this!!!', 'If you do your homework you are smart and motivated.', 'Study hard and you will achieve your dreams of working in your favorite job.'];
let roasts = ['You eat more than you live.', 'It seems that only your body is growing, not the brain...', 'Get a life.', 'You\'re using me because your family left you.', 'You spend a lot of time with me instead of getting straight A\'s.', 'Your mom is so dumb because she brought a spoon to the Super Bowl.', 'You should be spending more time with your friends than me.'];

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log('Hello hello!');
})

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (!message.content.toLowerCase().startsWith(prefix)) {
        if (message.content.toLowerCase().indexOf('grind') >= 0) {
            message.channel.send('letsgooooooo!');
        } 
        if (message.content.toLowerCase().indexOf('yeppy') >= 0) {
            message.channel.send('Hello, my brother!');
        }
        if (message.content.toLowerCase().indexOf('clement') >= 0) {
            message.channel.send('Bless the maker!');
        }
        if (message.content.toLowerCase().indexOf('math sucks') >= 0 || message.content.toLowerCase().indexOf('mathsucks') >= 0) {
            client.commands.get('math sucks').execute(message, args);
        }
    } else {
        if (command === 'brain') {
            client.commands.get('brain').execute(message, args);
        } else if (command === 'fact') {
            client.commands.get('fact').execute(message, args, facts);
        } else if (command === 'hello' || command === 'hi') {
            client.commands.get('hello').execute(message, args, greets);
        } else if (command === 'math sucks' || command === 'mathsucks') {
            client.commands.get('math sucks').execute(message, args);
        } else if (command === 'roast') {
            client.commands.get('roast').execute(message, args, roasts);
        } else if (command === 'fail') {
            message.channel.send(getData('fail'));
        } else if (command === 'help') {
            const trimmed = [];
            for (const file of commandFiles) {
                var comm = prefix;
                comm += file.replace('.js', '');
                const c = require(`./commands/${file}`);
                var desc = c.description;
                comm += ' - ';
                comm += desc;
                trimmed.push(comm);
            }
            message.channel.send(trimmed);
        } else if (command === 'opinion') {
            client.commands.get('opinion').execute(message, args, opinions);
        } else if (command === 'bye') {
            client.commands.get('bye').execute(message, args, farewells);
        } else if (command === 'crystal') {
            client.commands.get('crystal').execute(message, args, fortunes);
        } else if (command === 'motivate') {
            client.commands.get('motivate').execute(message, args, motivations);
        } else if (command === 'wisdom') {
            client.commands.get('wisdom').execute(message, args, wisdoms);
        } else if (command === 'meditate') {
            client.commands.get('meditate').execute(message, args);
        } else if (command === 'bless') {

        } else if (command === 'trigger') {

        } else if (command === 'detect lie' || command === 'detectlie') {
            client.commands.get('detectlie').execute(message, args);
        } else if (command === 'delete') {
            client.commands.get('delete').execute(message, args, number);
        }
    }
})

client.login(config.token);
// Last line