module.exports = (Discord, client, message) => {
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, args, cmd, Discord); 

    if(command == 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command == 'karu'){
        client.commands.get('karu').execute(message, args); 
    } else if(command == 'chaos'){
        client.commands.get('chaos').execute(message, args); 
    } else if(command == 'sladex'){
        client.commands.get('sladex').execute(message, args); 
    } else if (command == 'suggestion'){
        client.commands.get('suggestion').execute(client, message, args, cmd, Discord);
    } else if (command == 'help') {
        client.commands.get('help').execute(client, message, args, cmd, Discord);
    } else if(command == 'whale'){
        client.commands.get('whale').execute(message, args); 
    } else if (command == 'twitter'){
        client.commands.get('twitter').execute(message, args);
    } else if (command == 'inlots'){
        client.commands.get('inlots').execute(message, args);
    } else if (command == 'xqcow'){
        client.commands.get('xqcow').execute(message, args);
    } 
}