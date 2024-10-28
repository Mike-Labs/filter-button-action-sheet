import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonButton, IonIcon,
  IonButtons, IonBackButton, IonFab, IonFabButton, IonRow
 } from '@ionic/angular/standalone';
import { StudentService } from '../services/student.service'; // Adjust path
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItem, IonButton, IonIcon,
    IonButtons, IonBackButton, IonFab, IonFabButton, IonRow
  ],
  providers: [ActionSheetController]

})
export class ListPage implements OnInit {


// With Api Endpoint
  students: Array<{ name: string, nat: string, gender: string }> = [];  // List of students from API
  filteredStudents: Array<{ name: string, nat: string, gender: string }> = [];  // Filtered list for display
  searchTerm: string = '';  // Bound to search bar input

  constructor(
    private studentService: StudentService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit(){

    this.fetchStudents();
  }

  // Fetch students from API
  fetchStudents() {

  }

    // Filter students based on search term
    filterList(event: any) {

    }


      async openFilter() {
        const actionSheet = await this.actionSheetController.create({
          header: '', 
          cssClass: 'custom-action-sheet',

          buttons: [
            {
              text: 'GB',
              cssClass: 'myActionSheetBtnStyle',
              handler: () => {
                this.filterByNat('GB');
              }
            },
            {
              text: 'AU',
              handler: () => {
                this.filterByNat('AU');
              }
            },
            {
              text: 'US',
              handler: () => {
                this.filterByNat('US');
              }
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                this.cancelClicked(actionSheet);
              }
            }
          ],
          backdropDismiss: true,
        });
      
        const headerElement = document.createElement('div');
        headerElement.classList.add('custom-header');
        headerElement.innerHTML = `
        <ion-row class="ion-justify-content-center header-row-action">
          <ion-button class="filter-button-action" fill="clear" (click)="filterClicked()">
              <ion-icon name="funnel-outline" class="funnel-icon"></ion-icon>
              Filter
            </ion-button>
  
        </ion-row>
        `;


        const footerElement = document.createElement('div');
        footerElement.classList.add('custom-footer');
        footerElement.innerHTML = `
        <ion-row class="ion-justify-content-center footer-row-action">
          <div class="cancel-btn-wrapper">
            <ion-button class="cancel-button" fill="clear" (click)="cancelClicked()">
              Cancel
            </ion-button>         
          </div>
        </ion-row>
        `;


        const header = document.querySelector('ion-action-sheet .action-sheet-title');
        if (header) {
          header.innerHTML = '';
          header.appendChild(headerElement);
        }

        const footer = document.querySelector('.action-sheet-group-cancel');
        if (footer) {
          footer.innerHTML = '';
          footer.appendChild(footerElement);
        }

  setTimeout(() => {
    const filterButton = document.querySelector('.filter-button-action');
    const cancelButton = document.querySelector('.cancel-button');

    if (filterButton) {
      filterButton.addEventListener('click', () => {
        this.filterClicked();
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        this.cancelClicked(actionSheet);
      });
    }

    const wrapper = document.querySelector('.action-sheet-wrapper');
    if (wrapper) {
      wrapper.classList.add('action-custom');
    }
    const container = document.querySelector('.action-sheet-container');
    if (container) {
     container.classList.add('action-custom');
    }
    const sheet_group = document.querySelector('.action-sheet-group');
    if (sheet_group) {
     sheet_group.classList.add('action-custom');
    }
    const title_group = document.querySelector('.action-sheet-title');
    if (title_group) {
     title_group.classList.add('action-custom');
    }
    const action_button = document.querySelectorAll('.action-sheet-button');
    action_button.forEach(button => {
      (button as HTMLElement).classList.add('action-button');
    });

    const action_sheet_button_inner = document.querySelectorAll('.action-sheet-button-inner');
    action_sheet_button_inner.forEach(button => {
      (button as HTMLElement).classList.add('action-button-inner');
    });
    
  }, 0);

  await actionSheet.present();
      }
  

  filterByNat(nat: string) {
      this.filteredStudents = this.students.filter(student => student.nat === nat);
    }

    filterClicked() {
      console.log('Filter Button clicked');

    }
    
    cancelClicked(actionSheet: HTMLIonActionSheetElement) {
      console.log('Cancel clicked');
      actionSheet.dismiss();

    }

}
