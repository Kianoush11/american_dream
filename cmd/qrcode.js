const Discord = require('discord.js')

exports.run = (bot, msg, params) => {


    if(!params.join(" ")){
        return msg.channel.send(":x:  " + "| لطفا یک متن،حرف و یا کلمه جهت تبدیل به کیو آر کد بنویسید")
      }

  var invite = new Discord.RichEmbed()

          .setTitle("**بارکد شما ساخته شد**", true)
          .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${params.join(" ")}`)
          .setFooter("GreenHills")
          .setColor('RANDOM')
          //<:frozen:780376909451624468>
  msg.channel.send({embed: invite});

};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['qr'],
  permLevel: 0
};

exports.help = {
  name: "qrcode",
  description: "Bot Info",
  usage: "about"
};
