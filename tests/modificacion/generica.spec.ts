import {describe, expect, test} from "vitest";
import {Lista} from "../../src/modificacion/generica"

describe("Tests de la modificacon", () => {
    let listanumber1:Lista<number> = new Lista<number>([1,2,3]);
    let listanumber2:Lista<number> = new Lista<number>([3,4,5]);
    let listanumber3:Lista<number> = new Lista<number>([5,6,7]);

    test("Append number", () => {
        let listanumbertest:Lista<number> = new Lista<number>([1,2,3]);
        listanumbertest.append(listanumber2);
        expect(listanumbertest.getitems()).toStrictEqual([1,2,3,3,4,5]);
    });

    test("Concatenate number", () => {
        let listanumbertest:Lista<number> = new Lista<number>([1,2,3]);
        listanumbertest.concatenate([listanumber2,listanumber3])
        expect(listanumbertest.getitems()).toStrictEqual([1,2,3,3,4,5,5,6,7]);
    });

    test("filter number", () => {
        expect(listanumber1.filter((item) => item>2).getitems()).toStrictEqual([3]);
        expect(listanumber1.filter((item) => item<3).getitems()).toStrictEqual([1,2]);
    });

    test("lenght number", () => {
        let listanumbertest:Lista<number> = new Lista<number>([1,2,3,4,5]);
        expect(listanumber1.lenght()).toBe(3);
        expect(listanumbertest.lenght()).toBe(5);
    });

    test("map number", () => {
        let listanumbertest:Lista<number> = new Lista<number>([1,2,3]);
        expect(listanumbertest.map((item:number) => item*2).getitems()).toStrictEqual([2,4,6]);
    });

    test("reverse number", () => {
        expect(listanumber1.reverse().getitems()).toStrictEqual([3,2,1]);
    });


    let listastring1:Lista<string> = new Lista<string>(["a","b","c"]);
    let listastring2:Lista<string> = new Lista<string>(["c","d","e"]);
    let listastring3:Lista<string> = new Lista<string>(["e","f","g"]);

    test("Append string", () => {
        let listastringtest:Lista<string> = new Lista<string>(["a","b","c"]);
        listastringtest.append(listastring2);
        expect(listastringtest.getitems()).toStrictEqual(["a","b","c","c","d","e"]);
    });

    test("Concatenate string", () => {
        let listastringtest:Lista<string> = new Lista<string>(["a","b","c"]);
        listastringtest.concatenate([listastring2,listastring3])
        expect(listastringtest.getitems()).toStrictEqual(["a","b","c","c","d","e", "e","f","g"]);
    });

    test("filter string", () => {
        expect(listastring1.filter((item) => item === "b").getitems()).toStrictEqual(["b"]);
        expect(listastring1.filter((item) => item !== "b").getitems()).toStrictEqual(["a", "c"]);
    });

    test("lenght string", () => {
        expect(listastring1.lenght()).toBe(3);
    });

    test("map string", () => {
        let listastringtest:Lista<string> = new Lista<string>(["a","b","c"]);
        expect(listastringtest.map((item:string) => item+"a").getitems()).toStrictEqual(["aa","ba","ca"]);
    });

    test("reverse string", () => {
        expect(listastring1.reverse().getitems()).toStrictEqual(["c","b","a"]);
    });
    


});