module.exports = {
    name: 'help',
    aliases: ['h', 'help'],
    description: "Embeds!",
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        // .setAuthor("Help Commands")
        .setColor('#107DAC')
        .setTitle("BroztyBot Commands Created by Brozty")
        .setURL("https://www.youtube.com/brozty")
        .setDescription('BroztyBot help commands' + '\n prefix: "-"')
        .addFields(
            {name: "-youtube, -yt", value: "Brozty's Youtube Channel"},
            {name: "-twitter, -twit", value: "Brozty's Twitter"},
            {name: "-karu", value: "Karu's Twitch Channel"},
            {name: "-chaos", value: "Chaos's Twitch Channel"},
            {name: "-sladex", value: "Sladex's Youtube Channel"},
            {name: "-whale", value: "Whale's Twitch Channel"},
            {name: "-inlots", value: "Inlot's Twitch Channel"},
            {name: "-x, -xqc, -xqcow", value: "Mr. cow's Twitch Channel"},
            {name: '-suggestion "suggestion", -suggest "suggestion"', value: 'Create a suggestion for the server'},
        )
        .setImage('https://i.imgur.com/TcevTC7.png')
        .setFooter('Try using them!');

        message.channel.send(newEmbed);
    }
}