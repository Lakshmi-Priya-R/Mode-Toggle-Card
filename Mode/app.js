
function toggleMode() {
    var card = document.getElementById('card');
    var button = document.getElementById('toggleButton');

    if (card.classList.contains('light')) {
        card.classList.remove('light');
        card.classList.add('dark');
        button.classList.remove('light');
        button.classList.add('dark');
        button.textContent = "Mode";
    } else {
        card.classList.remove('dark');
        card.classList.add('light');
        button.classList.remove('dark');
        button.classList.add('light');
        button.textContent = "Mode";
    }
}