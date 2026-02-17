const app = {
    switchPage(id, el, title) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        el.classList.add('active');
        document.getElementById('header-title').innerText = title;
        window.scrollTo(0,0);
    },
    limparCampos() {
        if(confirm("Deseja limpar o caderno?")) {
            document.querySelectorAll('textarea, input').forEach(i => i.value = "");
        }
    }
};