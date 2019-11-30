import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  bolos: any[] = [];

  constructor(private navController: NavController, private carrinhoService: CarrinhoService, private loadingController: LoadingController, private alertController: AlertController) {
    this.carrinhoService.getCarrinho().subscribe((bolos) => {
      this.bolos = bolos;
    });
  }

  ngOnInit() {
  }

  finalizar() {
    this.loading().then(() => {
      this.carrinhoService.finalizarPedido(this.bolos);
    });
    this.navController.pop();
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: "Finalizando Pedido",
      duration: 4000,
      backdropDismiss: false
    });
    loading.present().then(() => {
      this.alert();
    });
  }

  async alert() {
    const alert = await this.alertController.create({
      header: "Compra finalizada",
      message: "Já já chega",
      buttons: [
        { text: 'ok', role: 'cancel' }
      ]
    });
    alert.present();
  }

}
