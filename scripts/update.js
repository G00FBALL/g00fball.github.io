Main Database (has functions to assist with replacing, but not too important here)
Main idea: Relevant names to information, special functions can be implemented if necessary for special cases

function getItems() {
        return {
            FairyUpgrade1: {
                Name: "Pixie Dust Fertilizer",
                MercTemplate: "FR1",
                Cost: "50 M (5E7)",
                Effect: "Increase the base production of Farms by +98 and reduce the building cost multiplier.Reduces cost multiplier by 0.035; with no other reductions applying, the multiplier will be 1.115 instead of 1.15."
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
				CArray: [ (insert big array here) ],
				Format1: function() {
					return this.CArray.map(x => "<p>" + x + "</p>").join("");
				},
				Format2: function() {
					return this.CArray.map(x => "<p align=center>" + x + "</p>").join("");
				}

			}
        }

-------------------------------------------------------------------------------------------------------------
Fairy Page

<p><b><img src="http://musicfamily.org/realm/Factions/picks/PixieDustFertilizerFactionUpgrade.png" alt="Smiley face" align="middle"> items.FairyUpgrade1.Name</b></p>
<p><b>Cost</b>: items.FairyUpgrade1.Cost</p>
<p><b>Effect</b>: items.FairyUpgrade1.Effect</p>
<br/>
<p><b><img src="http://musicfamily.org/realm/Factions/picks/FairyCuisineFactionUpgrade.png" alt="Smiley face" align="middle"> items.FairyUpgrade2.Name</b></p>
<p><b>Cost</b>: items.FairyUpgrade2.Cost</p>
<p><b>Effect</b>: items.FairyUpgrade2.Effect</p>
<br/>
<p><b><img src="http://musicfamily.org/realm/Factions/picks/StarmetalAlloysFactionUpgrade.png" alt="Smiley face" align="middle"> items.FairyUpgrade3.Name</b></p>
<p><b>Cost</b>: items.FairyUpgrade3.Cost</p>
<p><b>Effect</b>: items.FairyUpgrade3.Effect</p>
<hr>

--------------------------------------------------------------------------------------------------------------
S1 in research tree

<area target="" research="items.S1.Name <p> Cost: items.S1.Cost <p> Effect: items.S1.Effect" coords="30,109,75,155" shape="rect">

---------------
Contributor List is now simply one line (Format1 for /contributors, format2 for scrolling at footer)
items.Contributors.Format1()
