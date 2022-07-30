import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Contact } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContactImage(contact: Contact): Observable<Blob> {
    if (!!contact.imageId) {
      return this.http
        .get<string>('https://robohash.org/' + contact.imageId, {
          responseType: 'blob' as any,
        })
        .pipe(tap(console.log));
    } else {
      throw new Error('User does not have profile image');
    }
  }

  getOnlineStatus(
    contact: Contact
  ): Observable<{ connected: boolean; lastConnected: Date }> {
    if (!!contact.imageId) {
      return new Observable((observer) => {
        const connectionActive = Math.random() > 0.5;
        return observer.next({
          connected: connectionActive,
          lastConnected: new Date(),
        });
      });
    } else {
      throw new Error('User does not have profile image');
    }
  }
}
