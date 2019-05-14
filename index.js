var commando = require("discord.js-commando");
var Minobot  = new commando.Client({
    owner: '[Mino]#8397',
    commandPrefix: 'n!'
});

Minobot.login('NTcxNzc4ODMyMzQ0OTQwNTU1.XMyvzA.YnecxfwnNs2MQP6XJ4zdbjhnZ10');

Minobot.registry.registerGroup('other', 'Other');
Minobot.registry.registerCommandsIn(__dirname + "/commands")
Minobot.registry.registerDefaults();


