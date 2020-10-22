const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DurumCommand extends BaseCommand {
	constructor() {
		super('durum', 'Yetkili Ozel', []);
	}

	run(client, message, args) {
		message.channel.send('durum command works');
		if (args) {
			if (message.author.id == process.env.SAHIP_ID) {
				if (args[0].toLowerCase() == 'çevrimiçi') {
					args[0] = args[0].replace('çevrimiçi', 'online');
				}
				else	if (args[0].toLowerCase() == 'rahatsız etme') {
					args[0] =	args[0].replace('rahatsız etme', 'dnd');
				}
				else	if (args[0].toLowerCase() == 'boşta') {
					args[0] =	args[0].replace('boşta', 'idle');
				}
				if (args[1] == 'oynuyor') {
					args[1] = args[1].replace('oynuyor', 'PLAYING');
				}
				if (args[1] == 'izliyor') {
					args[1] = args[1].replace('izliyor', 'WATCHING');
				}
				if (args[1] == 'dinliyor') {
					args[1] = args[1].replace('dinliyor', 'LISTENING');
				}
				if (!args[2]) {
					message.channel.send('aktivite belirtmedin');
				}
				client.user.setPresence({
					status: args[0],
					activity: {
						name: `${args[2]} ${args[3]}`,
						type: args[1],
					},
				});
			}
		}
	}
};