var jojowear = [
    "<:france:779273259426250772>", 
    "<:russia:779272858953973781>", 
    "<:mexico:779270158047772692>", 
    "<:normal:779270062087077908>"
  ];
  
  exports.run = (bot, msg, params) => {
  
      msg.channel.send(jojowear[Math.floor(Math.random() * jojowear.length)]);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['cloth', 'clothes'],
    permLevel: 0
  };
  
  exports.help = {
    name: "wear",
    description: "jojo code 2",
    usage: "wear"
  };
  