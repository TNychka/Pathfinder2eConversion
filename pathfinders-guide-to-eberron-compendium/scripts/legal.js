Hooks.once('ready', (canvas) => {
	const thisVersion = "1.6.2";
	game.settings.register('pathfinders-guide-to-eberron-compendium', 'license-accepted', {
		name: "License Accepted",
		scope: "world",
		config: false,
		type: Boolean,
		default: false,
	});
	game.settings.register('pathfinders-guide-to-eberron-compendium', 'accepted-version', {
		name: "Accepted Version",
		scope: "world",
		config: false,
		type: String,
		default: "",
	});
	const legalDialog = new Dialog(
	{
		title: "Pathfinder's Guide to Eberron Compendium",
		content: "<h1>Pathfinder's Guide to Eberron Compendium</h1><p><b>Compendium updated to version " + thisVersion +"</b></p><p>See <a href='https://scribe.pf2.tools/v/2qF7WjsY-pathfinders-guide-to-eberron'>PF2e Scribe Document</a> for the mechanical changelog</p><h2>Legal</h2><p>Pathfinder's Guide to Eberron is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p><p>This document can only be utilized for personal use and not to create new games incorporating Wizards IP or anything else that can or will be distributed that does not also conform to Wizards of the Coast’s Fan Content Policy.</p><p>Eberron and its respective logo are trademarks of Wizards of the Coast, Inc., in the U.S.A. and other countries.</p><p>Pathfinder's Guide to Eberron uses trademarks and/or copyrights owned by Paizo Inc., used under Paizo's Community Use Policy (paizo.com/communityuse). We are expressly prohibited from charging you to use or access this content. Pathfinder's Guide to Eberron is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit paizo.com.</p><p>This guide follows the terms of fair use under the OGL and Fan Content Policy. Feel free to copy and distribute this document however you want as long as you continue to follow the terms of fair use under the OGL and Fan Content Policy. The work is done to the best of my ability to meet these rules, and I ask that if there is violation, breach of ownership, or other issue to contact me directly through <a href='https://github.com/TNychka/Pathfinder2eConversion/issues'>Github</a> for any needed alteration or removal. If there are modifications, corrections, updates, features, or anything you would like to add to this document please submit it back to Github. You will be credited for your work, and this document will be maintained as an up-to-date source for the Eberron community.</p>",
		buttons: {     
			button1: {       
				label: "Close",
				callback: () => {
				},
				icon: `<i class="fas fa-times"></i>`
			},
			button2: {       
				label: "I Accept",
				callback: () => {
					game.settings.set('pathfinders-guide-to-eberron-compendium', 'license-accepted', true);
					game.settings.set('pathfinders-guide-to-eberron-compendium', 'accepted-version', thisVersion);
				},
				icon: `<i class="fas fa-check"></i>`
			}
		}
	})

	const lastAcceptedVersion = game.settings.get('pathfinders-guide-to-eberron-compendium', 'accepted-version');
	const isLicenseAccepted = game.settings.get('pathfinders-guide-to-eberron-compendium', 'license-accepted');
	console.log(lastAcceptedVersion)
	console.log(isLicenseAccepted)
	if (isLicenseAccepted == false || lastAcceptedVersion != thisVersion)
	{
		const lastAcceptedVersion = game.settings.set('pathfinders-guide-to-eberron-compendium', 'license-accepted', false);
		legalDialog.render(true);
	}
})