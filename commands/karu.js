module.exports = { 
    name: 'karu',
    description: "Karu's Twitch",
    execute(client, message, args, Discord){
        message.channel.send('https://www.twitch.tv/karuzki');
    }
}