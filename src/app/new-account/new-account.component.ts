import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
//  providers:  [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor( private accountService: AccountService, private loggingService: LoggingService
 ) { }

  ngOnInit() {
  }
  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountService.addAccount(accountName, accountStatus);
  // this.loggingService.logStatusChange(accountStatus);
  }
}
