import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AccountService {
    constructor(private loggingService: LoggingService) {
    }
    accounts = [
        {name: 'Master Account',
        status: 'active'},
        {name: 'Test Account',
        status: 'inactive'},
        {name: 'Hidden Account',
        status: 'hidden'}
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount(name: string, status: string) {
       this.accounts.push({name: name, status: status});
       this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
      this.accounts[id].status = status;
      this.loggingService.logStatusChange(status);
      }


}
