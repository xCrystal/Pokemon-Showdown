'use strict';

exports.BattleFormatsData = {
	bulbasaur: {
		randomSet1: {
			chance: 4,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "ancientpower"]},
		],
		tier: "LC",
	},
	ivysaur: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	venusaur: { //done
		randomSet1: { //leech seed tank
			chance: 3,
			item: ["leftovers"],
			baseMove1: "leechseed", baseMove2: "synthesis",
			fillerMoves1: ["razorleaf", "razorleaf", "hiddenpowerice"], //leaf for pp&stab, hpice to deter grasses from switching into seed
			fillerMoves2: ["sleeppowder", "sleeppowder", "sleeppowder", "reflect", "lightscreen","toxic"] //misc support moves
		},

		//removed a tanky set here to keep things in the 4-moveset limit. it didn't seem to do anything different from the above set anyway.

		randomSet2: { // tanky sd
			chance: 6,
			item: ["leftovers"],
			baseMove1: "swordsdance", baseMove2: "sleeppowder",
			fillermoves1: ["bodyslam","return"], // pseudo-STAB
			fillerMoves2: ["synthesis","gigadrain","hiddenpowerghost","hiddenpowerground","leechseed"] // coverage or healing
		},
		randomSet3: { //sunnybeamer :)
			chance: 9,
			item: ["leftovers"],
			baseMove1: "solarbeam", baseMove2: "sunnyday", baseMove3: "hiddenpowerfire",
			fillerMoves1: ["sleeppowder", "synthesis", "synthesis","growth","leechseed"]
		},
		randomSet5: { //growth! (also the main set)
			chance: 16,
			item: ["leftovers"],
			baseMove1: "growth", baseMove2: "gigadrain",
			fillerMoves1: ["hiddenpowerice", "hiddenpowerice", "hiddenpowerice", "hiddenpowerfire", "hiddenpowerwater"],
			fillerMoves2: ["sleeppowder", "sleeppowder", "synthesis","leechseed"] // I just like putting leech seed everywhere to force switches & shit
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["poisonpowder", "sleeppowder", "razorleaf", "sweetscent"]},
		],
		tier: "BL",
	},
	charmander: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "growl", "crunch"]},
		],
		tier: "LC",
	},
	charmeleon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	charizard: {//done
		randomSet1: { //physical sweeper
			chance: 12,
			item: ["leftovers","leftovers","leftovers","miracleberry"], 
			baseMove1: "earthquake", // it will either be the pseudo-STAB or the coverage move
			fillerMoves1: ["fireblast", "fireblast", "flamethrower"],
			fillerMoves2: ["swordsdance", "bellydrum"], //equal probability - bd is iconic & fun but sd is probably more likely to be useful in randbats
			fillerMoves3: ["rockslide","rockslide","rockslide","hiddenpowerrock","hiddenpowerflying","return"] // rockslide/hprock/ap is the coverage option, hpfly/return the (pseudo)-stab 
		},
		randomSet2: { //special attacker (more shitty, more rare)
			chance: 16,
			item: ["leftovers","leftovers","leftovers","charcoal","miracleberry"],
			baseMove1: "sunnyday",
			fillerMoves1: ["fireblast", "fireblast", "flamethrower"],
			fillerMoves2: ["hiddenpowergrass","hiddenpowergrass","hiddenpowergrass","hiddenpowerelectric"], //water coverage
			fillerMoves3: ["earthquake","earthquake","dynamicpunch","submission","rockslide","ancientpower"] //coverage against rocks, special tanks, or fellow fires
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["rage", "scaryface", "flamethrower", "wingattack"]},
		],
		tier: "BL",
	},
	squirtle: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "tailwhip", "zapcannon"]},
		],
		tier: "LC",
	},
	wartortle: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	blastoise: {//done
		randomSet1: { //just a tank
			chance: 12,
			item: ["leftovers","leftovers","leftovers","mintberry"],
			baseMove1: "rest",
			fillerMoves1: ["surf", "surf", "hydropump"],
			fillerMoves2: ["icebeam","blizzard","zapcannon"],
			fillerMoves3: ["earthquake","earthquake","dynamicpunch","raindance","sleeptalk"]
		},
		randomSet2: { //countercoat
			chance: 16,
			item: ["leftovers","leftovers","leftovers","mintberry"],
			baseMove1: "rest",
			fillerMoves1: ["mirrorcoat","mirrorcoat","mirrorcoat","counter"],
			fillerMoves2: ["surf", "surf", "hydropump"],
			fillerMoves3: ["icebeam","blizzard"] //the reason this had to be a separate set: zap cannon is incompatible with either countercoat move
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["watergun", "bite", "rapidspin", "protect"]},
		],
		tier: "UU",
	},
	caterpie: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	metapod: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	butterfree: {//done
		randomSet1: {//double powder
			chance: 16,
			item: ["leftovers"],
			baseMove1: "sleeppowder", baseMove2: "stunspore",
			fillerMoves1: ["psychic", "psychic", "psywave"], //lol psywave. but really tho how else this thing gonna do dmg?
			fillerMoves2: ["gigadrain", "nightmare"]
		},
		tier: "NU",
	},
	weedle: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	kakuna: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	beedrill: {//done
		randomSet1: {//swords dance
			chance: 15,
			item: ["leftovers"],
			baseMove1: "swordsdance", baseMove2: "sludgebomb",
			fillerMoves1: ["hiddenpowerghost", "hiddenpowerground", "hiddenpowerground", "hiddenpowerrock","hiddenpowerbug"], //hp rock for randbats threats like crobat/aerodactyl/fellow bug-psns
			fillerMoves2: ["agility", "substitute"]
		},
		randomSet2: {//swords dance with twineedle lol
			chance: 16,
			item: ["leftovers"],
			baseMove1: "swordsdance", baseMove2: "sludgebomb", baseMove3: "twineedle",
			fillerMoves1: ["hiddenpowerghost", "hiddenpowerground", "hiddenpowerground", "hiddenpowerrock"], //a separate set solely so that hp bug + twineedle don't end up on the same set
		},
		tier: "NU",
	},
	pidgey: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	pidgeotto: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	pidgeot: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	rattata: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	raticate: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	spearow: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["peck", "growl", "sonicboom"]},
		],
		tier: "LC",
	},
	fearow: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 20, "moves":["growl", "leer", "furyattack", "payday"]},
		],
		tier: "NU",
	},
	ekans: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	arbok: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	pichu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["thundershock", "charm", "dizzypunch"]},
			{"generation": 2, "level": 5, "moves":["thundershock", "charm", "petaldance"]},
			{"generation": 2, "level": 5, "moves":["thundershock", "charm", "scaryface"]},
			{"generation": 2, "level": 5, "moves":["thundershock", "charm", "sing"]},
		],
		tier: "LC",
	},
	pikachu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 5, "moves":["surf"]},
			{"generation": 1, "level": 5, "moves":["fly"]},
			{"generation": 1, "level": 5, "moves":["thundershock", "growl", "surf"]},
		],
		tier: "NFE",
	},
	raichu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	sandshrew: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	sandslash: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	nidoranf: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["growl", "tackle", "lovelykiss"]},
			{"generation": 2, "level": 5, "moves":["growl", "tackle", "moonlight"]},
			{"generation": 2, "level": 5, "moves":["growl", "tackle", "sweetkiss"]},
		],
		tier: "LC",
	},
	nidorina: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	nidoqueen: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	nidoranm: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["leer", "tackle", "lovelykiss"]},
			{"generation": 2, "level": 5, "moves":["leer", "tackle", "morningsun"]},
			{"generation": 2, "level": 5, "moves":["leer", "tackle", "sweetkiss"]},
		],
		tier: "LC",
	},
	nidorino: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	nidoking: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	cleffa: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["pound", "charm", "encore", "petaldance"]},
			{"generation": 2, "level": 5, "moves":["pound", "charm", "encore", "scaryface"]},
			{"generation": 2, "level": 5, "moves":["pound", "charm", "encore", "swift"]},
			{"generation": 2, "level": 5, "moves":["pound", "charm", "encore", "dizzypunch"]},
		],
		tier: "LC",
	},
	clefairy: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	clefable: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	vulpix: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	ninetales: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	igglybuff: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["sing", "charm", "defensecurl", "mimic"]},
			{"generation": 2, "level": 5, "moves":["sing", "charm", "defensecurl", "petaldance"]},
			{"generation": 2, "level": 5, "moves":["sing", "charm", "defensecurl", "scaryface"]},
			{"generation": 2, "level": 5, "moves":["sing", "charm", "defensecurl", "dizzypunch"]},
		],
		tier: "LC",
	},
	jigglypuff: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	wigglytuff: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	zubat: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["leechlife", "flail"]},
		],
		tier: "LC",
	},
	golbat: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	crobat: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	oddish: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["absorb", "leechseed"]},
		],
		tier: "LC",
	},
	gloom: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	vileplume: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	bellossom: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	paras: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "synthesis"]},
		],
		tier: "LC",
	},
	parasect: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	venonat: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	venomoth: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	diglett: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	dugtrio: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	meowth: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	persian: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	psyduck: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 15, "moves":["scratch", "amnesia"]},
			{"generation": 2, "level": 5, "moves":["scratch", "tailwhip", "petaldance"]},
			{"generation": 2, "level": 5, "moves":["scratch", "tailwhip", "triattack"]},
		],
		tier: "LC",
	},
	golduck: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	mankey: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	primeape: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	growlithe: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	arcanine: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	poliwag: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["bubble", "growth"]},
			{"generation": 2, "level": 5, "moves":["bubble", "lovelykiss"]},
			{"generation": 2, "level": 5, "moves":["bubble", "sweetkiss"]},
		],
		tier: "LC",
	},
	poliwhirl: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	poliwrath: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	politoed: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	abra: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["teleport", "foresight"]},
		],
		tier: "LC",
	},
	kadabra: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	alakazam: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	machop: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["lowkick", "leer", "falseswipe"]},
			{"generation": 2, "level": 5, "moves":["lowkick", "leer", "thrash"]},
		],
		tier: "LC",
	},
	machoke: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	machamp: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	bellsprout: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["vinewhip", "lovelykiss"]},
			{"generation": 2, "level": 5, "moves":["vinewhip", "sweetkiss"]},
		],
		tier: "LC",
	},
	weepinbell: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	victreebel: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	tentacool: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["poisonsting", "confuseray"]},
		],
		tier: "LC",
	},
	tentacruel: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	geodude: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "rapidspin"]},
		],
		tier: "LC",
	},
	graveler: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	golem: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	ponyta: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "lowkick"]},
		],
		tier: "LC",
	},
	rapidash: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 40, "moves":["ember", "firespin", "stomp", "payday"]},
		],
		tier: "NU",
	},
	slowpoke: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	slowbro: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	slowking: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	magnemite: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "agility"]},
		],
		tier: "LC",
	},
	magneton: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	farfetchd: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["batonpass", "swordsdance", "agility", "slash"]},
			{"generation": 2, "level": 5, "moves":["peck", "furycutter"]},
		],
		tier: "NU",
	},
	doduo: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["peck", "growl", "lowkick"]},
		],
		tier: "LC",
	},
	dodrio: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	seel: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["headbutt", "growl", "flail"]},
		],
		tier: "LC",
	},
	dewgong: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	grimer: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	muk: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	shellder: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	cloyster: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	gastly: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	haunter: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	gengar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	onix: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "screech", "sharpen"]},
		],
		tier: "LC",
	},
	steelix: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	drowzee: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["pound", "hypnosis", "amnesia"]},
		],
		tier: "LC",
	},
	hypno: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	krabby: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["bubble", "leer", "metalclaw"]},
		],
		tier: "LC",
	},
	kingler: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	voltorb: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "agility"]},
		],
		tier: "LC",
	},
	electrode: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	exeggcute: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["barrage", "hypnosis", "sweetscent"]},
		],
		tier: "LC",
	},
	exeggutor: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	cubone: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["growl", "tailwhip", "furyattack"]},
		],
		tier: "LC",
	},
	marowak: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	tyrogue: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "M", "moves":["tackle", "rage"]},
			{"generation": 2, "level": 5, "gender": "M", "moves":["tackle", "dizzypunch"]},
		],
		tier: "LC",
	},
	hitmonlee: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	hitmonchan: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	hitmontop: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	lickitung: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["lick", "doubleslap"]},
		],
		tier: "NU",
	},
	koffing: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	weezing: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	rhyhorn: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	rhydon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	chansey: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "F", "moves":["pound", "sweetscent"]},
		],
		tier: "UU",
	},
	blissey: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	tangela: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["constrict", "sleeppowder", "synthesis"]},
		],
		tier: "NU",
	},
	kangaskhan: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "F", "moves":["cometpunch", "feintattack"]},
		],
		tier: "BL",
	},
	horsea: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["bubble", "haze"]},
		],
		tier: "LC",
	},
	seadra: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	kingdra: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	goldeen: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["peck", "tailwhip", "swordsdance"]},
		],
		tier: "LC",
	},
	seaking: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	staryu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "harden", "twister"]},
		],
		tier: "LC",
	},
	starmie: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	mrmime: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["barrier", "mindreader"]},
		],
		tier: "NU",
	},
	scyther: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["quickattack", "leer", "sonicboom"]},
		],
		tier: "UU",
	},
	scizor: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	smoochum: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "F", "moves":["pound", "lick", "metronome"]},
			{"generation": 2, "level": 5, "gender": "F", "moves":["pound", "lick", "petaldance"]},
			{"generation": 2, "level": 5, "gender": "F", "moves":["pound", "lick", "dizzypunch"]},
		],
		tier: "LC",
	},
	jynx: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	elekid: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["quickattack", "leer", "dizzypunch"]},
			{"generation": 2, "level": 5, "moves":["quickattack", "leer", "pursuit"]},
		],
		tier: "LC",
	},
	electabuzz: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	magby: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["ember", "feintattack"]},
			{"generation": 2, "level": 5, "moves":["ember", "dizzypunch"]},
		],
		tier: "LC",
	},
	magmar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	pinsir: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["vicegrip", "rockthrow"]},
		],
		tier: "UU",
	},
	tauros: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "M", "moves":["tackle", "tailwhip", "quickattack"]},
		],
		tier: "BL",
	},
	magikarp: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 5, "moves":["dragonrage"]},
			{"generation": 2, "level": 5, "moves":["splash", "bubble"]},
			{"generation": 2, "level": 5, "moves":["splash", "reversal"]},
		],
		tier: "LC",
	},
	gyarados: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	lapras: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["watergun", "growl", "sing", "bite"]},
			{"generation": 2, "level": 5, "moves":["watergun", "growl", "sing", "futuresight"]},
		],
		tier: "BL",
	},
	ditto: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	eevee: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "shiny": true, "moves":["tackle", "tailwhip", "growth"]},
		],
		tier: "LC",
	},
	vaporeon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	jolteon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	flareon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	espeon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	umbreon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	porygon: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "shiny": true, "moves":["tackle", "conversion", "barrier"]},
		],
		tier: "LC",
	},
	porygon2: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	omanyte: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "shiny": true, "moves":["constrict", "withdraw", "rockthrow"]},
		],
		tier: "LC",
	},
	omastar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	kabuto: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "shiny": true, "moves":["scratch", "harden", "rockthrow"]},
		],
		tier: "LC",
	},
	kabutops: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	aerodactyl: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "shiny": true, "moves":["wingattack", "rockthrow"]},
		],
		tier: "BL",
	},
	snorlax: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "lovelykiss"]},
			{"generation": 2, "level": 5, "moves":["tackle", "splash"]},
			{"generation": 2, "level": 5, "moves":["tackle", "sweetkiss"]},
		],
		tier: "OU",
	},
	articuno: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 50, "shiny": true, "moves":["mist", "agility", "mindreader", "icebeam"]},
		],
		tier: "BL",
	},
	zapdos: {
		randomSet1: {
			chance: 8,
			item: ["leftovers"],
			baseMove1: "rest", baseMove2: "sleeptalk",
			fillerMoves1: ["thunderbolt", "thunderbolt", "thunder"],
			fillerMoves2: ["hiddenpowerice", "hiddenpowerice", "hiddenpowerice", "drillpeck", "drillpeck", "hiddenpowergrass", "hiddenpowerwater"],
		},
		randomSet2: {
			chance: 13,
			item: ["leftovers", "leftovers", "mintberry"],
			baseMove1: "thunderbolt", baseMove2: "rest",
			fillerMoves1: ["thunderwave", "thunderwave", "toxic", "drillpeck", "hiddenpowerice", "hiddenpowerice"],
			fillerMoves2: ["lightscreen", "reflect", "reflect", "whirlwind", "drillpeck", "hiddenpowerice", "hiddenpowerice"],
		},
		randomSet3: {
			chance: 16,
			item: ["leftovers", "leftovers", "miracleberry"],
			baseMove1: "thunderbolt", baseMove2: "drillpeck",
			fillerMoves1: ["hiddenpowerice", "hiddenpowerice", "hiddenpowerwater", "hiddenpowerwater", "hiddenpowergrass"],
			fillerMoves2: ["thunderwave", "thunderwave", "thunderwave", "toxic", "lightscreen", "reflect", "thunder", "rest"],
		},
		eventPokemon: [
			{"generation": 2, "level": 50, "shiny": true, "moves":["thunderwave", "agility", "detect", "drillpeck"]},
		],
		tier: "OU",
	},
	moltres: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 50, "shiny": true, "moves":["firespin", "agility", "endure", "flamethrower"]},
		],
		tier: "BL",
	},
	dratini: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["wrap", "leer", "hydropump"]},
			{"generation": 2, "level": 15, "moves":["wrap", "thunder", "twister", "extremespeed"]},
		],
		tier: "LC",
	},
	dragonair: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	dragonite: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	mewtwo: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 70, "shiny": true, "moves":["psychup", "futuresight", "mist", "psychic"]},
		],
		tier: "Uber",
	},
	mew: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 1, "level": 5, "moves":["pound"]},
			{"generation": 2, "level": 5, "moves":["pound"]},
		],
		eventOnly: true,
		tier: "Uber",
	},
	chikorita: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "petaldance"]},
		],
		tier: "LC",
	},
	bayleef: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	meganium: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["reflect", "poisonpowder", "synthesis", "bodyslam"]},
		],
		tier: "BL",
	},
	cyndaquil: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "leer", "doubleedge"]},
		],
		tier: "LC",
	},
	quilava: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	typhlosion: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["smokescreen", "ember", "quickattack", "flamewheel"]},
		],
		tier: "BL",
	},
	totodile: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "leer", "submission"]},
		],
		tier: "LC",
	},
	croconaw: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	feraligatr: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "gender": "M", "shiny": true, "moves":["watergun", "bite", "scaryface", "slash"]},
		],
		tier: "UU",
	},
	sentret: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "defensecurl", "dizzypunch"]},
		],
		tier: "LC",
	},
	furret: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	hoothoot: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "nightshade"]},
		],
		tier: "LC",
	},
	noctowl: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	ledyba: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "barrier"]},
		],
		tier: "LC",
	},
	ledian: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	spinarak: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["poisonsting", "stringshot", "growth"]},
		],
		tier: "LC",
	},
	ariados: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	chinchou: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["bubble", "thunderwave", "supersonic", "lightscreen"]},
		],
		tier: "LC",
	},
	lanturn: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	togepi: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	togetic: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	natu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["peck", "leer", "safeguard"]},
		],
		tier: "LC",
	},
	xatu: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	mareep: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	flaaffy: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	ampharos: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	marill: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "defensecurl", "dizzypunch"]},
			{"generation": 2, "level": 5, "moves":["tackle", "defensecurl", "hydropump"]},
			{"generation": 2, "level": 5, "moves":["tackle", "defensecurl", "scaryface"]},
		],
		tier: "LC",
	},
	azumarill: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	sudowoodo: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["rockthrow", "mimic", "substitute"]},
		],
		tier: "NU",
	},
	hoppip: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["splash", "synthesis", "agility"]},
		],
		tier: "LC",
	},
	skiploom: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	jumpluff: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	aipom: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "tailwhip", "mimic"]},
		],
		tier: "NU",
	},
	sunkern: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["absorb", "growth", "splash"]},
		],
		tier: "LC",
	},
	sunflora: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	yanma: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "foresight", "steelwing"]},
			{"generation": 2, "level": 5, "moves":["tackle", "foresight", "sweetkiss"]},
		],
		tier: "NU",
	},
	wooper: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["watergun", "tailwhip", "bellydrum"]},
			{"generation": 2, "level": 5, "moves":["watergun", "tailwhip", "scaryface"]},
		],
		tier: "LC",
	},
	quagsire: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	murkrow: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["peck", "beatup"]},
		],
		tier: "NU",
	},
	misdreavus: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["growl", "hypnosis"]},
		],
		tier: "OU",
	},
	unown: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	wobbuffet: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["mirrorcoat", "safeguard", "destinybond", "mimic"]},
		],
		tier: "NU",
	},
	girafarig: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	pineco: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "protect", "substitute"]},
		],
		tier: "LC",
	},
	forretress: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	dunsparce: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["rage", "defensecurl", "furyattack"]},
			{"generation": 2, "level": 5, "moves":["rage", "defensecurl", "horndrill"]},
		],
		tier: "NU",
	},
	gligar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["earthquake", "poisonsting", "counter", "wingattack"]},
		],
		tier: "UU",
	},
	snubbull: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "scaryface", "tailwhip", "lovelykiss"]},
		],
		tier: "LC",
	},
	granbull: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	qwilfish: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "poisonsting", "doubleedge"]},
		],
		tier: "UU",
	},
	shuckle: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	heracross: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "leer", "seismictoss"]},
		],
		tier: "OU",
	},
	sneasel: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "leer", "moonlight"]},
		],
		tier: "NU",
	},
	teddiursa: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["scratch", "leer", "sweetscent"]},
		],
		tier: "LC",
	},
	ursaring: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	slugma: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	magcargo: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	swinub: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "whirlwind"]},
		],
		tier: "LC",
	},
	piloswine: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "UU",
	},
	corsola: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	remoraid: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["watergun", "amnesia"]},
			{"generation": 2, "level": 5, "moves":["watergun", "mist"]},
		],
		tier: "LC",
	},
	octillery: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NU",
	},
	delibird: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["present", "payday"]},
			{"generation": 2, "level": 5, "moves":["present", "spikes"]},
		],
		tier: "NU",
	},
	mantine: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "bubble", "gust"]},
		],
		tier: "NU",
	},
	skarmory: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["leer", "furycutter"]},
		],
		tier: "OU",
	},
	houndour: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "LC",
	},
	houndoom: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	phanpy: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "absorb"]},
			{"generation": 2, "level": 5, "moves":["tackle", "growl", "encore"]},
		],
		tier: "LC",
	},
	donphan: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	stantler: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["tackle", "safeguard"]},
		],
		tier: "NU",
	},
	smeargle: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "BL",
	},
	miltank: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "gender": "F", "moves":["tackle", "growl", "megakick"]},
		],
		tier: "OU",
	},
	raikou: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "shiny": true, "moves":["leer", "thundershock", "roar", "quickattack"]},
		],
		tier: "OU",
	},
	entei: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "shiny": true, "moves":["leer", "ember", "roar", "firespin"]},
		],
		tier: "BL",
	},
	suicune: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "shiny": true, "moves":["leer", "watergun", "roar", "gust"]},
		],
		tier: "OU",
	},
	larvitar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["bite", "leer", "rage"]},
		],
		tier: "LC",
	},
	pupitar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "NFE",
	},
	tyranitar: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		tier: "OU",
	},
	lugia: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "shiny": true, "moves":["aeroblast", "safeguard", "gust", "recover"]},
		],
		tier: "Uber",
	},
	hooh: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 40, "shiny": true, "moves":["sacredfire", "safeguard", "gust", "recover"]},
		],
		tier: "Uber",
	},
	celebi: {
		randomSet1: {
			chance: 12,
			item: ["leftovers", "berry", ""],
			baseMove1: "tackle", baseMove2: "growl",
			fillerMoves1: ["watergun", "hiddenpowerfire", "hiddenpowerfire"],
			fillerMoves2: ["hiddenpowerfire", "hiddenpowerfire", "hiddenpowergrass", "hiddenpowergrass", "thundershock"]
		},
		randomSet2: {
			chance: 16,
			item: ["charcoal"],
			baseMove1: "earthquake",
			fillerMoves1: ["psychic", "psychic", "icebeam"],
			fillerMoves2: ["recover", "reflect", "psychic", "psychic"],
			fillerMoves3: ["leer", "rockslide", "absorb", "psychic", "psychic"]
		},
		eventPokemon: [
			{"generation": 2, "level": 5, "moves":["leechseed", "confusion", "healbell", "recover"]},
		],
		eventOnly: true,
		tier: "Uber",
	},
};
