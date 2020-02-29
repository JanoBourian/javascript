export class Formulario {
    constructor(name, lastName, email, mensaje){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.mensaje = mensaje;
    }
    imprimirDatos(){
        console.log(`${this.name}, ${this.lastName}, ${this.email}, ${this.mensaje}`);
    }
    subirDatos(){
        let datos;
        //Obtener Local Storage
        datos = this.obtenerDatos();
        //Crear el template de datos 
        datos.push({
            'name': this.name,
            'lastName': this.lastName,
            'email': this.email,
            'mensaje': this.mensaje
        });
        //Convertir a string el arreglo para localStorage
        localStorage.setItem('datosContacto', JSON.stringify(datos));

    }
    obtenerDatos(){
        let datos;
        //Revisamos LocalStorage
        if(localStorage.getItem('datosContacto')===null){
            datos = [];
        }else{
            datos = JSON.parse(localStorage.getItem('datosContacto'));
        }
        return datos;
    }
}

