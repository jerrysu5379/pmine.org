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
            errorlog(e); 
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

function uploadPanorama(){ 
    const input = document.getElementById("panoramaFile");
    const file = input.files[0]; 

    if (file) {
        url = URL.createObjectURL(file);
    } else { 
        url = "files/background/0.png";
    } 
    
    document.getElementById("panorama_url").value = url; 
    reloadPanorama() 
} 

function reloadPanorama() {
    const input = document.getElementById("panorama_url");
    const url = input.value;
    console.log(url); 
    if (url === "") {
        skinViewer.background = null;
        input.setCustomValidity("");
    } else {
        skinViewer.loadPanorama(url)
            .then(() => input.setCustomValidity(""))
            .catch(e => {
                input.setCustomValidity("Image can't be loaded.");
                console.error(e);
            });
    }
} 

function changeIntensity() { 
    const input = document.getElementById("globalIntensity"); 
    const value = input.value; 
    console.log(value); 
    skinViewer.globalLight.intensity = value; 
} 

function changeCameraIntensity() { 
    const input = document.getElementById("cameraIntensity"); 
    const value = input.value; 
    console.log(value); 
    skinViewer.cameraLight.intensity = value; 
} 

function changeWidth() { 
    const input = document.getElementById("width"); 
    const value = input.value; 
    console.log(value); 
	skinViewer.width = value; 
} 

function changeHeight() { 
    const input = document.getElementById("height"); 
    const value = input.value; 
    console.log(value); 
	skinViewer.height = value; 
} 

function changeSkinLeftArmRotationX() { 
    const input = document.getElementById("skinLeftArmRotationX"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftArm").rotation.x = value; 
} 

function changeSkinLeftArmRotationY() { 
    const input = document.getElementById("skinLeftArmRotationY"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftArm").rotation.y = value; 
} 

function changeSkinLeftArmRotationZ() { 
    const input = document.getElementById("skinLeftArmRotationZ"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftArm").rotation.z = value; 
} 

function changeSkinRightArmRotationX() { 
    const input = document.getElementById("skinRightArmRotationX"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightArm").rotation.x = value; 
} 

function changeSkinRightArmRotationY() { 
    const input = document.getElementById("skinRightArmRotationY"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightArm").rotation.y = value; 
} 

function changeSkinRightArmRotationZ() { 
    const input = document.getElementById("skinRightArmRotationZ"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightArm").rotation.z = value; 
} 

function changeSkinHeadRotationX() { 
    const input = document.getElementById("skinHeadRotationX"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("head").rotation.x = value; 
} 

function changeSkinHeadRotationY() { 
    const input = document.getElementById("skinHeadRotationY"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("head").rotation.y = value; 
} 

function changeSkinHeadRotationZ() { 
    const input = document.getElementById("skinHeadRotationZ"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("head").rotation.z = value; 
} 

function changeSkinLeftLegRotationX() { 
    const input = document.getElementById("skinLeftLegRotationX"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftLeg").rotation.x = value; 
} 

function changeSkinLeftLegRotationY() { 
    const input = document.getElementById("skinLeftLegRotationY"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftLeg").rotation.y = value; 
} 

function changeSkinLeftLegRotationZ() { 
    const input = document.getElementById("skinLeftLegRotationZ"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("leftLeg").rotation.z = value; 
} 

function changeSkinRightLegRotationX() { 
    const input = document.getElementById("skinRightLegRotationX"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightLeg").rotation.x = value; 
} 

function changeSkinRightLegRotationY() { 
    const input = document.getElementById("skinRightLegRotationY"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightLeg").rotation.y = value; 
} 

function changeSkinRightLegRotationZ() { 
    const input = document.getElementById("skinRightLegRotationZ"); 
    const value = input.value; 
    skinViewer.playerObject.getObjectByName("rightLeg").rotation.z = value; 
} 


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('downloadButton').addEventListener('click', downloadImage);
    document.getElementById("skin").addEventListener("change", reloadSkin);
    document.getElementById("skin_model").addEventListener("change", reloadSkin); 
    document.getElementById("panorama_url").addEventListener("change", reloadPanorama); 
    document.getElementById("panoramaFile").addEventListener("change", uploadPanorama); 
    document.getElementById("globalIntensity").addEventListener("change", changeIntensity); 
    document.getElementById("cameraIntensity").addEventListener("change", changeCameraIntensity); 
    document.getElementById("width").addEventListener("change", changeWidth); 
    document.getElementById("height").addEventListener("change", changeHeight); 

    document.getElementById("skinLeftArmRotationX").addEventListener("change", changeSkinLeftArmRotationX); 
    document.getElementById("skinLeftArmRotationY").addEventListener("change", changeSkinLeftArmRotationY); 
    document.getElementById("skinLeftArmRotationZ").addEventListener("change", changeSkinLeftArmRotationZ); 
    document.getElementById("skinRightArmRotationX").addEventListener("change", changeSkinRightArmRotationX); 
    document.getElementById("skinRightArmRotationY").addEventListener("change", changeSkinRightArmRotationY); 
    document.getElementById("skinRightArmRotationZ").addEventListener("change", changeSkinRightArmRotationZ); 
    document.getElementById("skinHeadRotationX").addEventListener("change", changeSkinHeadRotationX); 
    document.getElementById("skinHeadRotationY").addEventListener("change", changeSkinHeadRotationY); 
    document.getElementById("skinHeadRotationZ").addEventListener("change", changeSkinHeadRotationZ); 
    document.getElementById("skinLeftLegRotationX").addEventListener("change", changeSkinLeftLegRotationX); 
    document.getElementById("skinLeftLegRotationY").addEventListener("change", changeSkinLeftLegRotationY); 
    document.getElementById("skinLeftLegRotationZ").addEventListener("change", changeSkinLeftLegRotationZ); 
    document.getElementById("skinRightLegRotationX").addEventListener("change", changeSkinRightLegRotationX); 
    document.getElementById("skinRightLegRotationY").addEventListener("change", changeSkinRightLegRotationY); 
    document.getElementById("skinRightLegRotationZ").addEventListener("change", changeSkinRightLegRotationZ); 

    errorlog('All ready!'); 
}) 
 
