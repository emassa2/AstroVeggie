if (window.location.pathname.endsWith('18_astrokids-step-1.html') || window.location.pathname === '/') {
    function addPanino(element) {
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra

        /*const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";*/

        const header = document.getElementById("header");
        header.style.marginBottom = "-120px";
        header.style.marginTop = "120px";

        const priceBoxStep1 = document.getElementById("price-box-step1");
        priceBoxStep1.style.display = "flex"; // Rendi visibile l'immagine sopra

        // Rimuovi overlay da altri div (se necessario)
        document.querySelectorAll('.panino').forEach(div => {
            div.classList.remove('pressed');
        });


        
        const priceText = document.getElementById("price-box-text");
        priceText.innerHTML = "5,00€";

        // Aggiungi overlay al div cliccato
        element.classList.add('pressed');
    }
}

if (window.location.pathname.endsWith('19_astrokids-step-2.html') || window.location.pathname === '/') {

    function addPanino(element) {
        c=1;
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra
        const overlayImage1 = document.getElementById("add-img1");
        overlayImage1.style.display = "none"; // Rendi visibile l'immagine sopra

        /*const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";*/


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


if (window.location.pathname.endsWith('20_astrokids-step-3.html') || window.location.pathname === '/') {


    function addPanino(element) {
        const overlayImage = document.getElementById("add-img");
        overlayImage.style.display = "block"; // Rendi visibile l'immagine sopra
        const overlayImage1 = document.getElementById("add-img1");
        overlayImage1.style.display = "none"; // Rendi visibile l'immagine sopra

        /*const cartImage = document.getElementById("cart-img");
        cartImage.style.marginRight = "-150px";*/


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