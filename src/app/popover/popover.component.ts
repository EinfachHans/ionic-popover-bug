import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
