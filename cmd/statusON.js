

    const Discord = require('discord.js')

    exports.run = (bot, msg, params) => {

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: | شما دسترسی این گزینه را ندارید').then(message.react(':x:'))

    if(!params.join(" ")){
      return msg.channel.send(":x:  " + "| آدرس آیپی را وارد کنید")
    };

    //let testedRole = message.guild.roles.get('804392803835838493');
    //let testedUser = message.mentions.members.first();
    
    const embod = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle("GreenKing")
    .setDescription(`Server Ip Address : ${params.join(" ")} \n Server Password : iranrp \n Status : Online`)
    
    msg.channel.send({embed: embod});
    
    
    
    };
    
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['info'],
      permLevel: 0
    };
    
    exports.help = {
      name: "about",
      description: "Bot Info",
      usage: "about"
    };
    