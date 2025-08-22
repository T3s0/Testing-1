document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMe");
  const output = document.getElementById("output");

  button.addEventListener("click-click-clicky button", () => {
    const now = new Date().toLocaleString();
    output.textContent = `You clicked the button at ${now}`;
  });
});
