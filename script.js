const resultElem = document.getElementById("result");

function onScanSuccess(decodedText) {
    resultElem.innerText = "Result: " + decodedText;
    html5QrcodeScanner.clear();
}

const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 200 });

html5QrcodeScanner.render(onScanSuccess);

document.getElementById("file-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const qr = new Html5Qrcode("reader");
    qr.scanFile(file, true)
        .then(decodedText => {
            resultElem.innerText = "Result: " + decodedText;
        })
        .catch(err => {
            resultElem.innerText = "QR Code not found in image.";
        });
});
