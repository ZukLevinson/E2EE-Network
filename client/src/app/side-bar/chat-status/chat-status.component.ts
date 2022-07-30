import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/users/contacts.service';
import { Contact } from 'src/types';
import { ProfileImageLoaderService } from '../../contact/profile-image-loader.service';

@Component({
  selector: 'app-chat-status',
  templateUrl: './chat-status.component.html',
  styleUrls: ['./chat-status.component.scss'],
})
export class ChatStatusComponent implements OnInit {
  @Input() contact!: Contact;
  @Input() profilePicture?: string;
  connected: boolean = false;

  createImageFromBlob(image: Blob): void {
    let reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        console.log(reader.result);
        this.profilePicture = reader.result as string;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  constructor(
    private profileImageLoaderService: ProfileImageLoaderService,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    if (!!this.contact.imageId) {
      this.profileImageLoaderService
        .findImage(this.contact.imageId)
        .subscribe((image) => this.createImageFromBlob(image));
    }

    this.contactsService
      .getOnlineStatus(this.contact)
      .subscribe((connection) => (this.connected = connection.connected));
  }

  ngOnChanges(): void {
    console.log(this.profilePicture);
  }
}
