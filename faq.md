% Vanliga frågor och svar FAQ
% Peter M. Dahlgren, JMG
% 2017-06-29

Här sammanställs frågor som dykt upp från studenter under årens lopp, inklusive svar med tips på vidare läsning. Svaren fungerar som komplement till kurslitteraturen, inte ersättning.

## Grundläggande

### Vad är sambandsmått?

Sambandsmått, eller korrelationsmått, är ett mått på sambandet mellan två variabler. Det innebär att två variabler samvarierar med varandra. Till exempel samvarierar vikt och längd. Ju längre man är, desto tyngre är man.

Videor om korrelation:

- [What Is Correlation? (6 min)](https://www.youtube.com/watch?v=Ypgo4qUBt5o)
- [Statistics 101: Understanding Correlation (27 min)](https://www.youtube.com/watch?v=4EXNedimDMs)

### Vilket sambandsmått ska jag välja?

Det är variabelns skalnivå som avgör vilket sambandsmått du ska använda.

- Om båda variablerna är på nominalskalenivå: Cramérs V.
- Om båda variablerna är på ordinalskalenivå: Spearmans rho, Kendalls tau-b/tau-c.
- Om båda variablerna är på intervallskalenivå: Pearsons r.
- Om variablerna har olika skalnivåer: Utgå från den minsta skalnivån.

Om du har variablerna kön (man/kvinna) och inkomst (i kronor) har kön den minsta skalnivån. Kön är då på nominalskalenivå och inkomst på intervallskalenivå. Därmed bör du välja Cramérs V.

### Hur tolkar jag sambandsmått?

Det är ämneskunskap som framför allt bör guida tolkningen av sambandsmått. Om du saknar ämneskunskap har Cohen (1988) gett  riktlinjer för Pearsons r och Cramérs V:

- 0,10 = litet samband
- 0,30 = medelstort samband
- 0,50 = stort samband

Pearsons r varierar från -1 till +1. Cramérs V kan bara variera från 0 till 1 eftersom det är på nominalskalenivå.

Sambandsmått i samhällsvetenskap är oftast ganska små. Se bilden nedan. Den visar att det genomsnittliga samabandsmåttet är r = 0,21.

![Medeleffektstorlek r = 0,21 baserad på 25 000 studier med 8 miljoner människor över 100 år ([Richard, Bond, & Stokes-Zoota, 2003)](https://doi.org/10.1037/1089-2680.7.4.331).](images/mean-correlation.png)

### Vad är skillnaden mellan Phi och Cramérs V?

Phi kan du ignorera helt och hållet. Titta bara på Cramérs V.

Phi är ett sambandsmått som endast fungerar för korstabeller med storleken 2 x 2 med två binära variabler. Cramérs V fungerar däremot på alla storlekar av korstabeller.

### Vad är p-värden och statistisk signifikans?

P-värdet visar sannolikheten att få ett resultat som är så extremt (eller mer extremt), givet att nollhypotesen är sann. P-värdet går från 0 till 1.

Läs mer: **[P-värden och hur man tolkar dem](p-values.html)**

## SPSS

### Var hittar jag p-värdet i SPSS?

Titta i kolumnen *Approximate Significance* (*Approx. Sig.*) eller bara *Sig*.

### Hur analyserar jag en fråga som är kodad på flera variabler?

Låt säga att du har kodat en nyhetsartikel för att se vilka aktörer som förekommer i texten. Varje aktör kan då kodas så att de blir en egen variabel, exempelvis:

- Förekommer politiker? Ja=1 Nej=0
- Förekommer journalister? Ja=1 Nej=0
- Förekommer medborgare? Ja=1 Nej=0

Hur analyserar man detta med en frekvenstabell eller korstabell?

I SPSS kan du använda verktyget `Analyze` > `Tables` > `Custom Tables`. Du kan också använda verktyget `Analyze` > `Multiple Response`. Se länkarna nedan.

- [Analysis Multiple response question (dichotomies)](http://helpdeskspssabs.femplaza.nl/analysis/analysis_multiple_response_dich.htm)
- [Analysis Multiple response question (categories)](http://helpdeskspssabs.femplaza.nl/analysis/analysis_multiple_response_cat.htm)

## Vilka viktiga begrepp bör jag känna till?

- felmarginal
- hypotes
- kausalitet
- korrelation
- korstabell
	- Chi^2^
- deskriptiv statistik
	- typvärde
	- medelvärde
	- median
	- standardavvikelse
	- modalprocent
	- kvartil
	- variationsvidd
	- sambandsmått
		- Cramérs V
		- Spearmans rho
		- Kendalls tau-b/tau-c
		- Pearsons r
- normaldistribution
	- population
	- sampel
- operationalisering
	- teoretisk definition
	- operationell definition
- reliabilitet
- p-värde
	- statistisk signifikans
- validitet
	- begreppsvaliditet
	- extern validitet
	- intern validitet
	- resultatvaliditet (eller *statistisk inferensvaliditet*)
- variabel
	- beroende variabel
	- oberoende variabel
	- skalnivå

## Referenser

- Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences (2 edition)*. Hillsdale, N.J: Routledge.
- Richard, F. D., Bond, C. F., & Stokes-Zoota, J. J. (2003). [One Hundred Years of Social Psychology Quantitatively Described](https://doi.org/10.1037/1089-2680.7.4.331). *Review of General Psychology, 7*(4), 331–363.