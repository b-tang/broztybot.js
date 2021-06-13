module.exports = { 
    name: 'twitter',
    aliases: ['twit', 'twitter'],
    description: "Twitter Link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.twitter.com/brozty_');
    }
}