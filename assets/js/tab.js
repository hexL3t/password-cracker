// Function to switch tabs and reset the expand toggle
function openTab(tabName) {
    console.log(`Opening tab: ${tabName}`);

    // Find all tab content elements and remove the active class and expanded state
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active"); // Deactivate all tabs
        content.classList.remove("expanded"); // Remove expanded state on tab change
    });

    // Remove expanded class from all code containers
    document.querySelectorAll(".code-container").forEach(container => {
        container.classList.remove("expanded");
    });

    // Remove active class from all buttons
    document.querySelectorAll(".tab-button").forEach(button =>
        button.classList.remove("active")
    );

    // Activate the selected tab (but do not toggle the expanded state here)
    const tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add("active");
    } else {
        console.warn(`Tab content with ID '${tabName}' not found.`);
    }

    // Activate the corresponding button (but do not toggle the expanded state here)
    const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add("active");
    } else {
        console.warn(`Button for tab '${tabName}' not found.`);
    }
}

// Ensure 'progress' tab is active on page load if it's not already set
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded - checking default tab");

    // Attach clear progress event listener
    const clearButton = document.getElementById("clear-progress-btn");
    if (clearButton) {
        clearButton.addEventListener("click", clearProgress);
    }

    // Fetch and display code files
    fetchAndDisplayFile("python");
    fetchAndDisplayFile("javascript");
});

// Function to clear progress and reset UI
function clearProgress() {
    console.log("Clearing progress...");

    const progressList = document.querySelector(".tab-content.active ul");
    const crackValue = document.querySelector(".crack-value p");
    const resultTime = document.querySelector(".result-time p");
    const origPass = document.querySelector(".result-value p");

    if (progressList) {
        progressList.innerHTML = "No password has been entered yet.";
    }

    if (crackValue) {
        crackValue.textContent = "";
    }

    if (resultTime) {
        resultTime.textContent = "Time taken";
    }

    if (origPass) {
        origPass.textContent = "";
    }

    // Optionally reset backend progress
    fetch("/reset_progress", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            console.log("Progress reset:", data);
        })
        .catch(error => {
            console.error("Error resetting progress:", error);
        });
}

/// Function to fetch and display code files with line numbers
function fetchAndDisplayFile(language) {
    let rawGitHubURL = "";
    let codeContainerId = "";

    if (language === "python") {
        rawGitHubURL = "https://raw.githubusercontent.com/smlcaffeineaddict/little-projects/refs/heads/main/python-projects/password-cracker.py";
        codeContainerId = "pycode-container";
    } else if (language === "javascript") {
        rawGitHubURL = "https://raw.githubusercontent.com/smlcaffeineaddict/little-projects/refs/heads/main/javascript%20projects/password%20cracker/assets/js/pwordcracker.js";
        codeContainerId = "jscode-container";
    }

    fetch(rawGitHubURL)
        .then(response => response.text())
        .then(data => {
            const lines = data.split("\n");
            const codeContainer = document.getElementById(codeContainerId);

            if (!codeContainer) {
                console.error(`Code container not found for ${language}.`);
                return;
            }

            let lineNumbers = "";
            let codeLines = "";

            lines.forEach((line, index) => {
                lineNumbers += `<span class="progress-number">${index + 1}</span><br>`;
                codeLines += `<span class="code-line">${line}</span><br>`;
            });

            codeContainer.innerHTML = `
                <div class="line-numbers-container">${lineNumbers}</div>
                <div class="code-lines">${codeLines}</div>
            `;
        })
        .catch(error => {
            console.error(`Error fetching the ${language} file:`, error);
        });
}

// Function to toggle expanded state for specific content sections
function toggleExpandedState(tabContent, codeContainer, viewMoreButton) {
    // Debugging log to track the expanded state
    console.log("Toggling expanded state for:", tabContent, codeContainer, viewMoreButton);

    // Only toggle the state of the selected section
    if (!tabContent.classList.contains("expanded")) {
        tabContent.classList.add("expanded");
        codeContainer.classList.add("expanded");
        viewMoreButton.classList.add("expanded");
    } else {
        tabContent.classList.remove("expanded");
        codeContainer.classList.remove("expanded");
        viewMoreButton.classList.remove("expanded");
    }

       // Check screen width and hide .pwc if the tab is expanded on large screens
       const pwcElement = document.querySelector(".pwc");
       const tabContainer = document.querySelector(".tab-container");
   
       if (window.innerWidth > 1024 && tabContent.classList.contains("expanded") && pwcElement) {
           pwcElement.style.display = "none";
   
           // Change tab-container width when tab is expanded on large screens
           if (tabContainer) {
               tabContainer.style.width = "100%";  // Example width change, adjust as needed
           }
       } else if (pwcElement) {
           pwcElement.style.display = "flex";  // Ensure it's visible again on smaller screens
   
           // Reset tab-container width when tab is not expanded
           if (tabContainer) {
               tabContainer.style.width = "100%";  // Default width or adjust to your needs
           }
       }
}

// Event listener for Python 'View More' button
document.addEventListener("DOMContentLoaded", function () {
    const pyViewMoreButton = document.querySelector("#pycode .view-more-btn");
    const jsViewMoreButton = document.querySelector("#jscode .view-more-btn");

    const pyCodeContainer = document.getElementById("pycode-container");
    const jsCodeContainer = document.getElementById("jscode-container");

    const pyTabContent = document.getElementById("pycode");
    const jsTabContent = document.getElementById("jscode");

    // Handle Python 'View More' button click
    if (pyViewMoreButton) {
        pyViewMoreButton.addEventListener("click", function () {
            // Toggle the expanded state for Python content section
            toggleExpandedState(pyTabContent, pyCodeContainer, pyViewMoreButton);
        });
    } else {
        console.warn("Python View More button not found.");
    }

    // Handle JavaScript 'View More' button click
    if (jsViewMoreButton) {
        jsViewMoreButton.addEventListener("click", function () {
            // Toggle the expanded state for JavaScript content section
            toggleExpandedState(jsTabContent, jsCodeContainer, jsViewMoreButton);
        });
    } else {
        console.warn("JavaScript View More button not found.");
    }
});