class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "a magia";
                break;
            case "guerreiro":
                ataque = "a espada";
                break;
            case "monge":
                ataque = "a artes marciais";
                break;
            case "ninja":
                ataque = "a shuriken";
                break;
            default:
                ataque = "realizou um ataque";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Gandalf", 500, "mago");
const heroi2 = new Heroi("Zelda", 100, "guerreiro");

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada







