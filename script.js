const compressBtn = document.getElementById('compressBtn');
const audioFileInput = document.getElementById('audioFile');
const resultsDiv = document.getElementById('results');

compressBtn.addEventListener('click', () => {
    const file = audioFileInput.files[0];
    if (!file) {
        alert('Please select an audio file first.');
        return;
    }

    // Simulated compression
    const originalSize = (file.size / 1024).toFixed(2); // KB
    const compressionRatio = (Math.random() * 0.5 + 0.5).toFixed(2); // Random 0.5–1.0
    const compressedSize = (originalSize * compressionRatio).toFixed(2);
    const compressionTime = (Math.random() * 2 + 0.5).toFixed(2); // seconds

    resultsDiv.innerHTML = `
        <p>File Name: ${file.name}</p>
        <p>Original Size: ${originalSize} KB</p>
        <p>Compressed Size: ${compressedSize} KB</p>
        <p>Compression Ratio: ${compressionRatio}</p>
        <p>Compression Time: ${compressionTime} s</p>
        <p><button onclick="downloadFile('${file.name}', ${compressedSize})">Download Compressed File</button></p>
    `;
});

// Real download simulation — creates a dummy file for download
function downloadFile(fileName, size) {
    const blob = new Blob(
        [`Simulated compressed audio data (~${size} KB)`],
        { type: 'text/plain' }
    );
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `compressed_${fileName}`;
    link.click();
    URL.revokeObjectURL(link.href);
}
