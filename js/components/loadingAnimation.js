const loading1 = document.querySelector("#loadingContainer1");
const loading2 = document.querySelector("#loadingContainer2");
const loading3 = document.querySelector("#loadingContainer3");

// Function to show the loading animation
export function showLoadingAnimation() {
    loading1.style.display = 'block';
    loading2.style.display = 'block';
    loading3.style.display = 'block';
}
// Function to hide the loading animation
export function hideLoadingAnimation() {
    loading1.style.display = 'none';
    loading2.style.display = 'none';
    loading3.style.display = 'none';
}


// Function to update loading text with dots
function updateLoadingText(loadingText, dotCount) {
    loadingText.innerText = `Loading games${'.'.repeat(dotCount)}`;
}

// Attach event listener to each loading animation element
const loadingAnimations = document.querySelectorAll(".loadingContainer #loadingAnimation");
loadingAnimations.forEach((animation) => {
    let dotCount = 0;
    const loadingText = animation.previousElementSibling;
    updateLoadingText(loadingText, dotCount);

    animation.addEventListener("animationiteration", () => {
        dotCount = (dotCount + 1) % 4;
        updateLoadingText(loadingText, dotCount);
    });
});


