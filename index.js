var i = 1;

setInterval(switchImage, 3500)

function switchImage() {
    if (i == 6) {
        i = 1;
    }
    var previewItem = document.getElementsByClassName("preview__items")[0];
    $(previewItem).fadeOut(1000, function() {
        previewItem.style.backgroundImage = "url(imgs/preview_items/" + i + ".png)";
        i++;
    });
    $(previewItem).fadeIn(1000);
}
