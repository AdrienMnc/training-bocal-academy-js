const product = {
    nom: "TV",
    prixHT: 200,
    prixTTC: 250,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro ex reiciendis corporis temporibus aperiam odio. Consequatur iusto praesentium, reiciendis laudantium vitae quis et architecto. Sed accusamus excepturi accusantium ipsam."

};
Object.defineProperty(product, "id", {
configurable: false,
enumerable: false,
writable: false,
value: 1
});

Object.defineProperty(product, "marge", {
    configurable: true,
    enumerable: false,
    get() {
        return this.prixTTC - this.prixHT;
    },
    set(val) {
        this.prixTTC = this.prixHT + val;
    }

});

Object.defineProperty(product, "ref", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: 2383794
});

//Proxy
const euro = new Proxy(product, {
    get(obj, prop) {
        if (prop === "prixTTC") {
        return obj[prop] + "€";
        }
        return obj[prop];
        },
    });

const tronc = new Proxy(product, {
    get(obj, prop) {
        if (prop === "description") {
        return obj[prop].substring(0, 50) + "...";
        }
        return obj[prop];
        },
    });

