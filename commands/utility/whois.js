const options = {
	weekday: 'short',
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	timeZone: 'UTC',
	hour12: false
};

const formatter = new Intl.DateTimeFormat('en-GB', options);

const importantPerms = [
	{
		permission: 'ADMINISTRATOR',
		name: 'Administrator'
	},
	{
		permission: 'KICK_MEMBERS',
		name: 'Kick members'
	},
	{
		permission: 'BAN_MEMBERS',
		name: 'Ban members'
	},
	{
		permission: 'MANAGE_CHANNELS',
		name: 'Manage channels'
	},
	{
		permission: 'MANAGE_GUILD',
		name: 'Manage guild'
	},
	{
		permission: 'VIEW_AUDIT_LOG',
		name: 'View audit log'
	},
	{
		permission: 'MANAGE_MESSAGES',
		name: 'Manage messages'
	},
	{
		permission: 'MENTION_EVERYONE',
		name: 'Mention everyone'
	},
	{
		permission: 'MUTE_MEMBERS',
		name: 'Mute members'
	},
	{
		permission: 'DEAFEN_MEMBERS',
		name: 'Deafen members'
	},
	{
		permission: 'MOVE_MEMBERS',
		name: 'Move members'
	},
	{
		permission: 'MANAGE_NICKNAMES',
		name: 'Manage nicknames'
	},
	{
		permission: 'MANAGE_ROLES',
		name: 'Manage roles'
	},
	{
		permission: 'MANAGE_WEBHOOKS',
		name: 'Manage webhook'
	},
	{
		permission: 'MANAGE_EMOJIS',
		name: 'Manage emojis'
	}
];

module.exports = {
	async run(message, args) {
		let member = message.mentions.members.first() || await message.guild.members.cache.get(args[1]) || message.member;
		let roles = '';
		member.roles.cache.each(role=>{
			if(role!=message.guild.id)
				roles+=role.toString()+' ';
		});
		let permissions = '';
		importantPerms.forEach(permission=>{
			if(member.hasPermission(permission.name))
				permissions += `${permission.name}, `
		});

		message.guild.members.cache.sort((member1, member2)=>member1.joinedTimestamp-member2.joinedTimestamp);
		let members = message.guild.members.cache.array(),
			joinPosition = 0;

		for (let i = 0; i < members.length; i++) {
			if(members[i].id==message.author.id){
				joinPosition = i;
				break;
			}
		}

		return message.channel.send('', {
			embed: {
				author: {
					name: member.user.tag,
					iconURL: member.user.avatarURL()
				},
				thumbnail: {
					url: member.user.avatarURL()
				},
				description: member.user.toString(),
				fields: [
					{
						name: 'Joined server on',
						inline: true,
						value: formatter.format(member.joinedTimestamp)
					},
					{
						name: 'Registered on',
						inline: true,
						value: formatter.format(member.user.createdAt)
					},
					{
						name: 'Nickname',
						inline: true,
						value: member.displayName
					},
					{
						name: `Roles (${member.roles.cache.size-1})`,
						inline: false,
						value: roles
					},
					{
						name: 'Important permissions',
						inline: false,
						value: permissions.replace(/, $/, '')
					}
				],
				footer:{
					text: `id: ${member.id} | join position: ${joinPosition}`
				},
				timestamp: +new Date
			}
		});
	},
	description: 'Returns info of a user',
	detailed: 'Returns info of a user',
	examples: prefix => `${prefix}whois @someone`,
	name: 'whois',
	perms: null,
}