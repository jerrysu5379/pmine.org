let skinViewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin_container"),
    width: 300,
    height: 400,
    skin: `files/default.png`,
    preserveDrawingBuffer: true, // Set preserveDrawingBuffer to true 
})

function downloadImage() {
    let canvas = document.getElementById("skin_container");
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let link = document.createElement('a');
    link.download = "my-canvas.png";
    link.href = image;
    document.body.appendChild(link); // Append the link to the body
    link.click();
    document.body.removeChild(link); // Remove the link after triggering the download
};

function errorlog(message) {
    var errorDiv = $('<div class="alert alert-danger alert-dismissible fade show" role="alert" style="position: fixed; top: 20px; right: -50%; width: auto; z-index: 9999;">')
        .text(message)
    //.append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

    $('body').append(errorDiv);

    errorDiv.animate({
        right: '20px'
    }, 500);

    setTimeout(function () {
        errorDiv.animate({
            right: '-50%'
        }, 500, function () {
            $(this).alert('close');
        });
    }, 5000);
}

function reloadSkin() {
    const input = document.getElementById("skin");
    const file = input.files[0];

    // Generate a blob URL for the file or use the default URL 
    let url = "";
    if (file) {
        url = URL.createObjectURL(file);
    } else { 
        url = "files/default.png";
    }
    skinViewer.loadSkin(url, {
        model: document.getElementById("skin_model").value,
        // ears: document.getElementById("ears_source").value === "current_skin"
    })
        .then(() => {
            input.setCustomValidity("");
            // Revoke the blob URL to free up memory after the image is loaded
            URL.revokeObjectURL(url);
        })
        .catch(e => {
            input.setCustomValidity("Image can't be loaded.");
            console.error(e);
            // Revoke the blob URL in case of an error as well
            URL.revokeObjectURL(url);
        }); 

    /*
    else {
        skinViewer.loadSkin(null);
        input.setCustomValidity("");
    } 
    */  

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('downloadButton').addEventListener('click', downloadImage);
    errorlog('All ready!');
    document.getElementById("skin").addEventListener("change", reloadSkin);
    document.getElementById("skin_model").addEventListener("change", reloadSkin);

}) 
