
function init() {
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
}