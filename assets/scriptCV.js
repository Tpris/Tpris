
function init() {
    var btnPopup = document.getElementById('btnPopup');
    var overlay = document.getElementById('overlay');
    btnPopup.addEventListener('click', open);


    var btnClose = document.getElementById('btnClose');
    btnClose.addEventListener('click', close)
/*
    var nav = document.getElementById('blocTexte');
    var openn = true;
    overlay.addEventListener('click', closeout);
    function closeout() {
        nav.addEventListener('click', function () { openn = true; })
        if (!openn) overlay.style.display = 'none';
        openn = false;
    }*/

    var btnChat = document.getElementById('btnChat');
    var overlay2 = document.getElementById('overlayy');
    function openChat() {
        overlay2.style.display = 'block';   
    }
    btnChat.addEventListener('click', openChat);


    var btnCloseChat = document.getElementById('closeChat');
    function closeChat() {
        overlay2.style.display = 'none';
    }
    btnCloseChat.addEventListener('click', closeChat)
}

function open() {
    overlay.style.display = 'block';
}
function close() {
    overlay.style.display = 'none';
}

