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

document.getElementById("clear-progress-btn").addEventListener("click", function() {
    // Clear the progress list and reset any related elements
    const progressList = document.querySelector(".tab-content.active ul");
    const crackValue = document.querySelector(".crack-value p");
    const resultTime = document.querySelector(".result-time p");
    const origPass = document.querySelector(".result-value p");

    if (progressList) {
        progressList.innerHTML = 'No password has been entered yet.';  // Clear the list
    }

    if (crackValue) {
        crackValue.innerHTML = '';  // Clear the cracked password display
    }

    if (resultTime) {
        resultTime.innerHTML = 'time taken';  // Clear the time display
    }

    if (origPass){
        origPass.innerHTML = '';
    }

    // If you're resetting the backend as well, you might want to make an AJAX request here
    fetch('/reset_progress', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            console.log("Progress reset", data);
        })
        .catch(error => {
            console.error("Error resetting progress:", error);
        });
});

 // The raw GitHub file URL
 const rawGitHubURL = 'https://raw.githubusercontent.com/smlcaffeineaddict/little-projects/refs/heads/main/python-projects/password-cracker.py';

 function fetchAndDisplayFile() {
     fetch(rawGitHubURL)
         .then(response => response.text())
         .then(data => {
             const lines = data.split('\n');
             const codeContainer = document.getElementById('code-container');
             
             let lineNumbers = '';
             let codeLines = '';

             lines.forEach((line, index) => {
                 lineNumbers += `<span class="progress-number">${index + 1}</span><br>`;
                 codeLines += `${line}\n`;
             });

             codeContainer.innerHTML = `
                 <div class="line-numbers-container">${lineNumbers}</div>
                 <div class="code-lines">${codeLines}</div>
             `;
         })
         .catch(error => {
             console.error('Error fetching the file:', error);
         });
 }

 // Ensure this function is called once the page loads
 window.onload = fetchAndDisplayFile;


 document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButton = document.querySelector(".view-more-btn");
    const codeContainer = document.getElementById("code-container");
    const tabContent = document.getElementById("code");
    const tabContainer = document.querySelector(".tab-container"); // Reference to the parent container

    viewMoreButton.addEventListener("click", function () {
        // Toggle the expanded state for all elements
        codeContainer.classList.toggle("expanded");
        tabContent.classList.toggle("expanded");
        tabContainer.classList.toggle("expanded");

        // Toggle the "expanded" class on the button to change the text
        viewMoreButton.classList.toggle("expanded");
    });
});


