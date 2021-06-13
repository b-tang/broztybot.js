module.exports = { 
    name: 'inlots',
    description: "Twitch link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.twitch.com/inlotz');
    }
}