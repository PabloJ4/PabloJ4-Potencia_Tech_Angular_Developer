import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  menuType: string = "user"

  constructor() { 
    this.produtos = [
    "mouse",
    "teclado",
    "cabo",
    "font"
  ]}

  ngOnInit(): void {
  }
  adicionar(){
    this.produtos.push("Pablo")
  }
  remover(index: number){
    this.produtos.splice(index,1)

  }

}
