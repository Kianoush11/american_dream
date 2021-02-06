

    const Discord = require('discord.js')

    exports.run = (bot, msg, params) => {

        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':x: | شما دسترسی این گزینه را ندارید').then(msg.react(':x:'))



     msg.channel.bulkDelete(10);
    
     const embod = new Discord.RichEmbed()
     .setColor('RED')
     .setTitle("GreenKing")
     .setDescription("سرور آفلاین است")
     .setTimestamp()
    
     msg.channel.send({embed: embod});
    
    
    
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: "status2",
      description: "Bot Info",
      usage: "about"
    };
    