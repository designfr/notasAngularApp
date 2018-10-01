import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
    
    readonly URL_API = 'https://notasfrafael.mybluemix.net'
    constructor(private http: HttpClient) {}

    campoNota
    usuarioAtual = "nomeusuario"
    // dados = [
    //     {usuario: "nomeusuario", titulo: "titulo da nota", nota: " esta é minha nota...", cricao: "10/07/2018"},
    //     {usuario: "nomeusuario", titulo: "titulo da nota 2", nota: " esta é minha nota 2 ...", cricao: "10/07/2018"},
    //     {usuario: "nomeusuario", titulo: "titulo da nota 3", nota: " esta é minha nota 3 ...", cricao: "10/07/2018"},
    // ]

    dados = {}

    limpaCampo() {
        this.campoNota = ""
    }

    salvar() {
        // organiza em forma de obj
        //envia para salvar no banco
        this.addObj()
    }

    addObj() {
        //salva no banco
    }
}

