import Component, { insertAt } from "./BaseComponent";

export default class Tool extends Component<HTMLDivElement, HTMLDivElement> {
  private btn: HTMLButtonElement;
  private svg: SVGElement;
  private pathTag: SVGPathElement;
  constructor(private toolId: string, private pathD: string) {
    super("color-picker-menu", insertAt.beforeend, undefined, "div", toolId);
    this.configure();
    this.renderContent();
  }
  public configure(): void {
    this.btn = document.createElement("button");
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.pathTag = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    this.configureSVG();
    this.configurePath();
  }
  private configureSVG(): void {
    this.svg.setAttribute("class", "icon-img bi bi-eraser-fill");
    this.svg.setAttribute("id", `${this.toolId}-icon`);
    this.svg.setAttribute("width", "28");
    this.svg.setAttribute("height", "28");
    this.svg.setAttribute("viewBox", "0 0 16 16");
    this.svg.setAttribute("fill", "currentColor");
    this.btn.insertAdjacentElement(insertAt.afterbegin, this.svg);
  }
  private configurePath() {
    this.pathTag.setAttribute("d", this.pathD);
    this.svg.insertAdjacentElement(insertAt.beforeend, this.pathTag);
  }
  public renderContent(): void {
    this.element.insertAdjacentElement(insertAt.afterbegin, this.btn);
  }
}
