import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-lampara',
  imports: [],
  templateUrl: './lampara.component.html',
  styleUrl: './lampara.component.css'
})
export class LamparaComponent {
  enchufada = input<boolean>(false);
  estadoLampara = output<'APAGADA' | 'ENCENDIDA'>();

  encendida = false;

  onApagarEncender() {
    this.encendida = !this.encendida;
    this.estadoLampara.emit(this.encendida ? 'ENCENDIDA' : 'APAGADA')
  }
}
