const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, komutlar yüklendi.`);
  client.user.setStatus("dnd");
    setInterval(function() {

        

        client.user.setGame("Hizmette!");
        }, 2 * 9500);
}
