const exporter = {
    gerarPDF() {
        const element = document.getElementById('pdf-area');
        const ref = document.getElementById('ref').value || 'estudo';
        html2pdf().set({
            margin: 10, filename: `EDB_${ref}.pdf`,
            html2canvas: { scale: 2, backgroundColor: '#000' },
            jsPDF: { unit: 'mm', format: 'a4' }
        }).from(element).save();
    },
    gerarTXT() {
        const ref = document.getElementById('ref').value || 'estudo';
        const texto = `ESTUDO: ${ref}\n\nOBS:\n${document.getElementById('obs').value}...`;
        const blob = new Blob([texto], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `EDB_${ref}.txt`;
        a.click();
    }
};