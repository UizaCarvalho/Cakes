import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  bolos: any[] = [];
  bolosFirebase: any[] = [];

  constructor(private afs: AngularFirestore) {
    this.bolos = [
      {
        "nome": "Bolo Chocolate Branco",
        "descricao": ".........",
        "valor": "R$ 25,00",
        "imagem": "assets/branco.png"
      },
      {
        "nome": "Bolo de Morango",
        "descricao": ".........",
        "valor": "R$ 35,00",
        "imagem": "assets/morango.png"
      },
      {
        "nome": "Bolo Floresta Negra",
        "descricao": ".........",
        "valor": "R$ 30,00",
        "imagem": "assets/negra.png"
      },

      {
        "nome": "Bolo Trufado",
        "descricao": ".....",
        "valor": "R$ 40,00",
        "imagem": "assets/trufado.png"
      }
    ];
  }

  getBolos(): Observable<any[]> {
    return this.afs.collection('bolos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return { id, ...data };
        })
      })
    )
  }

}
