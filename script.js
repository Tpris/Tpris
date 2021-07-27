$(document).ready(function () {
    $("header ul li").hover(function () {
        $("header ul li").css('opacity', '0.4');
        $("header ul li").css('transition','0.7s');
    });
    $("header ul li").eq(0).hover(function () {
        $("header h2").text("Find out about this site and who I am");
        $("header ul li").eq(0).css('opacity', '1');
    });
    $("header ul li").eq(1).hover(function () {
        $("header h2").text("Come see my CV");
        $("header ul li").eq(1).css('opacity', '1');
    });
    $("header ul li").eq(2).hover(function () {
        $("header h2").text("Several of my projects are available on GitHub");
        $("header ul li").eq(2).css('opacity', '1');
    });
    $("header ul li").eq(3).hover(function () {
        $("header h2").text("Games are available");
        $("header ul li").eq(3).css('opacity', '1');
    });
    $("header ul li").eq(4).hover(function () {
        $("header h2").text("Come see the books I read");
        $("header ul li").eq(4).css('opacity', '1');
    });
    counter = 0;
    setInterval(bip, 3000);
})



function bip() {
    $("header ul li").eq(counter).trigger('mouseenter')
    counter++
    if (counter == 5) counter = 0
}
