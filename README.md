The code is live! https://gi5lund.github.io/gameoflife/
-KRAV:
- Du skal lave din kode med adskilt model og view - begge dele skal være et “grid”, og din model skal være et 2D array (array af arrays).
- Du skal lave koden så fleksibel som muligt, så det i princippet vil være nemt at ændre grid-størrelse.
- Du skal adskille koden i View og Model-funktioner - du må selv om du vil bruge modules, eller have det hele i samme fil.
- Du skal have én funktion til at tælle naboer - og en anden funktion til at beslutte om en celle lever eller dør baseret på antallet af naboer.
- Du skal tælle og vise antallet af generationer der er blevet vist siden programmet startede.
- Der skal være en brugerflade hvor brugeren minimum kan:
    - tømme grid’et fuldstændig for levende celler
    - tilføje tilfældige levende celler rundt omkring på grid’et (må ikke slette dem der er)
- Generationer skal beregnes automatisk, for eksempel hvert halve sekund, så brugeren ikke behøver gøre noget som helst efter at have åbnet programmet.

  koden er opdelt i model, view kontroller og script.js. den sidste importerer de andre 3 klasser og tilføjer startbetingelser width og height
  width og height styrer grid-size.
  programmet har knapper til start, stop, random seeding, og reset
  bruger har mulighed for at intaste en 'alivepercent' som herefter vil danne basis for hvor stor sandsynligheden for at cellen er levende fra start
  
