import { Terminal } from "./terminal";

export function initializeTerminal() {
  const element = document.getElementById("terminal");

  if (element) {
    element.appendChild(<Terminal />);
  }
}
