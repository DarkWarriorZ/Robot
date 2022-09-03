const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("speler kicken")
        .addUserOption((option) => option
        .setName("persoon")
        .setDescription("de persoon die je wilt kicken")
        .setRequired(true)
        )

        .addStringOption((option) => 
        option
        .setName("reden")
        .setDescription("de reden waarom je deze persoon wilt kicken")
        ),

    async execute(interaction, client) {
        const user = interaction.option.getUser("persoon");
        let reason = interaction.option.getString('reden');
        const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);

        if (!reason) reden = "geen reden gegeven.";


        await user.send({
            //later embed maken
            content: ` je bent gekicked uit ${interaction.guild.name}\n reden: ${reden} `
        }).catch(console.log('de gebruiker z\'n PM is gesloten'));

        await member.kick(reden).catch(console.error);
        await interaction.reply({ content: `${user.tag} is gekicked!`})
        },

        
        
    };