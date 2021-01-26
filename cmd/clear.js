exports.run = (bot, msg, params) => {

    let messagecount = parseInt(params[0]);
  
    if(isNaN(messagecount)) return msg.channel.send(":x:  " + "| Error : Please enter a valid number (2-100)");
  
    if(messagecount > 100){
      msg.channel.send(":x:  " + "| Error : Maximum messages bot can clear is `100` ")
    }else if(messagecount < 2 ) {
      msg.channel.send(":x:  " + "| Error : Error : Minimum messages bot can clear is `2`")
    } else {
  
    }{
      msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purge', 'delete'],
  permLevel: 3
};

exports.help = {
  name: "clear",
  description: "Clearing Messages",
  usage: "clear [NUMBER]"
};
