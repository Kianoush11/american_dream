var ms = require('ms')

exports.run = (bot, msg, params) => {

  let Timer = params[0];

  if(!params[0]){
    return msg.channel.send(":x:" + " | Error : Please use command like this :jtimer [1s/1m/1h/1d]");
  }

  if(params[0] <= 0){
    return msg.channel.send(":x:" + " | Error : Please use command like this :jtimer [1s/1m/1h/1d]");
  }

  msg.channel.send("Timer is now  set to : " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    msg.channel.send(msg.author.toString() + `:clock:  Ding Ding !: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clock', 'time'],
  permLevel: 0
};

exports.help = {
  name: "timer",
  description: "timer",
  usage: "timer [1s/1m/1h/1d]"
};
