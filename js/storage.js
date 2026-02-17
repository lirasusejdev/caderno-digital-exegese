const storage = {
    salvar() {
        const d = {
            ref: document.getElementById('ref').value || 'Sem Título',
            obs: document.getElementById('obs').value,
            int: document.getElementById('int').value,
            fer: document.getElementById('fer').value,
            apl: document.getElementById('apl').value,
            data: new Date().toLocaleString()
        };
        let h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        h.push(d);
        localStorage.setItem('edb_v5', JSON.stringify(h));
        this.render();
        alert("Salvo!");
    },
    render() {
        const h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        document.getElementById('lista-hist').innerHTML = h.map((e, i) => `
            <div class="card" onclick="storage.load(${i})">
                <b>${e.ref}</b><br><small>${e.data}</small>
            </div>
        `).reverse().join('') || "Nenhum estudo.";
    },
    load(i) {
        const h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        const e = h[i];
        document.getElementById('ref').value = e.ref;
        document.getElementById('obs').value = e.obs;
        document.getElementById('int').value = e.int;
        document.getElementById('fer').value = e.fer;
        document.getElementById('apl').value = e.apl;
        app.nav('p-caderno', document.querySelector('.nav-item'), 'Caderno');
    }
};
window.onload = () => storage.render();