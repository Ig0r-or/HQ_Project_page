

//Troca de página
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-container');
    let currentIndex = 0;

    document.getElementById('prev').addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        images[currentIndex].classList.add('active');
    });

    document.getElementById('next').addEventListener('click', function() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        images[currentIndex].classList.add('active');
    });
});
