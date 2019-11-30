import { Component } from '@angular/core';
import { BolosService } from '../bolos.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bolos: any[] = [];
  constructor(private BolosService: BolosService, private navController: NavController) {
    this.getBolos();
  }
  getBolos() {
    this.BolosService.getBolos().subscribe((bolos) => {
      this.bolos = bolos;
    });
  }
  detalhe(bolo: any) {
    this.navController.navigateForward(['/detalhes'], { state: { bolo: bolo } });
  }
  carrinho() {
    this.navController.navigateForward(['/carrinho']); 
  }
}
