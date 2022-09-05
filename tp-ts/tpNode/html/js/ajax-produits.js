
window.onload = function(){

    let eltBtnProd = document.getElementById("btnProd");
    let eltIdProd = document.getElementById("idProd");
    
    eltBtnProd.addEventListener("click",function (evt){
        let idProd = eltIdProd.value ;
        console.log("idProd:" +idProd );
        let url = "../api-prod/produit/" + idProd ;
        makeAjaxGetRequest(url,callbackProduitSucces,callbackError);
    });

}

function callbackProduitSucces(responseData){
    //console.log("Succes:"+responseData + " " + typeof responseData);
    let produit = JSON.parse(responseData);
    let eltTBody = document.getElementById("tBodyProd");
    tBodyProd.innerHTML="" ; //vider eventuel ancien contenu de <tbody id="tBodyProd">
   
        let  newRow = eltTBody.insertRow(-1) ; //new <tr> and .appendChild()
        let newCellCode = newRow.insertCell(0);  //colonne 1 (code)
            newCellCode.innerText = produit.id;
        let newCellNom = newRow.insertCell(1);  //colonne 2 (nom)
            newCellNom.innerText = produit.label;
        let newCellPrix = newRow.insertCell(2);  //colonne 3 (prix)
            newCellPrix.innerText = produit.prix;

}

function callbackError(responseData){
    console.log("ERROR:"+responseData);
    let tBodyProd = document.getElementById("tBodyProd");
    tBodyProd.innerHTML="" ; //vider eventuel ancien contenu de <tbody id="tBodyProd">
}