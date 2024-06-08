function showDetails(serviceType) {
    let detailsContent = document.getElementById('details-content');
    if (serviceType === 'video') {
        detailsContent.innerHTML = `
            <h3>Wedding Videography Details</h3>
            <p>Our wedding videography service includes full coverage of your wedding day, from the pre-wedding preparations to the final dance. We use high-quality cameras and equipment to ensure your video is captured in stunning detail. You will receive a professionally edited video that highlights all the key moments of your special day.</p>
            <p><strong>Package includes:</strong></p>
            <ul>
                <li>Full day coverage</li>
                <li>Highlight reel</li>
                <li>Full ceremony and reception coverage</li>
                <li>2 Videographers</li>
                <li>Drone footage (optional)</li>
            </ul>
        `;
    } else if (serviceType === 'photo') {
        detailsContent.innerHTML = `
            <h3>Wedding Photography Details</h3>
            <p>Our wedding photography service captures every special moment of your wedding day with beautiful, high-resolution photos. Our photographers are experienced in capturing candid moments as well as posed shots, ensuring you have a comprehensive collection of images to remember your day by. You will receive edited digital images and an optional photo album.</p>
            <p><strong>Package includes:</strong></p>
            <ul>
                <li>Full day coverage</li>
                <li>Pre-wedding shoot</li>
                <li>Candid and posed photos</li>
                <li>2 Photographers</li>
                <li>Photo album (optional)</li>
            </ul>
        `;
    }
    document.getElementById('details-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}
