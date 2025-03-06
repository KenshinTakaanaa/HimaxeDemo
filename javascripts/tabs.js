// FOR THUMNAIL POPOP

function showGallery(id, element) {
    document.querySelectorAll('.gallery').forEach(gallery => {
        gallery.classList.remove('show');
    });
    document.getElementById(id).classList.add('show');
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}
