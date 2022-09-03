const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Gebruik: /Ban [naam] [reden]')
        .addUserOption(option => option.setName('persoon').setDescription('de persoon die je wilt bannan').setRequired(true))
        .addStringOption(option => option.setName('reden')
        .setDescription("de reden waarom je deze persoon wilt bannnen")),

    async execute(interaction, client) {
        const user = interaction.option.getUser('persoon');
        let reason = interaction.option.getString('reden');
        const member = await interaction.guild.members.fetch(user.id).catch(console.error);

        if (!reason) reden = "geen reden gegeven"


        user.send({
            //later embed maken
            content: ` je bent gebanned uit ${interaction.guild.name}\n reden: ${reden} `
        }).catch(console.log('de gebruiker z\'n PM is gesloten'));

        await member
        .ban({
            deleteMessageDays: 2,
            reason: reden,
        })
        
        .catch(console.error);
        await interaction.reply({content: `${user.tag} is verbannen!`});
        },

        
        
    };