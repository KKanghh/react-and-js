import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag);
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyUp());
  }

  handleKeyUp() {
    console.log(tag, "handleKeyUP", this.inputElement.value);
    this.showResetButton(this.inputElement.value.length > 0);
  }
}
