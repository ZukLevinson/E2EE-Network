import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from 'unique-names-generator';

@Injectable({
  providedIn: 'root',
})
export class ProfileImageLoaderService {
  constructor(private http: HttpClient) {}

  findImage(imageId: string): Observable<Blob> {
    return this.http
      .get<string>('https://robohash.org/' + imageId, {
        responseType: 'blob' as any,
      })
      .pipe(tap(console.log));
  }

  generateName(): string {
    return uniqueNamesGenerator({
      dictionaries: [colors, adjectives, animals],
      // separator: ' ',
      length: 2,
      style: 'capital',
    }); // red_big_donkey
  }
}
