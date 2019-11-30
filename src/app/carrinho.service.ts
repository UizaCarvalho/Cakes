import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private afs: AngularFirestore) { }

  adicionarCarrinho(bolo: any) {
    this.afs.collection('carrinho').doc(bolo['id']).set(bolo);
  }

  getCarrinho(): Observable<any[]> {
    return this.afs.collection('carrinho').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return { id, ...data };
        })
      })
    )
  }

  finalizarPedido(bolos) {
    console.log(bolos);
    bolos.forEach(bolo => {
      this.afs.collection('carrinho').doc(bolo['id']).delete();
    });
  }
}
