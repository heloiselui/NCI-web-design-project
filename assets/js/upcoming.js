/*** File holds the pop up fucntionality to show full screen band image when 
 * image is clicked
 * 
 * @author Heloise Lui
 */

function openLightbox(img) {
  document.getElementById('lightboxModal').style.display = 'block';
  document.getElementById('lightboxImage').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightboxModal').style.display = 'none';
}