require('dotenv').config(); //initialize dotenv
const axios = require('axios'); //add this line at the top
const {Client, Intents} = require('discord.js'); //import discord.js

async function getMeme(){
    const res = await axios.get('https://memeapi.pythonanywhere.com/');
    return res.data.memes[0].url;
}

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

const client = new Client({ intents: 14023 }); //create new client


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token