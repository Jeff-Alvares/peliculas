import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  datosMenu=[{
    'titulo': 'Películas gratis aquí :´)',
    'url': 'https://cuevana3.io'
 },
 
];

  constructor() { }

  ngOnInit(): void {
  }

}
