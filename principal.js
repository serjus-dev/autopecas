
var banners = ["SÓ 100,99! ", "COMPRE 1 E LEVE 2!"];

var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual+1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner,1000);

