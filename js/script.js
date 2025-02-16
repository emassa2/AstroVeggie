function addPanino(element) {

    // Rimuovi overlay da altri div
    document.querySelectorAll('.panino').forEach(div => {
        div.classList.remove('pressed');
    });

    // Aggiungi overlay al div cliccato
    element.classList.add('pressed');
}
