let maxPokedex = 151,minPokedex = 0;
let arrayUrlImage = [];
let object = 'https://pokeapi.co/api/v2/pokemon?offset='+minPokedex+'&limit='+maxPokedex;
var divAtual = document.getElementById("poke");

main();

function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}

function main(){
    data = fazGet(object);
    pokemons = JSON.parse(data);

    let y = 0;
    let strNimber = minPokedex-maxPokedex;
    if(strNimber < 0){strNimber*=-1}
    console.log(strNimber);

    for(let i = 0; i< strNimber;i++){
        arrayUrlImage[y] = pokemons.results[y].url;
        request_single = fazGet(arrayUrlImage[y]);
        image_single = JSON.parse(request_single);
        divAtual.innerHTML += '<img class="poke_single" src="'+image_single.sprites.front_default+'" />';
        y+=1;
    }
    
}

//Click
$(function () {

    clickMenu();
    function clickMenu() {
        $('.regioes a').click(function () {
            $('.regioes li').removeClass('r_single');
            $('.regioes a[ref_sys='+$(this).attr('ref_sys')+']').parent().addClass('r_single');

            $(divAtual).children().remove();
            trocaGen($(this).attr('ref_sys'));
            return false;
        })
    }
    
})

//troca gen
function trocaGen(gen){

    if(gen == 1){
        maxPokedex = 151;
        minPokedex = 0;
    }else if(gen == 2){
        maxPokedex = 251;
        minPokedex = 151;
    }else if(gen == 3){
        maxPokedex = 386;
        minPokedex = 251;
    }else if(gen == 4){
        maxPokedex = 493;
        minPokedex = 386;
    }else if(gen == 5){
        maxPokedex = 649;
        minPokedex = 493;
    }else if(gen == 6){
        maxPokedex = 721;
        minPokedex = 649;
    }else if(gen == 7){
        maxPokedex = 809;
        minPokedex = 721;
    }

    object = 'https://pokeapi.co/api/v2/pokemon?offset='+minPokedex+'&limit='+maxPokedex;
    main();
}