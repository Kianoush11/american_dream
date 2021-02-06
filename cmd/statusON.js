

    const Discord = require('discord.js')

    exports.run = (bot, msg, params) => {

        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':x: | شما دسترسی این گزینه را ندارید').then(msg.react(':x:'))

    if(!params.join(" ")){
      return msg.channel.send(":x:  " + "| آدرس آیپی را وارد کنید")
    };


    msg.channel.bulkDelete(10);
    
    const embod = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle("GreenKing")
    .setTimestamp()
    .setDescription(`Server Ip Address : ${params.join(" ")} \nServer Password : iranrp \nStatus : Online`)
    
    msg.channel.send({embed: embod});
    
    
    
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: "status1",
      description: "Bot Info",
      usage: "about"
    };
    