document.addEventListener("DOMContentLoaded", function () {
    let carrusel = document.querySelector(".carrusel");
    let player = document.getElementById("player");
    let startButton = document.getElementById("startButton");
    let intro = document.getElementById("intro");
    let carruselContainer = document.getElementById("carruselContainer");

    let canciones = [
        "musica/Yoko-VEED.mp3",
        "musica/Algo Magico-VEED.mp3",
        "musica/Travesia-VEED.mp3",
        "musica/Por esos Ojos-VEED.mp3",
        "musica/Perfumito Nuevo-VEED.mp3",
        "musica/DtMF-VEED.mp3",
    ];

    let indice = 0;
    let slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        console.error("No se encontraron imágenes en el carrusel.");
        return;
    }

    startButton.addEventListener("click", function () {
        intro.style.display = "none";
        carruselContainer.style.display = "block";
        player.volume = 0.5;
        cambiarSlide();
    });

    function cambiarSlide() {
        carrusel.style.transform = `translateX(-${indice * 100}%)`;

        let currentSlide = slides[indice];
        let video = currentSlide.querySelector("video");

        if (video) {
            player.pause(); // Pausar música si hay video
            video.play();

            video.onended = function () {
                indice++;
                cambiarSlide();
            };
        } else {
            reproducirMusica(indice);
            setTimeout(() => {
                indice = (indice + 1) % slides.length;
                cambiarSlide();
            }, 28000); // 10 segundos por imagen
        }
    }

    function reproducirMusica(index) {
        if (index < canciones.length) {
            player.src = canciones[index];
            player.play().catch(error => console.error("Error al reproducir la música:", error));
        }
    }
});






