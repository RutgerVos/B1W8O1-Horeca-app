//prijzen
const bier = 1.95;
const wijn = 3;
const fris = 2.50;
const bitterballen = 1.80;
//function globale
Bestellingkiezen();


function Bestellingkiezen() 
{
	var bestelling = prompt ('Welke bestelling wilt u toevoegen?(drankje of snack of stop: als je niet meer bestellen)');
	if (bestelling == 'snack') 
	{
		Bitterballenkeuzen();
	}
	if (bestelling == 'drankje') 
	{
		var drank = prompt ('Welk drankje wil je bier, wijn of fris');
		var hoeveelD = prompt ('hoeveel wil je er?');
		if (hoeveelD == '') { hoeveelD=0}
		if (drank == 'bier') 
		{
			document.write (bier*hoeveelD + 'bierTotaal<br>');
		}
		if (drank == 'wijn') 
		{
			document.write (wijn*hoeveelD + 'wijnTotaal<br>');
		}
		if (drank == 'fris') 
		{
			document.write (fris*hoeveelD + 'frisTotaal<br>');
		}
		var totaaldrankje = (bier*hoeveelD + fris*hoeveelD + wijn*hoeveelD);
		var anderD   = prompt ('wil je nog iets anders bestellen?');
		if (anderD == 'ja') 
		{
			Bitterballenkeuzen();
			if (anderD == 'nee') 
			{
				document.write (totaaldrankje + 'Totaaldrankje<br>');
			}
		}
	}
}
function Bitterballenkeuzen() 
{
	var Bitterballen = prompt ('wil je bitterballen?');
	if (Bitterballen == 'ja') 
	{
		var hoeveelB = prompt('hoeveel wil je er?(8 of 16)');
		if (hoeveelB == '') { hoeveelD=0}
		var portie = prompt('hoeveel van de portie wil je?')
		if (hoeveelB == '') { hoeveelD=0}
		document.write (bitterballen*hoeveelB*portie + 'bitterballentotaal<br>');
		var meer = prompt('wil je nog iets anders bestellen?')
		
	}
	Bestellingkiezen();
}