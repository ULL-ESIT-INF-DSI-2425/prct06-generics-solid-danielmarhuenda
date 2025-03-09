  class Bird {
    //Cosas de pajaros
    public ispajaro:boolean = true;
  }

  interface Volador{
    fly(): void;
  }

  export class Sparrow extends Bird implements Volador{
    fly(): void {
        console.log("Flying...");
      }
  }
  
  export class Penguin extends Bird {}
  