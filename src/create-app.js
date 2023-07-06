import { createTitle } from "./components/create-title";

export function createApp() {
  const container = document.createElement("div");
  const titleEl = createTitle();
  const titleEl2 = createTitle("Title Two!");
  container.appendChild(titleEl);
  container.appendChild(titleEl2);
  return container;
}
