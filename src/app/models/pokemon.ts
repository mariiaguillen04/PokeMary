export class Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
  gift: string;

  constructor(name: string, url: string, height: number, weight: number, abilities: { ability: { name: string; } }[], types: { type: { name: string; } }[], stats: { base_stat: number; stat: { name: string; } }[]) {
    this.name = name;
    this.url = url;
    this.id = this.getIdByUrl();
    this.image = this.getImageUrl();
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.types = types;
    this.stats = stats;
    this.gift = this.getGiftUrl();
  }

  private getIdByUrl(): number {
    const urlParts = this.url.split("/");
    return parseInt(urlParts[urlParts.length - 2], 10);
  }

  private getImageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  private getGiftUrl(): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.id}.gif`;
  }
}
