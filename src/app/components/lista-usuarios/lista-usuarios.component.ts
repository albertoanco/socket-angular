import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(public chatService: ChatService) {

  }

  ngOnInit() {

    // emitir el obtener usuarios
    this.chatService.emitirUsuariosActivos();

    this.usuariosActivosObs = this.chatService.getUsuariosActivos();

  }

}
