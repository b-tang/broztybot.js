module.exports = { 
    name: 'youtube',
    aliases: ['yt', 'youtube'],
    description: "My youtube link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.youtube.com/brozty');
    }
}