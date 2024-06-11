class Vehicle {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `${this.marca} ${this.modelo} del año ${this.año}`;
    }
}

class Auto extends Vehicle {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, color ${this.color}, y el precio es de $${this.precio}`;
    }
}


const vehiculo = new Vehicle("Toyota", "Corolla", 2020);
console.log(vehiculo.obtenerInformacion());


const auto = new Auto("Renault", "Clio", 2015, "blanco", 20000);
console.log(auto.obtenerInformacion());
