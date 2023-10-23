import { Component, OnInit } from '@angular/core';
import { RickanmortyService } from './rickanmorty.service';

@Component({
  selector: 'app-rickanmorty',
  templateUrl: './rickanmorty.page.html',
  styleUrls: ['./rickanmorty.page.scss'],
})
export class RickanmortyPage implements OnInit {
  data:any;
  datos:any;
  results:any;

  constructor(private rickanmortyService:RickanmortyService) { }

  ngOnInit() {
    this.rickanmortyService.obtenerDatos().subscribe(data => {
      if (data) {
        this.datos = data;
        console.log(data)
      }
    });
  
}
}