module.exports = {
	async run(message, args) {
		let member = message.mentions.members.first() || await message.guild.members.cache.get(args[1]);
		console.log(member)
		if (member == undefined) {
			return message.channel.send('', {
				embed: {
					title: `${message.author.username}'s Avatar`,
					color: 0xFF80CC,
					image: {
						url: message.author.displayAvatarURL(),
						height: 512, 
						width: 512
					}
				}
			});
		} else {
			return message.channel.send('', {
				embed: {
					title: `${member.user.username}'s Avatar`,
					color: 0xFF80CC,
					image: {
						url: member.user.avatarURL(),
						height: 512, 
						width: 512
					}
				}
			})
		}
	},
	description: 'Provides a users avatar',
	detailed: 'Provides a users avatar',
	examples: prefix => `${prefix}avatar @user, ${prefix}avatar <user id>`,
	name: 'avatar',
	perms: [null]
}
