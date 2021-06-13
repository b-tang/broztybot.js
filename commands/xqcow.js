module.exports = { 
    name: 'xqcow',
    aliases: ['x', 'xqc', 'xqcow'],
    description: "Twitch link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.twitch.com/xQcOW');
    }
}