import { Component } from './component';

import { PokemonApi } from '../data/api.pokemon';
import { PokemonType } from '../models/pokemonCard';

export class Card extends Component {
  pokemon!: PokemonType[];
  repository: PokemonApi;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new PokemonApi();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getPokemonInfo();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: any) => `
          <li class="pokemon">
            <img class="pokemon__image" src="${
              item.sprites.back_shiny
            }" width="100">
            <span class="pokemon__name">${item.name.toUpperCase()}</span>
            <span class="pokemon__type">${item.types[0].type.name}</span>
          </li>`
      )
      .join('');

    return `
      <ul class="pokemon-list">${list}</ul>
      `;
  }
}
