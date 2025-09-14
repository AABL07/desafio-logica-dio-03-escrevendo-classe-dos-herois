class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        if (this.tipo === "guerreiro") {
            ataque = `${this.nome} atacou com uma espada!`;
        } else if (this.tipo === "mago") {
            ataque = `${this.nome} lançou um feitiço!`;
        } else if (this.tipo === "monge") {
            ataque = `${this.nome} usou punhos mortais!`;
        } else if (this.tipo === "ninja") {
            ataque = `${this.nome} atacou das sombras!`;
        } else {
            ataque = `${this.nome} não sabe como atacar!`;
        }
        console.log(ataque);
    }
}

// Criando os heróis fora da classe e atacando
const heroi1 = new Heroi("Aragorn", 87, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Gandalf", 2019, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Hanzo", 45, "ninja");
heroi3.atacar();

const heroi4 = new Heroi("Liu Kang", 30, "monge");
heroi4.atacar();

const heroi5 = new Heroi("Frodo", 50, "hobbit");
heroi5.atacar();
