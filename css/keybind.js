document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'b') {
        event.preventDefault();
        window.open('donut.html', '', 'width=640,height=480');
    }
});
