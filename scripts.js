document.querySelectorAll('#notice-board ul li').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on a notice!');
    });
});
