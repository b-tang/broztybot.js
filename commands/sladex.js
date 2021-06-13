module.exports = { 
    name: 'sladex',
    description: "My youtube link",
    execute(client, message, args, Discord){
        message.channel.send('https://www.youtube.com/channel/UCiBKRnNBv_3PscyVtacKa3w');
    }
}