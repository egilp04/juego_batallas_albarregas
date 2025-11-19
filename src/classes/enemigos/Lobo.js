import { Enemigo } from "../classes/Enemigo.js";

export class Lobo extends Enemigo {
  constructor(nombre, avatar, ataque, hp) {
    super(nombre, avatar, ataque, hp);
  }
}
