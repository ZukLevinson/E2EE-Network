import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/types';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  search!: string;
  options: Tag[] = [
    {
      text: 'Images',
      value: 'images',
      iconName: 'photograph',
    },
    {
      text: 'Texts',
      value: 'texts',
      iconName: 'chat',
    },
    {
      text: 'Documents',
      value: 'docs',
      iconName: 'document-text',
    },
    {
      text: 'Recordings',
      value: 'recordings',
      iconName: 'microphone',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  updateSearch(val: any) {
    console.log(val);
  }
}
