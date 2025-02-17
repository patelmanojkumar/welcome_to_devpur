document.querySelectorAll('#notice-board ul li').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on a notice!');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var link = document.createElement('link');
    link.rel = 'icon';
    link.href = 'main/images/favicon.ico';
    link.type = 'image/x-icon';
    document.head.appendChild(link);
});
