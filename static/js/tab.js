function openTab(tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the clicked tab content
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    }

    // Add active class to the clicked button
    const activeButton = [...buttons].find(button => button.textContent.toLowerCase() === tabName);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Set default active tab (optional)
document.addEventListener("DOMContentLoaded", () => {
    console.log('Document loaded'); // Debugging line
    openTab('progress');
});
