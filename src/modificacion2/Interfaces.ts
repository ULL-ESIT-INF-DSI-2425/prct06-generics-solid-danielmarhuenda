export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }

export interface Observer {
    update(observable: Observable): string;
  }

export enum EventosMetereologicos {'SOLEADO' = "soleado", 'VIENTO' = "viento", 'LLUVIA' = "lluvia", 'TORMENTA' = "tormenta", "NIEVE" = "nieve"};