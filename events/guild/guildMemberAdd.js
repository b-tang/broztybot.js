module.exports = (Discord, client, guildMember) => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache
    .get('853032724256522242').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`); //test server

    // guildMember.guild.channels.cache
    // .get('575864674503884830').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`); //official server
};