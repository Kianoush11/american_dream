const { RichEmbed } = require('discord.js');
const axios = require('axios');


exports.run = async (bot, message, args) => {

      let getInfo = async () => {
        if(!args[0]) return message.channel.send(":x: | Error : please enter a Aparat username");
        let response = await axios.get(`https://www.aparat.com/etc/api/profile/username/${args[0]}`);
        let info = response.data.profile;
        return info;
      };
        let infoValue = await getInfo();
     

        const embxd = new RichEmbed()
        .setColor("#e91e63")
        .setTitle(`You Search for : ${infoValue.username}`)
        .addField(`Username <:aparat:786573333733965854> `, `${infoValue.username}`)
        .addField(`Channel ID <:aparat:786573333733965854> `, `${infoValue.userid}`)
        .addField(`Videos Count <:aparat:786573333733965854> `, `${infoValue.video_cnt}`)
        .addField(`Subscribers Count <:aparat:786573333733965854> `, `${infoValue.followed_cnt}`)        
        .setThumbnail(`${infoValue.pic_m}`)
        
        
        message.channel.send({embed: embxd})


    };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['ap'],
      permLevel: 0
    };
    
    exports.help = {
      name: "aparat",
      description: "ap info",
      usage: "aparattt"
    };
    