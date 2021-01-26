exports.run = (bot, msg, params) => {

  let min = parseInt(params[0]);
  let max = parseInt(params[1]);

  if(min > max){
      let temp = max;
      max = min;
      min = temp;
  }

  var Result = Math.floor(Math.random() * (max - min + 1)) + min;

  if(isNaN(Result)){
      return msg.channel.send(":x: | Error : Please use command like this : g.number [min] [max]")
  }else{
      msg.channel.send(Result);
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['num'],
  permLevel: 0
};

exports.help = {
  name: "number",
  description: "one random number between MIN and MAX",
  usage: "number [MIN] [MAX]"
};
