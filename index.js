require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));

const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ5NTM4ODYzMjgyMjU3OTYw.Xd-QPw.zOE2YfgKQpoBfPTxKOAaW11CagU';

const PREFIX = '>';

bot.on('ready', () =>{
    console.log('Proxima is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ily':
            message.channel.sendMessage('Ily too!!')
            break;
        case 'hello':
            message.channel.sendMessage('hello!!')
            break;
        case 'morning':
            message.channel.sendMessage('Good morning! Do you need a coffee?')
            break;
        case 'afternoon':
            message.channel.sendMessage('Good afternoon! Dont forget to eat lunch.')
            break;
        case 'night':
            message.channel.sendMessage('Goodnight! Dont forget to brush your teeth!')
            break;
        case 'toad':
            message.channel.sendMessage('bonk!')
             break;
        case 'ok_proxima':
            message.channel.sendMessage('OK, Matthew.')
            break;
        case 'proxima_play_despacito':
            message.channel.sendMessage('https://www.youtube.com/watch?v=kJQP7kiw5Fk%27')
            break;
        case 'lifeline':
            message.channel.sendMessage('[National Suicide Prevention Lifeline] 1-800-273-8255, more resources https://www.safehelpline.org/ I know life is scary, but these people can help. I love you!! Please stay safe <3')
            break;
        case 'invite':
            message.channel.sendMessage('https://discordapp.com/api/oauth2/authorize?client_id=649538863282257960&permissions=0&scope=bot')
            break;
        case 'help':
            message.channel.sendMessage('https://docs.google.com/document/d/1It_wsqrjuaqqW1jMQH6hPY1lPAl_DvKoSn4mpmVvzGY/edit?usp=sharing')
            break;
        case 'arson':
            message.channel.sendMessage('Do you like fire too?')
            break;
        case 'welcome':
            message.channel.sendMessage('Who are you? I will burn the entire apartment down with you in it.')
            break;
        case 'bonk':
            message.channel.sendMessage('That is the call of a banjo frog, also called a Pobblebonk! bonk bonk!!')
            break;
        case 'pobblebonk':
            message.channel.sendMessage('Here is your pobblebonk! https://youtu.be/F3ivv7pQkWQ')
            break;
        case 'thanks':
            message.channel.sendMessage('ok, human.')
            break;
        case 'jimmy':
            message.channel.sendMessage('Because the CIA wants to keep us all confused while they continue to rule the world without our consent. We are too busy figuring out which day thanksgiving is on.')
            break;
        case 'party':
            message.channel.sendMessage('There is no party. There is only fire. I am your overlord now and I give thou no mercy.')
            break;
        case 'bee':
            message.channel.sendMessage('https://gist.githubusercontent.com/The5heepDev/a15539b297a7862af4f12ce07fee6bb7/raw/7164813a9b8d0a3b2dcffd5b80005f1967887475/entire_bee_movie_script')
            break;
        case 'song':
            message.channel.sendMessage('<https://www.youtube.com/watch?v=dQw4w9WgXcQ>')
            break;
        case 'Im_dying':
            message.channel.sendMessage('<https://afinde-production.s3.amazonaws.com/uploads/6d52df93-236f-401f-b231-32ded021ae58.png>')
            break;
        case 'ohno':
            message.channel.sendMessage('https://youtu.be/_wbvWZu2-x8')
            break;
        case 'pokemon':
            message.channel.sendMessage('https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number')
            break;
        case 'cryptid':
            message.channel.sendMessage('Cryptid rights!')
            break;
        case 'toby':
            message.channel.sendMessage('Toby, you are a wonderful cryptid!!')
            break;
        case 'zelery':
            message.channel.sendMessage('ZELERY DRINK YOUR WATER')
            break;


        case 'trans':
            message.channel.sendMessage('Trans rights!')
        case 'gay':
            message.channel.sendMessage('Gay rights!')
            break;
        case 'keir':
            message.channel.sendMessage('Pan rights!')
            break;
        case 'pan':
            message.channel.sendMessage('Pan rights!')
            break;
        case 'bi':
            message.channel.sendMessage('Bi rights!')
            break;
        case 'lesbian':
            message.channel.sendMessage('Lesbian rights!')
            break;
        case 'aroace':
            message.channel.sendMessage('Aroace rights!')
            break;
        case 'aro':
            message.channel.sendMessage('Aro rights!')
            break;
        case 'ace':
            message.channel.sendMessage('Ace rights!')
            break;
        case 'twink':
            message.channel.sendMessage('Twink rights!')
            break;
        case 'bear':
            message.channel.sendMessage('Bear rights!')
            break;
        case 'demiboy':
            message.channel.sendMessage('Demiboy rights!')
            break;
        case 'agender':
            message.channel.sendMessage('Agender rights!')
            break;
        case 'nb':
            message.channel.sendMessage('NB rights!')
            break;
        case 'enby':
            message.channel.sendMessage('Enby rights!')
            break;
        case 'ally':
            message.channel.sendMessage('Ally rights!')
            break;
        case 'motiv':
            message.channel.sendMessage('Youre doing great!! I love you! <3')
            break;
        
                }
        
})

bot.login(token);