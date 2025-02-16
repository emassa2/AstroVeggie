function addPanino(element) {
    // Non modificare il prezzo
    // const priceText = document.getElementById("price-box-text");
    // priceText.innerHTML = "5,00€"; // Rimuovi o commenta questa riga

    // Non mostrare l'immagine addizionale
    const overlayImage = document.getElementById("add-img");
    overlayImage.style.display = "none";  // Nascondi invece di mostrare

    // Rimuovi overlay da altri div
    document.querySelectorAll('.panino').forEach(div => {
        div.classList.remove('pressed');
    });

    // Aggiungi overlay al div cliccato
    element.classList.add('pressed');
}
