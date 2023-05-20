/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header">
      <img class="logo" src="./Pokemon-Logo-PNG.png" alt="Pokemon logo" width = 400 heigth = 600>
    </header>
    `;
  }
}
