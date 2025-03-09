import {describe, expect, test} from "vitest";
import { Artista, Disco, Cancion, Biblioteca, Single } from "../../src/ejercicio2/Biblioteca";

describe("Tests de la bilioteca", () => {

    let numbers:Cancion = {nombre:"Numbers", duracion:250, generos:["Rock"], single:false, reproducciones:1000};
    let moon:Cancion = {nombre:"Moon", duracion:200, generos:["Rock"], single:false, reproducciones:2000};
    let disco1:Disco = {nombre:"Lock me up", fecha:2014, canciones:[numbers], tipo:"disco"}
    let artista1:Artista = {nombre: "The cab", oyentes: 14000, discografia:[disco1]}

    let cancionceta:Cancion = {nombre:"Cancionceta", duracion:250, generos:["Rock"], single:true, reproducciones:2};
    let single:Single = {nombre:"Disquito", fecha:2025, versiones:[cancionceta], tipo:"single"}
    let artista2:Artista = {nombre: "Yo mismo", oyentes: 1, discografia:[single]}

    let biblioteca = new Biblioteca([artista1]);

    let cancionceta2:Cancion = {nombre:"Cancionceta2", duracion:250, generos:["Rock"], single:true, reproducciones:2};
    let single2:Single = {nombre:"Disquito2", fecha:2025, versiones:[cancionceta], tipo:"single"}
    let artista3:Artista = {nombre: "Yo mismo", oyentes: 1, discografia:[single2]}
    let biblioteca2 = new Biblioteca([artista3]);

    test("Añadir un artista a una biblioteca", () => {
        expect(biblioteca.addArtista(artista2));
    });

    test("Añadir un disco a una biblioteca", () => {
        let disco3:Disco = {nombre:"Otro disco", fecha:2014, canciones:[numbers], tipo:"disco"}
        expect(biblioteca.addDisco(disco3, "The cab"));
    });

    test("Añadir una cancion a una biblioteca", () => {
        expect(biblioteca.addCancion(moon, "Lock me up"));
    });

    test("Cantidad de canciones de un disco", () => {
        expect(biblioteca.canciones_disco("Lock me up")).toBe(2);
    });

    test("Cantidad de reproducciones de un disco", () => {
        expect(biblioteca.reproducciones_disco("Lock me up")).toBe(3000);
    });

    test("Cantidad de segundos de duración de un disco", () => {
        expect(biblioteca.duracion_disco("Lock me up")).toBe(450);
    });

    test("Imprimir no explota para el coverage", () => {
        expect(biblioteca.imprimir());
    });


    test("Add version a single", () => {
        expect(biblioteca2.addCancion(cancionceta2, "Disquito2"));
    });
    test( "Numero versiones a single", () => {
        expect(biblioteca2.canciones_disco("Disquito2")).toBe(2);
    });
    test( "Duracion a single", () => {
        expect(biblioteca2.duracion_disco("Disquito2")).toBe(250);
    });
    test( "Reproducciones a single", () => {
        expect(biblioteca2.reproducciones_disco("Disquito2")).toBe(4);
    });
    test( "Imprimir single", () => {
        biblioteca2.imprimir();;
    });

});