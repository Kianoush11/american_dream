var jojosugg = [
    "Warning is Enough<:normal:779270062087077908>", 
    "Mute this guy is rude<:normal:779270062087077908>", 
    "Kick is my suggest<:normal:779270062087077908>", 
    "Ban;There is no chance<:normal:779270062087077908>"
  ];
  
  exports.run = (bot, msg, params) => {
  
      msg.channel.send(jojosugg[Math.floor(Math.random() * jojosugg.length)]);
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sug'],
    permLevel: 0
  };
  
  exports.help = {
    name: "suggest",
    description: "jojo code 3",
    usage: "suggest"
  };
  