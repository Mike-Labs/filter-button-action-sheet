import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonFab, IonFabButton, IonIcon, IonLabel, IonButton, IonImg,IonGrid,IonRow,IonCol, IonText, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Barcode, BarcodeFormat, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, Platform,NavController, ModalController } from '@ionic/angular';
import { CommonModule, NgFor } from '@angular/common';
import { Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';
import { BarcodeService } from '../services/barcode.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonImg, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonFab, IonFabButton, IonIcon, IonLabel, NgFor,CommonModule,IonGrid,IonRow,IonCol, IonButtons, IonBackButton ],
  providers: [ModalController]
})
export class HomePage implements OnInit {
  isSupported = false;
  barcodes: Barcode[] = [];
  public code: string = '';

  constructor(private alertController: AlertController, private platform: Platform , public navCtrl: NavController,private modalCtrl: ModalController,private router:Router ,private barcodeService:BarcodeService) {}

  async ngOnInit() {

  }

  async scanCode() {

  }

  async startScanner() {

  }


  async scan() {

  }

  parseVCard(vCard: string) {

  }
}
