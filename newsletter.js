const augustCard = document.getElementById('august-card');

augustCard.addEventListener('click', () => {
    // Create an anchor element for downloading the PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = 'Assets/august2023.pdf'; // Replace with your actual path
    downloadLink.download = 'august2023.pdf'; // Specify the filename for download
    downloadLink.target = '_blank'; // Open in a new tab/window

    // Simulate a click event to trigger the download
    downloadLink.click();
});
