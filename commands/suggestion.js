module.exports = {
    name: 'suggestion',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, message, args, cmd, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions-test');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const newEmbed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(newEmbed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}