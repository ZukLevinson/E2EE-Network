import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}
}
