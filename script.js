document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("numbers-container");

    // Create 100 numbers in a grid
    const rows = 10;
    const cols = 10;
    const spacing = 0.2;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const num = document.createElement("a-text");
            const value = i * cols + j + 1;

            num.setAttribute("value", value);
            num.setAttribute("position", {
                x: (j - cols/2) * spacing,
                y: (rows/2 - i) * spacing,
                z: 0.1 // Slightly above the plane
            });
            num.setAttribute("align", "center");
            num.setAttribute("color", "black");
            num.setAttribute("scale", "0.5 0.5 0.5");

            container.appendChild(num);
        }
    }

    // Hide loading text
    document.getElementById("loading").style.display = "none";
});
