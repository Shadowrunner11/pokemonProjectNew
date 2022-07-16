import {$} from "../utils/selectors.js";

export class Map {
  constructor(limitX, limitY, container) {
    this.limitX = limitX;
    this.limitY = limitY;
    this.container = container;
  }

  locatePositionElement({x, y}) {
    return $(`.position-unit[x="${x}"][y="${y}"]`, this.container);
  }

  createMapHtml() {
    for (let i = 0; i < this.limitX; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("flex");
      for (let j = 0; j < this.limitY; j++) {
        const unitElement = document.createElement("div");
        unitElement.classList.add("position-unit");
        unitElement.setAttribute("x", i);
        unitElement.setAttribute("y", j);
        rowElement.appendChild(unitElement);
      }
      this.container.appendChild(rowElement);
    }
  }

  place({location, spritePath, dialog}) {
    const positionElement = this.locatePositionElement(location);
    if (positionElement.firstChild) {
      !$(".dialog", positionElement) && this.addDialog(positionElement);
      throw new Error(positionElement.firstChild.getAttribute("dialogs"));
    }

    const imgSvg = document.createElement("img");
    imgSvg.src = spritePath;
    imgSvg.setAttribute("dialogs", dialog);
    positionElement.appendChild(imgSvg);
  }

  clean(location) {
    this.locatePositionElement(location)?.firstChild?.remove();
  }

  addDialog(positionElement) {
    const dialog = document.createElement("div");
    dialog.textContent = positionElement.firstChild.getAttribute("dialogs");
    dialog.classList.add("dialog");
    positionElement.appendChild(dialog);
    setTimeout(()=> dialog.remove(), 5000);
  }
}
