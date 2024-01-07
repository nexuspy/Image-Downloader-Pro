chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "downloadImages") {
        downloadImages();
    }
});

function downloadImages() {
    const images = document.querySelectorAll("img");
    images.forEach(function(image, index) {
        const imgUrl = image.src;
        const imgName = `image_${index + 1}`;
        downloadImage(imgUrl, imgName);
    });
}

function downloadImage(url, name) {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}