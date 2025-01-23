if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.querySelector('.start-button').addEventListener('click', () => {
        alert('Passiamo allo step 1');
    });
}

if (window.location.pathname.endsWith('step1.html') || window.location.pathname === '/') {
    function addPanino(element) {
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra

        const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";

        const header = document.getElementById("header");
        header.style.marginBottom = "-220px";
        header.style.marginTop = "220px";

        const priceBoxStep1 = document.getElementById("price-box-step1");
        priceBoxStep1.style.display = "flex"; // Rendi visibile l'immagine sopra

        // Rimuovi overlay da altri div (se necessario)
        document.querySelectorAll('.panino').forEach(div => {
            div.classList.remove('pressed');
        });

        // Aggiungi overlay al div cliccato
        element.classList.add('pressed');
    }
}

if (window.location.pathname.endsWith('step2.html') || window.location.pathname === '/') {

    function addPanino(element) {
        c=1;
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra
        const overlayImage1 = document.getElementById("add-img1");
        overlayImage1.style.display = "none"; // Rendi visibile l'immagine sopra

        const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";


        const priceText = document.getElementById("price-box-text");
        priceText.innerHTML = "8,00€";
        


        const priceBoxStep1 = document.getElementById("price-box-step1");
        priceBoxStep1.style.display = "flex"; // Rendi visibile l'immagine sopra

        // Rimuovi overlay da altri div (se necessario)
        document.querySelectorAll('.panino').forEach(div => {
            div.classList.remove('pressed');
        });

        // Aggiungi overlay al div cliccato
        element.classList.add('pressed');
    }

}


if (window.location.pathname.endsWith('step3.html') || window.location.pathname === '/') {


    function addPanino(element) {
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra
        const overlayImage1 = document.getElementById("add-img1");
        overlayImage1.style.display = "none"; // Rendi visibile l'immagine sopra

        const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";


        const priceText = document.getElementById("price-box-text");
        priceText.innerHTML = "8,00€";
        


        const priceBoxStep1 = document.getElementById("price-box-step1");
        priceBoxStep1.style.display = "flex"; // Rendi visibile l'immagine sopra

        // Rimuovi overlay da altri div (se necessario)
        document.querySelectorAll('.panino').forEach(div => {
            div.classList.remove('pressed');
        });

        // Aggiungi overlay al div cliccato
        element.classList.add('pressed');
    }
}