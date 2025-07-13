function viewPdf(url) {
    const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
    window.open(googleViewerUrl, '_blank');
}

function downloadDoc(url , filename) {
    const anchor_download = document.getElementById('downloader');
    
    anchor_download.href = new URL(url, document.baseURI).href;
    anchor_download.download = filename;
    anchor_download.click();
}