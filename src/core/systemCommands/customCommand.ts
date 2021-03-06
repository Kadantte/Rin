import https = require('https');
import url = require('url');

async function fetchCommand(uri: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const link = url.parse(uri);

		const req = https.request(
			{
				hostname: link.hostname,
				path: link.path,
				method: 'GET',
			},
			function (res) {
				let str = '';

				res.on('data', (d) => {
					str += d;
				});

				res.on('end', function () {
					resolve(str);
				});
			}
		);

		req.on('error', (error) => {
			reject(error);
		});

		req.end();
	});
}

import { Command } from '../command';
import { createCommand, deleteCommand } from '../customCommands';
import customCommands = require('./customCommands');
const listCommands = customCommands.run;

export = new Command({
	run: async function (message, args, colors, prompt) {
		if (!args[1]) {
			listCommands(message, args, colors);
		} else
			switch (args[1].toLowerCase()) {
				case 'add':
				case 'create': {
					message.channel.send({
						embed: {
							title: 'Please provide a custom command',
							description:
								'Custom commands can be provided as a message or a link to a raw GitHub gist.\n' +
								'See documentation for further info om how to construct a custom command.',
							color: colors.base,
						},
					});
					prompt({
						user: message.author.id,
						channel: message.channel.id,
					})
						.then(async (commandMessage) => {
							const command = commandMessage.content.match(
								/^https:\/\/gist.githubusercontent.com\/.*?\/.*?\/raw\/(.*?\/.*\.json)?$/
							)
								? await fetchCommand(commandMessage.content)
								: commandMessage.content;

							createCommand(command, commandMessage.guild.id)
								.then((command) =>
									message.channel.send({
										embed: {
											title: 'Command created',
											description: `${command.name} successfully created.`,
											color: colors.success,
										},
									})
								)
								.catch((e) =>
									message.channel.send({
										embed: {
											title: 'An error occurred, command not created',
											description: e.message || 'Unknown error.',
											color: colors.error,
										},
									})
								);
						})
						.catch(() => {
							message.channel.send({
								embed: {
									title: 'Custom command creation timed out',
									description: 'If you still wish to create one rerun the command and send it.',
									color: colors.error,
								},
							});
						});

					break;
				}
				case 'remove':
				case 'delete': {
					const command =
						args[2] ||
						(message.channel.send({
							embed: {
								title: 'Please provide a command',
								description: 'Type the name of the command you wish to delete in chat.',
								color: colors.base,
							},
						}),
						await prompt({ user: message.author.id, channel: message.channel.id })).content;

					deleteCommand(message.guild.id, command)
						.then((command) =>
							message.channel.send({
								embed: {
									title: 'Command deleted',
									description: `${command} successfully created.`,
									color: colors.success,
								},
							})
						)
						.catch((e) =>
							message.channel.send({
								embed: {
									title: 'An error occurred, command may not be deleted',
									description: e.message || e,
									color: colors.error,
								},
							})
						);
					break;
				}
			}
	},
	aliases: ['Custom'],
	description: 'Allows for the creation and removal of custom commands.',
	detailed:
		"Let's you create and or remove custom commands, for documentation go [here](https://github.com/RinProject/Rin/blob/master/docs/custom_commands.md).",
	permissions: ['ADMINISTRATOR'],
	examples: [
		(prefix) => `${prefix}customcommand add`,
		(prefix) => `${prefix}customcommand remove`,
		(prefix) => `${prefix}custom create`,
		(prefix) => `${prefix}custom delete`,
	],
	name: 'CustomCommand',
	guildOnly: true,
});
