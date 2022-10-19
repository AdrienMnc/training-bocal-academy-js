// function Voiture(puissance, marque) {
//     this.puissance = puissance;
//     this.roues = 4;
//     this.marque = marque;
//     this.accelerer = function() {
//     console.log("vrouuuuum");
//     };
//     }
//     let maVoiture = new Voiture(130, "Delorean");
//     console.log(maVoiture);

/**
 * 
 * @param {string} nom 
 * @param {string} prenom 
 * @param {string} email 
 * @param {string} pseudo 
 * @param {string} age 
 */

function User(nom, prenom, email, pseudo, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.pseudo = pseudo;
    this.age = age;
}

let user1 = new User("Mnc", "Adri", "monmail@ml", "bibou", 10);
let user2 = new User("jean", "francois", "mail@ml", "shes", 1039);

User.prototype.role = "visiteur";

User.prototype.enableNSFW = function(){
    if (this.age >= 18) {
        return "Vous etes majeur"
    }else {
       return  "CHILD DETECTED"
    }
}

User.prototype.randomizeName = function () {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return this.pseudo = result;
}


console.log(user1);
console.log(user1.role);
console.log(user1.enableNSFW());

