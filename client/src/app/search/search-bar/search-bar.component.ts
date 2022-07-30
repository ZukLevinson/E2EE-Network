import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  search!: string;

  constructor() {}

  ngOnInit(): void {}

  updateSearch(val: any) {
    console.log(val);
  }
}
