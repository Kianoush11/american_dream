const Discord = require('discord.js')

var Wallpaper = [
    'https://cdn.discordapp.com/attachments/771487466464083991/771490156527091762/image0.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490156955303936/image1.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490157257687050/image2.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490157563084830/image3.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490158033240064/image4.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490158280572958/image5.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490158565392384/image6.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490158792015892/image7.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490159073296444/image8.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490159404253184/image9.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490249767125012/image0.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490249767125012/image0.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490250488676362/image2.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490250693804112/image3.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490251142856704/image5.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490251427676180/image6.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490251679596544/image7.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490252166266900/image9.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490251905695744/image8.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490311444496414/image0.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490311671119872/image1.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490312090026054/image2.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490312371437588/image3.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490312614838333/image4.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490312908177418/image5.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490313432858665/image7.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490318847574026/image0.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490313671802910/image8.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490319119810620/image1.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490319450898442/image2.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490319933767720/image3.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490320218718258/image4.jpg',
    'https://cdn.discordapp.com/attachments/771487466464083991/771490320444948540/image5.jpg',
  ];

  
  exports.run = (bot, msg, params) => {
      

    
     var invite = new Discord.RichEmbed()
     .setTitle("یک والپیپر مناسب شما")
     .setImage(Wallpaper[Math.floor(Math.random() * Wallpaper.length)])
     .setFooter("P A S C A L")
     .setColor('RANDOM')

      msg.channel.send({embed: invite});
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['wall'],
    permLevel: 0
  };
  
  exports.help = {
    name: "walpaper",
    description: "give wallp",
    usage: "wallpaper"
  };















