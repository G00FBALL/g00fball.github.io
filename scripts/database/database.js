function generalData() {

	var items = getItems();
	
    function getItems() {
        return {
            FairyUpgrade1: {
                Name: "Pixie Dust Fertilizer",
                MercTemplate: "FR1",
                Cost: "50 M (5E7)",
                Effect1: "Increase the base production of Farms by +98 and reduce the building cost multiplier.",
				Effect2: "Reduces cost multiplier by 0.035; with no other reductions applying, the multiplier will be 1.115 instead of 1.15."
            },
            FairyUpgrade2: {
                Name: "Fairy Cuisine",
                MercTemplate: "FR2",
                Cost: "500 M (5E8)",
                Effect: "Increase the base production of Inns by +234 and reduce the building cost multiplier.Reduces cost multiplier by 0.03; with no other reductions applying, the multiplier will be 1.12 instead of 1.15."
            },
            FairyUpgrade3: {
                Name: "Starmetal Alloys",
                MercTemplate: "FR3",
                Cost: "5 B (5E9)",
                Effect: "Increase the base production of Blacksmiths by +580 and reduce the building cost multiplier.Reduces cost multiplier by 0.025; with no other reductions applying, the multiplier will be 1.125 instead of 1.15."
            },
            S1: {
                Name: "<b>S1</b> - For <b>Fairy</b> - Research Name: <b>Enchanting</b>",
                Cost: "750 Qag (7.5E125)",
                Effect: "Increase the production of Enchanted Fields based on mana produced. <p> Formula: round(0.75 * x ^ 0.6)%, where x is your Mana Produced (This Game) stat."
            },
			Contributors: {
				CArray: ["Dopy","Cyden","Eltro","primal cradily","ARTEZZ","somarilnos","Grazloth","hiimahotdog","mrothorr","AKL","mangafreak140"
				,"acer4321","Sas Assassin","Mysticman89","LeoC.II","Lollipop","Geno","Liraso","Magnusly","Zeckenschwarm","pseudobyte"
				,"Igorogi","Fonzoland","ivanovichkoslov","dox4242","capito27","Necrodoom","Lapare","Curunur","Tskami_ek","Sum Yung Gai"
				,"oholoko","Damxacer1","websterguy","LeoB516","CluelessWonder","Doubleshoe","Sc0rp","Heronimo2","RastlinV","Uni"
				,"chaosmarine4226","Namelessname","iam10ninjas","Kanra","myogin","Okami","Parasitez83","Dienes","apocal_88","KRIEG"
				,"Sheer","Xorious","The Homa","Chaos","Kurt-bookboy","xemima","Boffo","Luio2revenge","6000j","Yarilo","PseudonymousBosh"
				,"UndeadAbbys","Max Schradin","jonny0panic","AJZ3","Slakkarn","noonomoon","Jenetikitty","Suranis","saitenhieb","Slakkarn"
				,"MrGerman","WaitingIdly","Zange","eleganceseraph","magnanimousCynic","pkal","tangyifei","torskenn","Exsanguine"
				,"xXRochforteXx","Zyllyn","Spanosa","grelf","jabberok","Lavi04","McguyverZero","aviv","TrostNi","Zariars","toifel131"
				,"johny_blaze","ThePeon","djones0823","CheeseWitch","Ghorre","BioRules","NTWgrinder","Reknot","Freakomant","lordulster"
				,"shayner12","DainDwarf","Wlerin","xeperiset","ehyder","brc48632","WynneYilmaz","Keben","BillK14","ColdDrake13"
				,"arintayn2","Shantie","ErrolErrolson","ydc1017902176","Milkopilko","Mechaflood","Wolf415","ThatGuy","drseilzug"
				,"ash1soccer","Just1pirate","Space Troll","jgchan29","bobbert","Soulrift","MarioFanaticXV","mangaking118","Franelas"
				,"Delichtig","Anathah","KuraTheDog","Tanny","Ck","Lavi04","johnharveybc","Essigschurke","masteff","Merp"
				,"Дикий Речной Пёс","Ach3ck","Sho Phaune","Xikre","Just1pirate","Maya","Sandworm","Paah","Redd","5ku||3d","johnleprude",
				"Goholtramor","Matrix4767","GreenMJ13","Bearpaws","Palamazzi","Redd","ManDude33","JezuzLizard","heyitsdross","Fire",
				"Archmage","Proxy","lesdruides","Guy","FastHit","FedeJossa","Masterzan","Ryonir","Cromieplays","bigshawnt","Tyler",
				"RageBall","Xpt14","XenTwo","uwnim","Da Banana Man","DED SERVER","Kacper","homebrewer54","JGChan","Zeen","RebelKeithy",
				"CamoBrie","Zepto","7636kei","Kaos","Ashthar","Cromedome","Coal_CC","Ebilkill","Evengrey","Tenebricosus","Chaosmancer7",
				"Nizidramaniiyt","onianinara","Zelphh1","Synthini","Rustle Crowe","NTWgreatest","spamtraprus","CafeMaker","waterfire425",
				"btzeroes","HeinQuek","Alright","Versine","Fryguy9","raato","escalon","Onoxious","BionicFrog","Ignus","EagleAgg03",
				"Teabagger Vance","Ilya","lvl 1 crook","Seyliz","Zylon","j8ner","Antendren","SomeoneLucas","Boyo","DR","plaaosert",
				"XenosHg","oswarlan","Joa","pizza_troll","NateMcCloud","boss_mc","lesd","Technosaurus","Blackeye","cralo","Weedheter",
				"art-of-dom","Popington","Username","MythWiz_","pacmanlite","Hotspot","gvaiou","tbrown30","Glitchstorm",
				"RetroDerpSquid9","Sythen2014","Lead \"literally unreadable\" Luigi","Aaron Cook","gamemasterty","Trewq_","rhaek7",
				"fwbx529","waga baba bobo","Draven","Polibus","ukulelejongetje","q1235","kiluh","KyonLevic","Tenyasha","Altoscholto",
				"trevYT","Amirin","NeutralPotato","Vince","BuzzMarzz","Drogor","wolfsblood","blackbird","slantfer","Kroll","Dariof4",
				"furkannnO","Neutral Potato","Taxiway","aurora","Book909","solidifiedmind","StAUG","chrispi","arcanmster","Azua"],
				Format1: function() {
					return this.CArray.map(x => "<p>" + x + "</p>").join("");
				},
				Format2: function() {
					return this.CArray.map(x => "<p align=center>" + x + "</p>").join("");
				}

			}
        }
    }

    function getDatabaseText(inputstr , p1) {
        var splitstr = inputstr.split(".");
        if (splitstr.length == 1) {
            return inputstr;
        }
        return p1 === "()" ? items[splitstr[1]][splitstr[2].slice(0,-2)]() : items[splitstr[1]][splitstr[2]];
    }

    function walkText(node) {
        if (node.nodeType == 3 && node.data.includes("items.")) {
            node.parentNode.innerHTML = node.parentNode.innerHTML.replace(/items[\w\d\.]+(\(\))?/, getDatabaseText);
        }
        if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
            for (var i = 0; i < node.childNodes.length; i++) {
                walkText(node.childNodes[i]);
            }
        }
    }

    function walkResearch() {
        var list = document.querySelectorAll("area,research");
        for (var i in list) {
            if (list[i].attributes) {
                var node = list[i].attributes.research.nodeValue;
                list[i].attributes.research.nodeValue = node.replace(/items\S+/g, getDatabaseText);
            }
        }
    }
	walkText(document.body);
	walkResearch();
}
generalData();
