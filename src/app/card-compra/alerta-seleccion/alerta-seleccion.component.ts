import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Productos } from 'src/app/listaPRoductos/productos';
@Component({
  selector: 'app-alerta-seleccion',
  templateUrl: './alerta-seleccion.component.html',
  styleUrls: ['./alerta-seleccion.component.css']
})
export class AlertaSeleccionComponent implements OnInit {
  @Input() Seleccion!:Productos;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
