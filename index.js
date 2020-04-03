const TreeGrove = require('./groves/tree-grove.js');

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)


// next year
let yearPassed = Math.round(Math.random() * 50 + 1);
for (let i = 1; i <= yearPassed; i++) {
  grove.nextYear();

  console.log(`\n\n=================================== SUMMARY =================================== `);
  console.log(`YEAR PASSED: `, i);

  // show trees
  grove.showTrees();

  console.log(`\n`);

  // show trees ages
  grove.showAges();

  console.log(`\n`);

  // show trees
  grove.showMatureTrees();

  console.log(`\n`);

  // show trees
  grove.showDeadTrees(i);

  console.log(`============================== ISMAIL ASH SHIDIQ ==============================\n\n`);
  if (i < yearPassed) console.log(`================= NEXT YEAR =================`);
  if (i === yearPassed) console.log(`===================== END =====================\n\n`);
}
