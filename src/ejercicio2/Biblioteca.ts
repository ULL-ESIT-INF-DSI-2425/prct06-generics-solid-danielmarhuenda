/**
 * Interfaz que representa a un artista
 */
export interface Artista{
    nombre:string;
    oyentes:number;
    discografia:Discografiable[];
}

/**
 * Interfaz que representa algo discografiable
 */
export interface Discografiable {
    nombre: string;
    fecha: number;
    tipo: "disco" | "single"; // Propiedad discriminante
}

/**
 * Interfaz que representa a un disco
 */
export interface Disco extends Discografiable {
    tipo: "disco";
    canciones: Cancion[];
}

/**
 * Interfaz que representa a un single
 */
export interface Single extends Discografiable {
    tipo: "single";
    versiones: Cancion[];
}


/**
 * Interfaz que representa a una canción
 */
export interface Cancion{
    nombre:string;
    duracion:number;
    generos:string[];
    single:boolean;
    reproducciones:number;
}

/**
 * Clase que representa a una biblioteca de artistas, discografías y canciones.
 * La clase parece que sólo almacena artistas porque cada objeto artista contiene sus discografías que contienen sus canciones
 */
export class Biblioteca{

    /**
     * Constructor de la clase Biblioteca
     * @param _artistas Conjunto inicial de artistas en la biblioteca
     */
    constructor(private _artistas:Artista[]){
    }

    /**
     * Función para añadir a un artista y su información complementaria a la biblioteca
     * @param artista Artista a añadir
     */
    addArtista(artista:Artista):void{
        this._artistas.push(artista);
    }
    
    /**
     * Función para añadir un disco y su información complementaria a la biblioteca
     * @param disco Disco a añadir
     * @param nombre_artista Nombre del artista que creó el disco. El disco se insertará al objeto del artista.
     */
    addDisco(disco:Disco, nombre_artista:string):void{
        this._artistas.forEach(artista => {
            if(artista.nombre === nombre_artista){
                artista.discografia.push(disco);
            }
        });
    }

    /**
     * Función para añadir una canción a la biblioteca
     * @param cancion Canción a añadir
     * @param nombre_disco Nombre del disco al que pertenece la canción. La canción se insertará al objeto del disco.
     */
    addCancion(cancion: Cancion, nombre_disco: string): void {
        this._artistas.forEach(artista => {
            let disco = artista.discografia.find(d => d.nombre === nombre_disco);
            if (!disco) return;
    
            if (disco.tipo === "disco") {
                (disco as Disco).canciones.push(cancion); 
            } else if (disco.tipo === "single") {
                (disco as Single).versiones.push(cancion);
            }
        });
    }
    
    
    
    /**
     * Función para imprimir la biblioteca por pantalla.
     * Cuando un disco tiene varias canciones se sustituye las subsecuentes menciones del disco por ''.
     * Lo mismo ocurre con los artistas y las canciones y los artistas y los discos.
     */
    imprimir(): void {
        console.table(
            this._artistas.flatMap(artista => {
                return artista.discografia.flatMap((disco, i) => {
                    if ("canciones" in disco) {
                        // Es un disco
                        return (disco as Disco).canciones.map((cancion, j) => ({
                            Artista: i === 0 && j === 0 ? artista.nombre : "",
                            Oyentes: i === 0 && j === 0 ? artista.oyentes : "",
                            Tipo: "Disco",
                            Nombre: j === 0 ? disco.nombre : "",
                            Año: j === 0 ? disco.fecha : "",
                            Canción: cancion.nombre,
                            Duración: cancion.duracion,
                            Géneros: cancion.generos.join(", "),
                            Reproducciones: cancion.reproducciones
                        }));
                    } else {
                        // Es un single
                        return (disco as Single).versiones.map((cancion, j) => ({
                            Artista: i === 0 && j === 0 ? artista.nombre : "",
                            Oyentes: i === 0 && j === 0 ? artista.oyentes : "",
                            Tipo: "Single",
                            Nombre: j === 0 ? disco.nombre : "",
                            Año: j === 0 ? disco.fecha : "",
                            Canción: cancion.nombre,
                            Duración: cancion.duracion,
                            Géneros: cancion.generos.join(", "),
                            Single: "Sí", // Siempre es single si está en un single
                            Reproducciones: cancion.reproducciones
                        }));
                    }
                });
            })
        );
    }
    
    

    
    
    

    /**
     * Número de canciones de un disco. Quería poner el return dentro del foreach pero lo detecta como retornar de la iteración, no de la función.
     * Si es un single da la cantidad de versiones
     * @param nombre_disco Nombre del disco a calcular
     * @returns Cuántas canciones tiene el disco dado.
     */
    canciones_disco(nombre_disco:string):number{
        let resultado:number = 0;

        this._artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if(disco.nombre === nombre_disco){
                    if (disco.tipo === "disco") {
                        resultado = (disco as Disco).canciones.length;
                    } else if (disco.tipo === "single") {
                        resultado = (disco as Single).versiones.length;
                    }
                    
                }
            });
        });

        return resultado;
    }

    /**
     * Duración en segundos del conjunto de las canciones de un disco.
     * Si es un single solo da la duración de la canción.
     * @param nombre_disco Nombre del disco a calcular
     * @returns Duración de sus canciones
     */
    duracion_disco(nombre_disco:string):number{
        let duracion:number = 0;

        this._artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if(disco.nombre === nombre_disco){
                    if (disco.tipo === "disco") {
                        (disco as Disco).canciones.forEach(cancion => {
                            duracion += cancion.duracion;
                        });
                    } else if (disco.tipo === "single") {
                        duracion = (disco as Single).versiones[0].duracion;
                    }
                }
            });
        });

        return duracion;
    }

    /**
     * Reproducciones del conjunto de las canciones de un disco.
     * @param nombre_disco Nombre del disco a calcular
     * @returns Reproducciones de sus canciones
     */
    reproducciones_disco(nombre_disco:string):number{
        let reproducciones:number = 0;

        this._artistas.forEach(artista => {
            artista.discografia.forEach(disco => {
                if(disco.nombre === nombre_disco){
                    if (disco.tipo === "disco") {
                        (disco as Disco).canciones.forEach(cancion => {
                            reproducciones += cancion.reproducciones;
                        });
                    } else if (disco.tipo === "single") {
                        (disco as Single).versiones.forEach(cancion => {
                            reproducciones += cancion.reproducciones;
                        });
                    }
                }
            });
        });

        return reproducciones;
    }
}