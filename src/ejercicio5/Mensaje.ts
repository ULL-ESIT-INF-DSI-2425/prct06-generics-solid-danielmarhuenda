//No es escalable porque habría que añadir manualmente un tipo de servicio al constructor en vez de usar una interfaz
//Creo la interfaz Service para poder añadir facilmente más servicios.

  interface Service{
    notify(message:string):void;
  }

// Class that allows notifications by email to be sent
  export class EmailService implements Service{
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  // Class that allows notifications by SMS to be sent
  export class ShortMessageService implements Service{
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  // Class that makes use of different types of services to perform notifications
  export class Notifier {
    constructor(private notificationService: Service) {
    }
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }
  
  // Client code
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification('Hello World!');
  
  const shortMessageNotifier = new Notifier(new ShortMessageService());
  shortMessageNotifier.sendNotification('Hello World!');
  