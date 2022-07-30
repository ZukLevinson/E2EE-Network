import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from 'src/types';
import { ProfileImageLoaderService } from '../contact/profile-image-loader.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor(private profileImageLoaderService: ProfileImageLoaderService) {}

  users!: Contact[];

  get currentApplicationVersion() {
    return environment.appVersion;
  }

  get githubUrl() {
    return environment.githubUrl;
  }

  get getUsers(): Contact[] {
    return Array.from({ length: Math.round(Math.random() * 20) }, () => {
      const name = this.profileImageLoaderService.generateName();
      return { name, imageId: Math.random() > 0.5 ? name : undefined };
    });
  }

  ngOnInit(): void {
    this.users = this.getUsers;
  }
}
