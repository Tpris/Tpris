$(document).ready(function () {

    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.getElementById('overlay');
    btnPopup.addEventListener('click', open);
    function open() {
        overlay.style.display = 'block';
    }

    var btnClose = document.getElementById('btnClose');
    function close() {
        overlay.style.display='none';
    }
    btnClose.addEventListener('click',close)
    
    var nav = document.getElementById('blocTexte');
    var openn = true;
    overlay.addEventListener('click',closeout);
    function closeout() {
        nav.addEventListener('click',function () {openn = true;})
        if (!openn) overlay.style.display='none';
        openn = false;
    }
    

    $("#bande ul li").hover(function () {
        $("#bande ul li").css('opacity', '0.4');
        $("#bande ul li").css('transition', '0.7s');
    });
    $("#bande ul li").eq(0).hover(function () {
        $("#bande h2").text("Venez découvrir ce site et qui je suis");
        $("#bande ul li").eq(0).css('opacity', '1');
    });
    $("#bande ul li").eq(1).hover(function () {
        $("#bande h2").text("Venez consulter mon CV");
        $("#bande ul li").eq(1).css('opacity', '1');
    });
    $("#bande ul li").eq(2).hover(function () {
        $("#bande h2").text("Plusieurs de mes projets sont disponibles sur GitHub");
        $("#bande ul li").eq(2).css('opacity', '1');
    });
    $("#bande ul li").eq(3).hover(function () {
        $("#bande h2").text("Des jeux sont disponibles");
        $("#bande ul li").eq(3).css('opacity', '1');
    });
    $("#bande ul li").eq(4).hover(function () {
        $("#bande h2").text("Venez voir les livres que je lis");
        $("#bande ul li").eq(4).css('opacity', '1');
    });
    counter = 0;
    setInterval(bip, 3000);
})



function bip() {
    $("header ul li").eq(counter).trigger('mouseenter')
    counter++
    if (counter == 5) counter = 0
}

