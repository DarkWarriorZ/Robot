const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const fs = require('fs');


module.exports = (client) => {
    client.Handlecommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter(file => file.endsWith("js"));

            const { commands, commandArray} = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command, command.data.toJSON());
                console.log(`command: ${command.data.name} is geregistreerd`);
            }
        }
        
        const clientId = '1014199883844042753';
        const guildId = '1013414376579010590';


        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);


  
	try {
		console.log(`Started refreshing ${client.commandArray.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: client.commandArray },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
   
};
};