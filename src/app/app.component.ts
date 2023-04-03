import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {World} from "./shared/world.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'frontend-hello-world';
  host = 'https://taaweni0-hello-world-hello-world.azuremicroservices.io';
  rootUrl = '/hello';
  public world: World;

  getHello() {
    console.log('GET Hello called');
    return this.http.get<World>(this.rootUrl).subscribe((world: World) => {
      console.log("world:" + world)
      this.world = world;
    });
  }
}
