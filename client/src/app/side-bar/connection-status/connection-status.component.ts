import { Component, OnInit } from '@angular/core';
import { HeroIconName } from 'ng-heroicon';
import { ConnectionStatus } from 'src/app/connection-status';

@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss'],
})
export class ConnectionStatusComponent implements OnInit {
  connection: ConnectionStatus = ConnectionStatus.CONNECTED;

  get connectionStatus() {
    switch (this.connection) {
      case ConnectionStatus.CONNECTED:
        return 'connection successful';
      case ConnectionStatus.OFFLINE:
        return 'offline';
      default:
        return 'getting you online...';
    }
  }

  get statusIcon(): HeroIconName {
    switch (this.connection) {
      case ConnectionStatus.CONNECTED:
        return 'status-online';
      case ConnectionStatus.OFFLINE:
        return 'status-offline';
      default:
        return 'refresh';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
