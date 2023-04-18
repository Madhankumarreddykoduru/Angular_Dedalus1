import { Component } from '@angular/core';
import {theme1, theme2} from './appdata/styledata'
import {datafields}  from './appdata/appinfo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ABC Private Limited';
  services:string[] =datafields.servicelist;
  descriptions:string[]=
  [
    datafields.appservices,
    datafields.testservices,
    datafields.cloudservices
  ]
//themes:any= [theme1, theme2]
currentheme = theme1
currentfont:string = "Courier"
dataitems=datafields
changeTheme(theme:string):void{

  
   this.currentheme = theme=="theme1"? theme1: theme2;
}
}