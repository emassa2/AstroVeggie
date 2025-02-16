function addPanino(element) {
    // Mostra l'immagine di overlay
    const overlayImage = document.getElementById("add-img");
    overlayImage.style.display = "block";
  
    // Rimuovi overlay da altri div (se necessario)
    document.querySelectorAll('.panino').forEach(div => {
      div.classList.remove('pressed');
    });
  
    // Aggiungi overlay al div cliccato
    element.classList.add('pressed');
  }
  