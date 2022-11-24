import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CatalogPage } from 'sales/CatalogPage';

@Component({
  selector: 'app-activations',
  templateUrl: './activations.page.html',
  styleUrls: ['./activations.page.scss'],
})
export class ActivationsPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openCatalog() {
    const modal = await this.modalController.create({
      component: CatalogPage,
      componentProps: {
        products: [
          {
            name: 'Recarga activacion',
            price: 'L10',
          },
          {
            name: 'Recarga activacion',
            price: 'L20',
          },
          {
            name: 'Recarga activacion',
            price: 'L30',
          },
        ],
      },
    });

    await modal.present();
  }
}
