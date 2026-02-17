const app = {
    nav(id, el, title) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        el.classList.add('active');
        document.getElementById('header-title').innerText = title;
    },
    buscar() {
        let q = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.t-item').forEach(i => {
            i.style.display = i.innerText.toLowerCase().includes(q) ? 'block' : 'none';
        });
    }
};