import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( private accountService: AccountService, private loggingService: LoggingService
 ) {
   this.accountService.statusUpdated.subscribe(
     (status: string) => alert('new status ' + status)
   );
 }

  ngOnInit() {
  }

  onSetTo(status: string) {
  this.accountService.updateStatus(this.id, status);
  // this.loggingService.logStatusChange(status);
  this.accountService.statusUpdated.emit(status);
  }
}
