var commando = require('discord.js-commando');

class about extends commando.Command{
    constructor(client) {
        super(client, {
            name : 'about',
            group : 'other',
            memberName: 'about',
            description: 'This is a bot made by Mino!'
        })
    }
async run(message, ar){
    message.channel.sendMessage("This bot made by @[Mino]#8397 made with Visual Studio Code and Node.JS");
}

}
module.exports = about;