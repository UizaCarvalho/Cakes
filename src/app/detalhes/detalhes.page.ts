import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  bolo: any;

  constructor(private router: Router, private carrinhoService: CarrinhoService, private navController: NavController) {
    this.bolo = this.router.getCurrentNavigation().extras.state.bolo;
  }

  adicionarCarrinho() {
    this.carrinhoService.adicionarCarrinho(this.bolo);
    this.navController.pop();
  }

  ngOnInit() {
  }

}
