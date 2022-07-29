import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() selected?: boolean = false;

  @ContentChildren('widget')
  widgets?: QueryList<Component>;

  constructor() {}

  ngOnInit(): void {}
}
