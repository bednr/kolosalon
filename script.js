let cena=0;
let nabidka=0;
function cenaKol() {
    cena = 0;
    if (document.querySelector('#horske').checked) {
        cena += parseInt(document.querySelector('#horske').value) * parseInt(document.querySelector('#horskeNum').value);
    }
    if (document.querySelector('#detske').checked) {
        cena += parseInt(document.querySelector('#detske').value) * parseInt(document.querySelector('#detskeNum').value);
    }
    if (document.querySelector('#silnicni').checked) {
        cena += parseInt(document.querySelector('#silnicni').value) * parseInt(document.querySelector('#silnicniNum').value);
    }
    if (document.querySelector('#gravel').checked) {
        cena += parseInt(document.querySelector('#gravel').value) * parseInt(document.querySelector('#gravelNum').value);
    }
    let delka;
    delka = parseInt(document.querySelector('#delkaPujc').value);
    cena = cena * delka;

    let nosic;
    nosic = (document.form1.radio1.value);
    cena += cena * nosic;

    // document.querySelector('#suma').value = cena;
    document.querySelector('.suma').innerHTML = `Celkem: ${cena}`;


}
function overit(){
    nabidka=document.querySelector('#overNabidku').value;
    if(nabidka>=cena){
        document.querySelector('#isOK').innerHTML="Platná nabídka"
    }
    else{
        document.querySelector('#isOK').innerHTML="Musíte přihodit"
    }
}
function checkMail(){
    let mailAddress;
    mailAddress=document.querySelector('#Email').value.includes('@');
    if(!mailAddress){
        window.alert("Zadejte platny e-mail");
    }
}
