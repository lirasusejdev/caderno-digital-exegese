const storage = {
    salvarEstudo() {
        const dados = {
            ref: document.getElementById('ref').value || 'Sem Título',
            obs: document.getElementById('obs').value,
            int: document.getElementById('int').value,
            fer: document.getElementById('fer').value,
            apl: document.getElementById('apl').value,
            data: new Date().toLocaleString()
        };
        let hist = JSON.parse(localStorage.getItem('edb_data') || '[]');
        hist.push(dados);
        localStorage.setItem('edb_data', JSON.stringify(hist));
        this.renderizarHistórico();
        alert("Estudo guardado!");
    },
    renderizarHistórico() {
        const hist = JSON.parse(localStorage.getItem('edb_data') || '[]');
        const html = hist.map((h, i) => `
            <div class="card" onclick="storage.carregarEstudo(${i})">
                <b>${h.ref}</b> <br> <small>${h.data}</small>
            </div>
        `).reverse().join('');
        document.getElementById('lista-hist').innerHTML = html || "Vazio";
    },
    carregarEstudo(index) {
        const hist = JSON.parse(localStorage.getItem('edb_data') || '[]');
        const e = hist[index];
        document.getElementById('ref').value = e.ref;
        document.getElementById('obs').value = e.obs;
        document.getElementById('int').value = e.int;
        document.getElementById('fer').value = e.fer;
        document.getElementById('apl').value = e.apl;
        app.switchPage('p-caderno', document.querySelector('.nav-item'), 'Caderno');
    }
};
window.onload = () => storage.renderizarHistórico();