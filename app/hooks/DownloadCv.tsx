const cvPath = '/cv.pdf';
function DownloadCv() {
    const downLoadCv = () => {
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Tian.DEV_CV.pdf';
        link.click();
    }
    return { downLoadCv };
}
export default DownloadCv;
