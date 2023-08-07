class Animal{
    /*cualidades*/
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño){ 
        this.especie=especie;
        this.nombreDeAnimal=nombreDeAnimal;
        this.alimentacion=alimentacion;
        this.domesticado=domesticado;
        this.tamaño=tamaño;
    }

    get verInfoAnimal(){
        return `El animal elegido es ${this.nombreDeAnimal} del grupo ${this.especie}, tiene una alimentacion ${this.alimentacion}, tiene un tamaño ${this.tamaño}, y es ${this.domesticado} <br>` ;
       // return  `${this.nombreDeAnimal} holA ${this.domesticado}. `; FUNCIONA BIEN
    }
}
/*
    set modificacionAlimentacion(tipoAlimentacion){
        this.alimentacion=tipoAlimentacion;
    }

}
*/
class Mamiferos extends Animal{
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño, toleranciaTemp, medioVida){
        super(especie, nombreDeAnimal, alimentacion, domesticado, tamaño);
        this.toleranciaTemp=toleranciaTemp;
        this.medioVida=medioVida;

    }
    get verInfoMamifero(){
        return `El mamifero elegido es un ${this.nombreDeAnimal}, del grupo ${this.especie}, tiene una alimentacion ${this.alimentacion}, tiene un tamaño ${this.tamaño}, y es ${this.domesticado}, es un animal que ${this.toleranciaTemp}, ya que vive en ${this.medioVida}.`;
    }
}



let perro= new Animal("mamifero", "canino", "carnivoros", "domesticable", "mediano");
console.log(perro);

let gato= new Animal("mamifero", "felino", "carnivoros", "domesticable", "mediano");
console.log(gato);

let tigre= new Mamiferos("mamifero", "felino", "carnivoros", "no domesticable", "grande", "resiste a la temp", "selva");
console.log(tigre)

document.write(perro.verInfoAnimal);
document.write(gato.verInfoAnimal);
document.write(tigre.verInfoMamifero);

/*
perro.modificacionAlimentacion="hervivoro";
console.log(perro.alimentacion);
document.write(perro.verInfoAnimal);
*/