/* eslint-disable no-unused-vars */
export type CardStructure = {
  img: string;
  name: string;
  url: string;
};

export class Card implements CardStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id!: string;
  isCompleted: boolean;
  constructor(public title: string, public owner: string) {
    this.isCompleted = false;
  }
}
