import { Component, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ListItem } from './components/listItem/listItem'
import { Home } from './components/home/home'
import { Header } from './components/Header/header'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ListItem) listItem:ListItem
  title = 'app';
  readonly URL_API = 'https://notasfrafael.mybluemix.net'
  dados = {}

  constructor(private http: HttpClient) {}


  listaItens() {
    this.trazDados().then(() => {
       this.listItem.montaLista(this.dados)
    })
}

async trazDados() {
   await this.http.get(this.URL_API + '/carrega-notas').subscribe((res:Response) => {
     this.dados = res
     console.log("notas", this.dados)
   })
 }
}
