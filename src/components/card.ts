import { Component } from './component';
import { PokemonCard } from '../models/pokemonCard';
import { PokemonApi } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: PokemonCard[];
  repository: PokemonApi;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new PokemonApi();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAllInfo();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: any) => `
          <li class="pokemon">
            <span class="pokemon__name">${item.name.toUpperCase()}</span>
            <img class="pokemon__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              item.url.split('/')[6]
            }.gif " height=100>
            </li>`
      )
      .join('');

    return `
      <ul class="pokemon-list">${list}</ul>
      `;
  }
}
