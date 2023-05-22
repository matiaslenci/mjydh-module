import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})

export class BadgesComponent  implements OnInit
{

 @Input() value: number|boolean|null ;

 constructor() {}
 ngOnInit(): void {

 }
 isNumber(){
  if(typeof this.value ==='boolean'){
      return  false;
  }
  return this.value;
 };

}
