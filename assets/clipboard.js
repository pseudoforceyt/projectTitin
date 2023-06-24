new ClipboardJS('span#GCR');
var clipboard = new ClipboardJS('span#GCR');
var getsnack = document.getElementById("snackbar");

clipboard.on('success', function(e) {
    getsnack.classList.add('show');
    setTimeout(function(){ getsnack.classList.remove('show'); }, 2500);
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});