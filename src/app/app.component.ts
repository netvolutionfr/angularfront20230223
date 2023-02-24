import {Component, OnInit} from '@angular/core';
import {PersonneService} from "./services/personne.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularfront20230223';
  personnes: any = [];

  constructor(private service: PersonneService) {}

  ngOnInit() {
    this.service.getPersonnes().subscribe(data => {
      console.log(data);
      this.personnes = data;
    });
  }
}
