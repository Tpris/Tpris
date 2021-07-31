$(document).ready(function () {

    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.getElementById('overlay');
    btnPopup.addEventListener('click', open);
    function open() {
        overlay.style.display = 'block';
    }
    var btnClose = document.getElementById('btnClose');
    btnClose.addEventListener('click',close);
    function close() {
        overlay.style.display='none';
    }

    $("#bande ul li").hover(function () {
        $("#bande ul li").css('opacity', '0.4');
        $("#bande ul li").css('transition', '0.7s');
    });
    $("#bande ul li").eq(0).hover(function () {
        $("#bande h2").text("Find out about this site and who I am");
        $("#bande ul li").eq(0).css('opacity', '1');
    });
    $("#bande ul li").eq(1).hover(function () {
        $("#bande h2").text("Come see my CV");
        $("#bande ul li").eq(1).css('opacity', '1');
    });
    $("#bande ul li").eq(2).hover(function () {
        $("#bande h2").text("Several of my projects are available on GitHub");
        $("#bande ul li").eq(2).css('opacity', '1');
    });
    $("#bande ul li").eq(3).hover(function () {
        $("#bande h2").text("Games are available");
        $("#bande ul li").eq(3).css('opacity', '1');
    });
    $("#bande ul li").eq(4).hover(function () {
        $("#bande h2").text("Come see the books I read");
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

