exports.run = async (bot, msg, args) => {
  if (args.length < 1) return msg.reply('Please choose a team to join');

  let team;

  if (msg.member.roles.find('name', 'Mystic')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Mystic'));
    team = 'Mystic';
  }
  else if (msg.member.roles.find('name', 'Valor')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Valor'));
    team = 'Valor';
  }
  else if (msg.member.roles.find('name', 'Instinct')) {
    msg.member.removeRole(msg.guild.roles.find('name', 'Instinct'));
    team = 'Instinct';
  }
  switch(args[0])
  {
  case 'mystic': {
    msg.member.addRole(msg.guild.roles.find('name', 'Mystic'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + 'and ' : 'you are have '}joined team Mystic.`);
    break;
  }
  case 'valor' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Valor'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + 'and ' : 'you are have '}joined team Valor.`);
    break;
  }
  case 'instinct' : {
    msg.member.addRole(msg.guild.roles.find('name', 'Instinct'));
    msg.reply(`Alright, ${team ? 'you have left team ' + team + 'and ' : 'you are have '}joined team Instinct.`);
    break;
  }
  default : {
    msg.reply('You have to pick, mystic, valor, or instinct.');
    break;
  }
  }
};

exports.conf = {
  aliases: ['pick'],
  guildOnly: true,
};

exports.help = {
  name: 'join',
  description: 'Join one of the teams!',
  usage: '<mystic/valor/instinct>',
  category: 'Teams',
};
