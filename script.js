const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}

//Pour afficher le nombre de pommes dans la facture détaillée

function AcheterSacDePommes() {
    document.querySelector("#qtePommes").textContent = ++panier.pommes;
    document.querySelector("#poidsPommes").textContent = panier.pommes * 10;
    document.querySelector("#prixPommes").textContent = panier.pommes * 13.5;
    document.querySelector("#qteTotal").textContent = panier.pommes + panier.poires + panier.prunes;
    document.querySelector("#poidsTotal").textContent = panier.pommes * 10 + panier.poires * 12 + panier.prunes * 15;
    document.querySelector("#prixTotal").textContent = panier.pommes * 13.5 + panier.poires * 20 + panier.prunes * 22;
}


    //Pour afficher le nombre de poires dans la facture détaillée
function AcheterSacDePoires()
{
    document.querySelector("#qtePoires").textContent = ++panier.poires;
    document.querySelector("#poidsPoires").textContent = panier.poires*12;
    document.querySelector("#prixPoires").textContent = panier.poires*20;
    document.querySelector("#qteTotal").textContent = panier.pommes+panier.poires+panier.prunes;
    document.querySelector("#poidsTotal").textContent = panier.pommes*10+panier.poires*12+panier.prunes*15;
    document.querySelector("#prixTotal").textContent = panier.pommes*13.5+panier.poires*20+panier.prunes*22;

}
//Pour afficher le nombre de prunes dans la facture détaillée
function AcheterSacDePrunes()
{
    document.querySelector("#qtePrunes").textContent = ++panier.prunes;
    document.querySelector("#poidsPrunes").textContent = panier.prunes*15;
    document.querySelector("#prixPrunes").textContent = panier.prunes*22;
    document.querySelector("#qteTotal").textContent = panier.pommes+panier.poires+panier.prunes;
    document.querySelector("#poidsTotal").textContent = panier.pommes*10+panier.poires*12+panier.prunes*15;
    document.querySelector("#prixTotal").textContent = panier.pommes*13.5+panier.poires*20+panier.prunes*22;


}