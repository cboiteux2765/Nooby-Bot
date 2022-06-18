const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();
client.descriptions = new Discord.Collection();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log('Hello hello!');
});

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
let motivations = ['If you do your homework I\'ll buy you a family-sized cookie.', 'Dream big. Work hard. Win big.','You got this!!!', 'Study hard and you will achieve your dreams of working in your favorite job.'];
let roasts = ['You eat more than you live.', 'It seems that only your body is growing, not the brain...', 'Get a life.', 'You\'re using me because your family left you.', 'You spend a lot of time with me instead of getting straight A\'s.', 'Your mom is so dumb because she brought a spoon to the Super Bowl.'];
let confessions = ['I eat ice cream like a 5-year-old.','I peed on the classroom carpet in 1st grade.', 'I beat up a first grader in kindergarten.', 'I have destroyed tons of ceramics in my life.'];
let tips = ['Study hard! It will land you a good job.', 'Obey the laws.', 'Control your temper.', 'Be respectful.', 'Don\'t lie about important matters.', 'Always learn new things every day.'];
let stuffToDo = ['Read a book.', 'Learn more about a subject.', 'Go play a game or 2 of any video game!', 'Go out for a walk!', 'Feed your pet.', 'Do your homework.', 'Do a hobby.', 'Learn a new skill.', 'Sleep.', 'Briefly check social media.', 'Do some chores.', 'Eat a snack.', 'Listen to some music.', 'Complete your Driver\'s Ed course.', 'Watch YouTube.', 'Get a LinkedIn profile.'];
let codingLangs = ['Java', 'Python', 'JavaScript', 'Scala', 'Rust', 'Assembly', 'HTML/CSS', 'C', 'C++', 'C#', 'PHP', 'SQL', 'Kotlin', 'Go', 'Dart', 'Swift', 'Objective-C', 'Shell', 'R', 'Ruby'];
let codingTopics = ['Web Dev', 'Mobile App Dev', 'GUIs', 'Desktop app dev', 'Game dev', 'Electronics programming', 'Data science', 'Command Line', 'Linux', 'Cybersecurity', 'Data Structures', 'Operating Systems', 'Computer Architecture'];
let colleges = ['Harvard', 'Stony Brook', 'Caltech', 'MIT', 'Stanford', 'UCLA', 'UC Berkeley', 'Johns Hopkins', 'Georgia Tech', 'Rice', 'Carnegie Mellon', 'U Washington', 'Penn State', 'Cornell', 'Princeton', 'Dartmouth', 'UC Irvine', 'UC Davis', 'San Jose State', 'Santa Clara', 'U Michigan', 'U Wisconsin Madison', 'Texas A&M', 'UT Austin', 'UT Dallas', 'Dartmouth', 'Yale', 'Columbia', 'UPenn', 'ASU', 'UC San Diego', 'UC Santa Barbara', 'UC Santa Cruz', 'UC Riverside', 'UC Merced', 'Cal Poly SLO', 'San Diego State', 'Purdue', 'USC', 'Vanderbilt', 'Duke', 'Tufts', 'U Chicago', 'UIUC', 'Case Western Reserve', 'RPI', 'Rutgers', 'Ohio State', 'Colorado School of Mines', 'CU Boulder', 'Northwestern', 'Northeastern', 'Harvey Mudd', 'Claremont McKenna', 'UT Arlington', 'Temple', 'WashU', 'Pitzer', 'Pomona College', 'Boston University', 'Brown', 'Cal Poly Pomona', 'CSU Monterey Bay', 'CSU Sacramento', 'UNC Chapel Hill'];
let apClasses = ['AP Calculus AB', 'AP Calculus BC', 'AP Chinese Language and Culture', 'AP Chemistry', 'AP Computer Science A', 'AP Computer Science Principles', 'AP English Language and Composition', 'AP English Literature and Composition', 'AP French Language and Culture', 'AP German Language and Culture', 'AP Biology', 'AP Statistics', 'AP Art History', 'AP Latin', 'AP Japanese Language and Culture', 'AP Psychology', 'AP Human Geography', 'AP Studio Art: Drawing', 'AP Studio Art 2D', 'AP Studio Art 3D', 'AP Seminar', 'AP Research', 'AP Macroeconomics', 'AP Microeconomics', 'AP Music Theory', 'AP World History: Modern', 'AP European History', 'AP United States History', 'AP United States Government and Politics', 'AP Comparative Government and Politics', 'AP Physics 1', 'AP Physics 2', 'AP Physics C: Electricity and Magnetism', 'AP Physics C: Mechanics', 'AP Environmental Science', 'AP Spanish Language and Culture', 'AP Spanish Literature'];

client.on('message', message => {
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if (!message.content.toLowerCase().startsWith(prefix)) {
        if (message.content.toLowerCase().indexOf('grind') >= 0) {
            message.channel.send('letsgooooooo!');
        }
        if (message.content.toLowerCase().indexOf('math sucks') >= 0 || message.content.toLowerCase().indexOf('mathsucks') >= 0) {
            client.commands.get('math sucks').execute(message, args);
        }
        if (message.content.toLowerCase().indexOf('im bored') >= 0 || message.content.toLowerCase().indexOf('i\'m bored') >= 0) {
            let random = Math.floor(Math.random()*stuffToDo.length);
            message.reply(stuffToDo[random]);
        }
    } else {
        if (command === 'brain') {
            client.commands.get('brain').execute(message);
        } else if (command === 'fact') {
            client.commands.get('fact').execute(message, facts);
        } else if (command === 'hello' || command === 'hi') {
            client.commands.get('hello').execute(message, greets);
        } else if (command === 'math sucks' || command === 'mathsucks') {
            client.commands.get('math sucks').execute(message);
        } else if (command === 'roast') {
            client.commands.get('roast').execute(message, roasts);
        } else if (command === 'fail') {
            client.commands.get('fail').execute(message, fails);
        } else if (command === 'help') {
            const trimmed = [];
            for (const file of commandFiles) {
                let comm = prefix;
                comm += file.replace('.js', '');
                const c = require(`./commands/${file}`);
                let desc = c.description;
                comm += ' - ';
                comm += desc;
                trimmed.push(comm);
            }
            message.channel.send(trimmed);
        } else if (command === 'opinion') {
            client.commands.get('opinion').execute(message, opinions);
        } else if (command === 'bye') {
            client.commands.get('bye').execute(message, farewells);
        } else if (command === 'crystal') {
            client.commands.get('crystal').execute(message, fortunes);
        } else if (command === 'motivate') {
            client.commands.get('motivate').execute(message, motivations);
        } else if (command === 'wisdom') {
            client.commands.get('wisdom').execute(message, wisdoms);
        } else if (command === 'meditate') {
            client.commands.get('meditate').execute(message);
        } else if (command === 'detect lie' || command === 'detectlie') {
            client.commands.get('detectlie').execute(message);
        } else if (command === 'confess') {
            client.commands.get('confess').execute(message, confessions);
        } else if (command === 'tip') {
            client.commands.get('tip').execute(message, tips);
        } else if (command === 'coinflip') {
            client.commands.get('coinflip').execute(message);
        } else if (command === 'crusstyflip') {
            client.commands.get('coinflip').crusstyCoin(message);
        } else if (command === 'codinglang') {
            client.commands.get('codinglang').execute(message, codingLangs);
        } else if (command === 'codingtopic') {
            client.commands.get('codingtopic').execute(message, codingTopics);
        } else if (command === 'college') {
            client.commands.get('college').execute(message, colleges);
        } else if (command === 'collegeshotgun') {
            client.commands.get('collegeshotgun').execute(message, colleges);
        } else if (command === 'sat') {
            client.commands.get('sat').execute(message);
        } else if (command === 'apscores') {
            client.commands.get('apscores').execute(message, apClasses);
        }
    }
});

client.login(config.token);