const app = {
    nav(id, el, title) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        el.classList.add('active');
        document.getElementById('header-title').innerText = title;
    },
    buscar() {
    let input = document.getElementById('search');
    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll('.t-item');

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        if (texto.includes(filter)) {
            card.style.display = ""; // Mostra o card
        } else {
            card.style.display = "none"; // Esconde o card
        }
    });
}
};