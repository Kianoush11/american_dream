const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
     
    if(!args[0]) return message.channel.send(":x: | Error : please type your video's name")

    const image = ('https://www.y2mate.com/themes/images/logo.png')
    
    let question = args.join("+");
    
    const embed = new Discord.RichEmbed()
    .setImage(`https://wallpaperaccess.com/full/2404605.png`)
    .setTitle('Download from youtube')
    .setDescription(`[Audio](https://www.y2mate.com/youtube-mp3/${question})\n\n[Video](https://www.y2mate.com/youtube/${question})`)
    .setFooter("Note : cannot download videos with copyrights!")
    
    .setColor('#c91417')
    
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yt'],
    permLevel: 0
  };
  
  exports.help = {
    name: "youtube",
    description: "get cats",
    usage: "help"
  };
  