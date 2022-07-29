import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  get currentApplicationVersion() {
    return environment.appVersion;
  }

  get githubUrl() {
    return environment.githubUrl;
  }
}
