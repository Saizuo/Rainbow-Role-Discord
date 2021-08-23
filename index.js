const mySecret = process.env['TOKEN']
const { Client, version } = require('discord.js');
const { 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ ${bot.user.tag} ] Rainbow ACTIVATED`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[Error] ServerID Wrong: ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[Error] RoleID is Wrong, Server Name: ${guild.name}` 
    
    if(interval < 3500) console.log(`\n[!] Change the interval back to 3500`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[Error]No Permisson To Make Changes on The Role!`));
    }, interval)
    
        bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Made By Saizuo with joe Mama',
            type: 'LISTENING',
        }
    })
})

bot.login(process.env.TOKEN).catch(err => console.log(`Token is Invalid!`));
