import { Component } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, PopoverComponent],
})
export class HomePage {
  constructor(private popoverCtrl: PopoverController) {}

  useController(event: MouseEvent) {
    this.popoverCtrl.create({
      component: PopoverComponent,
      event: event
    }).then(p => p.present());
  }
}
