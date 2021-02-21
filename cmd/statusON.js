

    const Discord = require('discord.js')

    exports.run = (bot, msg, params) => {

        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':x: | شما دسترسی این گزینه را ندارید').then(msg.react(':x:'))


    msg.channel.bulkDelete(10);
    
    const embod = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle("GreenKing")
    .setTimestamp()
    .setDescription("اسم سرور : سرور بی نام \n رمز سرور : rpking \n از منوی کامیونیتی/انجمن به بخش سرور برید و اونجا سرور بینام رو پیدا کنید،با تشکر")
    
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
    