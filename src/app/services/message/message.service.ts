import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message : any;
  alert:any;
  constructor() { }
  addMessage(message:string,alert:string){
    this.message=message;
    this.alert = alert;
  }

  getMessage(){
    return this.message;
  }

  getAlert()
  {
    return this.alert;
  }
}
