"use strict";
class ProduitV2 {
    constructor(ref, label = "?", prix = 0.0) {
        this.ref = ref;
        this.label = label;
        this.prix = prix;
    }
}
let pa = new ProduitV2(1, "cahier", 3.6);
console.log("pa=" + JSON.stringify(pa));
let pb = new ProduitV2("r234", "cahier", 3.6);
console.log("pb=" + JSON.stringify(pb));
//# sourceMappingURL=f6.js.map