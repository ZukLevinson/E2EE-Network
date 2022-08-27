import { Component, Input, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicon';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() text!: string;
  @Input() iconName!: HeroIconName;
  @Input() value!: string;
  @Input() action!: (value: string) => void;

  constructor() {}

  ngOnInit(): void {}
}
