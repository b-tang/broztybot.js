module.exports = { 
    name: 'whale',
    description: "Twitch link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.twitch.com/wonderwhales123');
    }
}