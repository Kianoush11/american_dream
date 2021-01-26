var jojotru = [
    "it's true man<:normal:779270062087077908>", 
    "No no do not trust it<:WaitWutNoMouse:760581466940768286>", 
    "Sorry man i currently AFK <:russia:779272858953973781>"
  ];
  
  exports.run = (bot, msg, params) => {
  
      msg.channel.send(jojotru[Math.floor(Math.random() * jojotru.length)]);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "truth",
    description: "jojo code 4",
    usage: "truth"
  };
  