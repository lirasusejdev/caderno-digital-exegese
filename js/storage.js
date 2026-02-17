const storage = {
    // 1. SALVAR ESTUDO
    salvar() {
        const d = {
            ref: document.getElementById('ref').value || 'Sem Título',
            obs: document.getElementById('obs').value,
            int: document.getElementById('int').value,
            fer: document.getElementById('fer').value,
            apl: document.getElementById('apl').value,
            data: new Date().toLocaleString('pt-BR')
        };

        // Salva no LocalStorage
        let h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        h.push(d);
        localStorage.setItem('edb_v5', JSON.stringify(h));

        // Atualiza a lista visualmente
        this.render();
        
        alert("Estudo registrado com sucesso!");
    },

    // 2. RENDERIZAR LISTA (Aqui é onde garantimos que o histórico aparece)
    render() {
        const h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        const listaDiv = document.getElementById('lista-hist');
        
        if (!listaDiv) return;

        if (h.length === 0) {
            listaDiv.innerHTML = '<p style="padding:20px; color:var(--muted)">Nenhum estudo registrado ainda.</p>';
            return;
        }

        // Criamos o HTML dos cards (do mais recente para o mais antigo)
        listaDiv.innerHTML = h.map((e, i) => `
            <div class="card" onclick="storage.load(${i})" style="cursor:pointer">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <b>${e.ref}</b>
                    <span style="font-size:10px; color:var(--muted)">${e.data}</span>
                </div>
                <small style="color:var(--muted); display:block; margin-top:5px;">
                    ${e.obs.substring(0, 40)}${e.obs.length > 40 ? '...' : ''}
                </small>
            </div>
        `).reverse().join('');
    },

    // 3. CARREGAR ESTUDO ANTIGO
    load(i) {
        const h = JSON.parse(localStorage.getItem('edb_v5') || '[]');
        const e = h[i];

        if(confirm(`Deseja carregar o estudo "${e.ref}"? Isso substituirá o texto atual do caderno.`)) {
            document.getElementById('ref').value = e.ref;
            document.getElementById('obs').value = e.obs;
            document.getElementById('int').value = e.int;
            document.getElementById('fer').value = e.fer;
            document.getElementById('apl').value = e.apl;
            
            // Volta para a aba de anotação automaticamente
            app.nav('p-caderno', document.querySelector('.nav-item'), 'Caderno');
        }
    },

    // 4. BUSCA GLOBAL NO HISTÓRICO
    buscarNoHistorico() {
        const filter = document.getElementById('search-hist').value.toLowerCase();
        const cards = document.getElementById('lista-hist').querySelectorAll('.card');

        cards.forEach(card => {
            const texto = card.innerText.toLowerCase();
            card.style.display = texto.includes(filter) ? "" : "none";
        });
    }
};

// ESSENCIAL: Carrega o histórico assim que a página abre
window.addEventListener('DOMContentLoaded', () => {
    storage.render();
});