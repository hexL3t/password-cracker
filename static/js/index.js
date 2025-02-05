const form = document.querySelector('form');
const submitButton = form.querySelector('button');

form.addEventListener('submit', function () {
    submitButton.disabled = true;
    submitButton.textContent = 'Cracking...';
});


document.addEventListener("DOMContentLoaded", function () {
    function clearProgress() {
        // Reset the form input fields
        let form = document.querySelector('#password-form');
        if (form) {
            form.reset();
        }

        // Clear the result section
        let resultContainer = document.querySelector('.pwc_result');
        if (resultContainer) {
            resultContainer.innerHTML = ''; // Clears the progress/results
        }

        // Clear the list items in all `.tab-content` sections
        let tabContentLists = document.querySelectorAll('.tab-content ul');
        tabContentLists.forEach(function (ul) {
            ul.innerHTML = ''; // Removes all list items inside the <ul>
        });

        console.log("Progress cleared!");
    }

    // Attach event listener to the "Clear Progress" button
    let clearButton = document.querySelector("#clear-progress-btn");
    if (clearButton) {
        clearButton.addEventListener("click", clearProgress);
    } else {
        console.warn("Clear Progress button not found!");
    }
});

