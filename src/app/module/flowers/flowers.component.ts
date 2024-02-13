import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent{
  constructor(
    readonly router: Router
  ){}
  goCarta(){
    this.router.navigateByUrl('/carta');
  }
}
