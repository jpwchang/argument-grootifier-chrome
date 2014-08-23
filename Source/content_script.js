walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(txtNode) 
{
	var wordsToReplace = [
		"faggot", "STFU", "shut the fuck up", "fuck you", "fuck[a-z]*", "whore", "moron", "you're a moron",
		"suck dick", "dick[a-z]*", "suck cock", "cock", "retarded", "you're fat", "bastard", "moronic",
		"QQ more", "jerk", "your mom", "yo mom", "yo mama", "your mama", "Hitler", "You're a Nazi",
		"Nazi", "left-wing", "right-wing", "twits", "twit", "eat shit", "shit[a-z]*", "bitchy",
		"ass", "asshole", "[0-9]+ year old", "the gays", "you're gay", "shut up", "pissy", "bitch please",
		"alcoholic", "amateur", "analphabet", "anarchist", "ape", "arse", "arselicker", 
		"ass", "ass master", "ass-kisser", "ass-nugget", "ass-wipe", "asshole", "baby", 
		"backwoodsman", "balls", "bandit", "barbar", "bastard", "bastard", "beavis", 
		"beginner", "biest", "bitch", "blubber gut", "bogeyman", "booby", "boozer", 
		"bozo", "brain-fart", "brainless", "brainy", "brontosaurus", "brownie", "bugger", 
		"bugger, silly", "bulloks", "bum", "bum-fucker", "butt", "buttfucker", "butthead", 
		"callboy", "callgirl", "camel", "cannibal", "cave man", "chaavanist", "chaot", 
		"chauvi", "cheater", "chicken", "children fucker", "clit", "clown", "cock", 
		"cock master", "cock up", "cockboy", "cockfucker", "cockroach", "coky", "con merchant", 
		"con-man", "country bumpkin", "cow", "creep", "creep", "cretin", "criminal", 
		"cunt", "cunt sucker", "daywalker", "deathlord", "derr brain", "desperado", "devil", "dick", 
		"dickhead", "dinosaur", "disguesting packet", "diz brain", "do-do", "dog", "dog, dirty", 
		"dogshit", "donkey", "drakula", "dreamer", "drinker", "drunkard", "dufus", 
		"dulles", "dumbo", "dummy", "dumpy", "egoist", "eunuch", "exhibitionist", 
		"fake", "fanny", "farmer", "fart", "fart, shitty", "fatso", "fellow", 
		"fibber", "fish", "fixer", "flake", "flash harry", "freak", "frog", 
		"fuck", "fuck face", "fuck head", "fuck noggin", "fucker", "gangster", "ghost", 
		"goose", "gorilla", "grouch", "grumpy", "head, fat", "hell dog", "hillbilly", 
		"hippie", "homo", "homosexual", "hooligan", "horse fucker", "idiot", "ignoramus", 
		"jack-ass", "jerk", "joker", "junkey", "killer", "lard face", "latchkey child", 
		"learner", "liar", "looser", "lucky", "lumpy", "luzifer", "macho", 
		"macker", "man, old", "minx", "missing link", "monkey", "monster", "motherfucker", 
		"mucky pub", "mutant", "neanderthal", "nerfhearder", "nobody", "nurd", "nuts, numb", 
		"oddball", "oger", "oil dick", "old fart", "orang-uthan", "original", "outlaw", 
		"pack", "pain in the ass", "pavian", "pencil dick", "pervert", "pig", "piggy-wiggy", 
		"pirate", "pornofreak", "prick", "prolet", "queer", "querulant", "rat", 
		"rat-fink", "reject", "retard", "riff-raff", "ripper", "roboter", "rowdy", 
		"rufian", "sack", "sadist", "saprophyt", "satan", "scarab", "schfincter", 
		"shark", "shit eater", "shithead", "simulant", "skunk", "skuz bag", "slave", 
		"sleeze", "sleeze bag", "slimer", "slimy bastard", "small pricked", "snail", "snake", 
		"snob", "snot", "son of a bitch ", "square", "stinker", "stripper", "stunk", 
		"swindler", "swine", "teletubby", "thief", "toilett cleaner", "tussi", "typ", 
		"unlike", "vampir", "vandale", "varmit", "wallflower", "wanker", "wanker, bloody", 
		"weeze bag", "whore", "weirdo", "wino", "witch", "womanizer", "woody allen", 
		"worm", "xena", "xenophebe", "xenophobe", "xxx watcher", "yak", "yeti" 
	];
	var groot = [
		"I AM GROOT", "I Am Groot", "I Am Groot!", "I AM GROOT!", "I Am Groot?"
	];
	var val = txtNode.nodeValue;

	// Things in capslock are probably rage as well.
	var caps = val.match(/[A-Z][A-Z]+/g);
	var count = caps? caps.length : 0;
	for (var j = 0; j < count; ++j)
	{
		var randIndex = Math.floor(Math.random() * groot.length);
		val = val.replace(/\b(?!AM|GROOT)[A-Z][A-Z]+\b/, groot[randIndex]);
	}

	for (var i = 0; i < wordsToReplace.length; ++i)
	{
		var regex = new RegExp('\\b' + wordsToReplace[i] + '\\b', 'gi');
		val = val.replace(regex, groot[i % groot.length]);

	}

	txtNode.nodeValue = val;
}


