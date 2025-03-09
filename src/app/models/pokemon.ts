export class Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;

  constructor(name: string, url: string, height: number, weight: number) {
    this.name = name;
    this.url = url;
    this.id = this.getIdByUrl();
    this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    this.height = height;
    this.weight = weight;
    this.types = [];
  }

  getIdByUrl(): number {
    let urlSeparated = this.url.split("/");
    return parseInt(urlSeparated[urlSeparated.length - 2], 10);
  }
}
