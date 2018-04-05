import { Component, Input, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  @Input() cname: string;
  public message: string;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    if (this.message) {
      this.messageService.post(this.cname, this.message).subscribe(
        _ => {
          this.message = '';
          this.messageService.notify();
        },
        error => console.log(error)
      );
    }
  }

}
