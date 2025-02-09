function openTab(tabName) {
    console.log(`Opening tab: ${tabName}`); // Debugging line

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    } else {
        console.warn(`Tab content with ID '${tabName}' not found.`);
    }

    // Add active class to the clicked button
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    } else {
        console.warn(`Button for tab '${tabName}' not found.`);
    }
}

// Ensure 'progress' tab is active on page load **only if it's not already set**
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded - checking default tab");

    const progressTab = document.getElementById("progress");
    if (progressTab && !progressTab.classList.contains("active")) {
        progressTab.classList.add("active"); // Keep it visible if not already
    }

    const progressButton = document.querySelector(".tab-button[data-tab='progress']");
    if (progressButton && !progressButton.classList.contains("active")) {
        progressButton.classList.add("active");
    }
});
