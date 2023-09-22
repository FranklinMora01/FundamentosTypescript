interface ISitioWeb {

    nombre: string, 
    link: {
        enlace: string;
    }, 
    redesSociales: {
        youtube: {
            enlace: string;
            nombre: string;
        }
    }
}

//creamos el objero
const sitioWeb: ISitioWeb = {
    nombre: 'Google',
    link: {
        enlace: 'www.google.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/google',
            nombre: 'Google'
        }
    }
};

console.log(sitioWeb.nombre);
console.log(sitioWeb.link.enlace);
console.log(sitioWeb.redesSociales.youtube.enlace);

//Destructuring (Desmenuzar el objeto)
const {enlace, nombre: nombreYoutube} = sitioWeb.redesSociales.youtube;
console.log(enlace, nombreYoutube);

const valores = [10, 20, 30];
//const [primero, segundo, tercero] = valores;
//console.log(primero);
//console.log(segundo);
//console.log(tercero);
const [,,tercero] = valores;
console.log(tercero);
