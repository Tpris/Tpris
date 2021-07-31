
function init() {
    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.getElementById('overlay');
    btnPopup.addEventListener('click', open);
    function open() {
        overlay.style.display = 'block';
    }
    var btnClose = document.getElementById('btnClose');
    btnClose.addEventListener('click', close);
    function close() {
        overlay.style.display = 'none';
    }
}