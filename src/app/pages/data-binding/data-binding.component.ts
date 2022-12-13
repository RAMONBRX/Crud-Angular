import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Ramon Alberto';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'Imagem aleatoria'
  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(value: any){
    console.log('clicou aqui', value);
    this.text = 'Silva'
  }
}
