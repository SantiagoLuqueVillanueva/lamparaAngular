import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LamparaComponent } from './components/lampara/lampara.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LamparaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj-lamp';

  enchufado = false;

  estadoLampara: 'APAGADA' | 'ENCENDIDA' = 'APAGADA';

  onClickDesenchufar () {
    this.enchufado = false;
  }

  onClickEnchufar() {
    this.enchufado = true;
  }

  onCambioEstadoLampara(estado : 'APAGADA' | 'ENCENDIDA') {
    this.estadoLampara = estado;
  }
}
