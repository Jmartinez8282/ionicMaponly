import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Platform} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  map:GoogleMap;
  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  loadMap(){
    Environment.setEnv ({
      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyADR3QDJZtM3mK045fkc1qDMUCfvRnTXGw',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyADR3QDJZtM3mK045fkc1qDMUCfvRnTXGw'
    });
  }
 

}
