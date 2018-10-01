import { Component } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './listItem.html',
})

export class ListItem {
    dados = []
    titulos = []
    public montaLista(itens){
        
        this.dados = itens
        this.MontaTitulos ()
        console.log(this.titulos);
    }
    //public itemAtual = "novo"
    
    MontaTitulos (){
        for(let i=0; i<this.dados.length; i++){
            this.titulos.push(this.dados[i].titulo)
        }
    }
}


