document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");

  button.addEventListener("clickMe", () => {
    const now = new Date().toLocaleString();
    output.textContent = `You clicked the click-click-clicky button at ${now}`;
  });
});
