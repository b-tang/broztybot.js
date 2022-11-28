const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Brozty Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube' || command == 'yt'){
        message.channel.send('https://www.youtube.com/brozty');
    } else if(command == 'karu'){
        message.channel.send('https://www.twitch.tv/karuzki');
    } else if(command == 'chaos'){
        message.channel.send('https://www.twitch.tv/starvader_chaos');
    } else if(command == 'sladex'){
        message.channel.send('https://www.youtube.com/channel/UCiBKRnNBv_3PscyVtacKa3w');
    }
});

