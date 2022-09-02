dans le projet p1:
tsc --init pour générer le fichier tsconfig.json
on créer le sous répertoire src dans le projet p1
on place dans p1/src le fichier f1.ts
on modifie tsconfig.json
avec 
    "rootDir": "src", 
     "outDir": "dist/js", 
--------
on lance tsc depuis p1
ca génère p1/dist/js/f1.js
-------
dans p1
node dist/js/f1.js
pour executer le code généré