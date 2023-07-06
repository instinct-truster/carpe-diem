export function createTitle(text = "Hello, Friends!") {
  const titleEl = document.createElement("h1");
  titleEl.textContent = text;
  return titleEl;
}
