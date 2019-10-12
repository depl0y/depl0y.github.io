function displayImage(image, element) {
    var expandImg = document.getElementById(element);
    expandImg.src = image.src;
    expandImg.parentElement.style.display = "block";
}