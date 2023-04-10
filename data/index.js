
let cervezas = [
    {
        id: 1,
        nombre: "Playa grande",
        descripcion: "Un estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, compleja y refrescante. Como es tradicional, NO LA FILTRAMOS, por lo que se ve turbia. Nuestro homenaje a la Playa emblemática de Mar del Plata, donde el relax, los deportes y la diversión son una forma de vida.",
        alcochol: "7,5%",
        amargor: "medio",
        imagen: "playa.png",
        usuario: {
            id: 1,
            nombre: "Martina",
            email: "wsbc@ejemplo.com",
            contrasenia: "1234",
            fecha_nacimiento: "DD-MM-AAAA",
            numero_documento: "12345678",
            comentario: "Excelente, nada más que pedir, un suspiro al alma"
        
        },
        comentarios: [
            {
                id: 1,
                comentario: "Muy buena cerveza, la recomiendo",
                usuario: {
                    id: 1,
                    nombre: "Juan Perez",
                    email: "juancitoperez@gmail.com",
                    contrasenia: "",
                    fecha_nacimiento: "DD-MM-AAAA",
                    numero_documento: "12345678",
                    foto_perfil: "default-imgae.png",
                    
                }
            }
        ],
        fecha_carga: "DD-MM-AAAA",

    },
    {
        id: 2,
        nombre: "Kölsch",
        descripcion: "Existen muchas cervezas doradas y refrescantes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la Kölsch. En Antares rescatamos la antigua receta de la cerveza favorita de los bebedores en colonia, Alemania, y la honramos desde 1998. En nuestra cocina, su legado sigue intacto.",
        alcochol: "9,0",
        amargor: "",
        imagen: "kolcsh.png", 
        usuario: {
            id: 1,
            nombre: "Juana Domínguez",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: "",
            comentario: 'Cerveza dorada y demasiado refrescante. 10 puntos'
        },
        comentarios: [
            {
                id: 1,
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: "",
                    comentario: 'Dulce, deliciosa, nada más que pedir',
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 3,
        nombre: "Scotch",
        descripcion: "Escocia es tierra de cebada y la Scotch Ale lleva ese paisaje impregnado en su código genético. Rubí intenso. Seis grados de alcohol. Dulce y maltosa. La Antares más servida en nuestro Brewpub. Una fórmula a prueba del paso del tiempo.",
        alcochol: "",
        amargor: "",
        imagen: "scotch.png", 
        usuario: {
            id: 1,
            nombre: "Pedro Pérez",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: "",
            comentario: 'No soy fan de las cervezas pero la verdad la dulzura de esta maravilla me asombra'
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 4,
        nombre: "Porter",
        descripcion: "Maltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café. La Porter es la cerveza tributo de Antares a la cultura de los primeros pubs en el puerto de Londres. Cheers.",
        alcochol: "",
        amargor: "",
        imagen: "porter.png", 
        usuario: {
            id: 1,
            nombre: "Lucila Ramírez",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 5,
        nombre: "Cuatro tres",
        descripcion: "A los marplatenses nos gusta disfrutar de la costa todos los días. En invierno nos ponemos el Cuatro Tres, le hacemos frente al frío y nos metemos al mar. El traje nos abriga dentro del agua y la Doppelbock fuera. Una cerveza cobriza intensa en maltas, con carácter sedoso y la dosis de lúpulo justa para redondear su personalidad.",
        alcochol: "",
        amargor: "",
        imagen: "cuatro.png", 
        usuario: {
            id: 1,
            nombre: "Cecilia López",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 6,
        nombre: "Monasterio",
        descripcion: "Antares Monasterio estilo Belgian Quad, y añejada en barricas de roble francés. Es una cerveza muy fuere. Sus 14 grados de alcohol se esconden detrás de un aroma frutado como a damasco, zapallos en almíbar y banana, que se complementan con el aporte de vainilla y madera de la barrica. Oscura pero sin carácter torrado ni tostado, es una bomba para añejar durante años.",
        alcochol: "",
        amargor: "",
        imagen: "monasterio.png", 
        usuario: {
            id: 1,
            nombre: "Martina Duarte",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 7,
        nombre: "La centinela",
        descripcion: "El roble tiene una larga historia acompañando las bebidas. Cerveza, vino, whisky y otros destilados fueron guardados en barricas de Roble hasta la llegada del acero inoxidable. Pero como en la cerveza artesanal todo vuelve, una vez más en Antares corremos los límites para crear cervezas que rompen el status quo y nos traen sensaciones nuevas. Después de buscar durante años, encontramos unas barricas de Roble Francés utilizadas para añejar destilados que le aportan carácter de vainilla, coco y dulce de leche. El alcohol impregnado en la madera, la oscuridad, el silencio, y el tiempo son los Centinelas ideales para cuidar una cerveza de guarda. Para honrar el pasado de las barricas creamos una Antares Barley Wine ideal para añejar. Después de algunos meses de añejamiento en las barricas, el Centinela nos entregó una cerveza con 14 grados de alcohol. Alcohólica, dulce, frutada, compleja, exquisita. Para guardar en botella durante mucho tiempo.",
        alcochol: "",
        amargor: "",
        imagen: "lacentinela.png", 
        usuario: {
            id: 1,
            nombre: "Facundo Mengano",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 8,
        nombre: "Catalina la grande",
        descripcion: "Dicen que Catalina La Grande, Zarina de Rusia en el siglo XVII, era fanática de las Porter y Stout Británicas. Pero, como la travesía desde Inglaterra hasta San Petersburgo era muy larga, las cervezas llegaban en mal estado. La original solución fue elaborar cervezas más alcohólicas y fuertes para que soportaran el viaje.",
        alcochol: "",
        amargor: "",
        imagen: "catalina.png",
        usuario: {
            id: 1,
            nombre: "Gabriela Martínez",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 9,
        nombre: "Imperial stout",
        descripcion: "Catalina la Grande amaba las emociones fuertes. Por eso, la Imperial Stout, negra y tostada, empapada de alcohol y pasas, amarga y ahumada, era su cerveza favorita. Esencia inglesa de exportación. Tímidos, abstenerse.",
        alcochol: "",
        amargor: "",
        imagen: "imperial.png", 
        usuario: {
            id: 1,
            nombre: "Marta",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },
    {
        id: 10,
        nombre: "20 años",
        descripcion: "Para un año tan especial hicimos una cerveza tremenda. Nunca vista. Diseñada y concebida por nosotros. Muy alcohólica para poder soportar guarda prolongada. Compleja, aromática y especiada por el uso de levaduras belgas, frutas y especias. Añejada durante meses, maduró, creció y mejoró sin perder la esencia. Es una cerveza para disfrutar despacio. Reflexionar, mirar con orgullo el pasado y renovar el compromiso hacia el futuro.",
        alcochol: "",
        amargor: "",
        imagen: "an.png", 
        usuario: {
            id: 1,
            nombre: "Omar",
            email: "",
            contrasenia: "",
            fecha_nacimiento: "",
            numero_documento: ""
        },
        comentarios: [
            {
                id: 1,
                comentario: "",
                usuario: {
                    id: 1,
                    nombre: "",
                    email: "",
                    contrasenia: "",
                    fecha_nacimiento: "",
                    numero_documento: "",
                    foto_perfil: ""
                }
            }
        ],
        fecha_carga: "",

    },   
]

module.exports = cervezas;