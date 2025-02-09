function openTab(tabName) {
    console.log(`Opening tab: ${tabName}`); // Debugging line

    // Find all tab content elements and remove the active class
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    // Find the correct tab content and activate it
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    } else {
        console.warn(`Tab content with ID '${tabName}' not found.`);
    }

    // Find the corresponding tab button and activate it
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    } else {
        console.warn(`Button for tab '${tabName}' not found.`);
    }
}

// Ensure 'progress' is active on page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded - setting default tab to 'progress'");

    const progressTab = document.getElementById("progress");
    if (progressTab) {
        progressTab.classList.add("active"); // Ensure progress tab is visible
    } else {
        console.error("Tab 'progress' not found in DOM.");
    }

    const progressButton = document.querySelector(".tab-button[data-tab='progress']");
    if (progressButton) {
        progressButton.classList.add("active");
    }
});

// This function ensures the correct viewport height handling on mobile browsers
function adjustViewportHeight() {
    // Set the height of the body to be the inner height of the window, minus the mobile address bar
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    document.documentElement.style.height = `calc(var(--vh, 1vh) * 100)`;
}

// Adjust on page load
adjustViewportHeight();

// Adjust on window resize (mobile address bar shows/hides)
window.addEventListener('resize', adjustViewportHeight);

