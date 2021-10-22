import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto: string = '';

  constructor(public chatService: ChatService) { }

  ngOnInit() {

    this.chatService.getMessages().subscribe( msg => {
      console.log(msg);
    });
  }

  enviar() {
    console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
