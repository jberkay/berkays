const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmebed()
.setColor("RANDOM")
.setImage(message.author.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar'
}
