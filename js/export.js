const exporter = {
    pdf() {
        const ref = document.getElementById('ref').value || 'estudo';
        html2pdf().set({
            margin: 10, filename: `EDB_${ref}.pdf`,
            html2canvas: { scale: 2, backgroundColor: '#000' },
            jsPDF: { unit: 'mm', format: 'a4' }
        }).from(document.getElementById('pdf-area')).save();
    },
    txt() {
        const ref = document.getElementById('ref').value || 'estudo';
        const t = `ESTUDO: ${ref}\n\nOBS:\n${document.getElementById('obs').value}\n\nINT:\n${document.getElementById('int').value}\n\nFER:\n${document.getElementById('fer').value}\n\nAPL:\n${document.getElementById('apl').value}`;
        const b = new Blob([t], {type:'text/plain'});
        const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `EDB_${ref}.txt`; a.click();
    },

    downloadApostila() {
    // 1. O caminho deve ser IGUAL ao nome do arquivo na pasta
    const caminhoArquivo = 'assets/intensivo-edb.pdf'; 
    
    const link = document.createElement('a');
    link.href = caminhoArquivo;
    
    // 2. O atributo download define o nome que o usuário verá ao baixar
    link.download = 'Intensivo_Como_Estudar_a_Biblia.pdf';
    
    // 3. Procedimento de segurança: anexa, clica e remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
};