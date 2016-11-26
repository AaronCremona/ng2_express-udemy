import { Component } from "@angular/core";
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <app-message
        [message]="message"
        (editClicked)="message.content = $event"
        *ngFor="let message of messages">
      </app-message>
    </div>`
})

export class MessageListComponent {
  messages: Message[] = [
    new Message('Totally a message', 'F Scott Fitzgerald'),
    new Message('This is totally another different message', 'F Scott is a Hack'),
    new Message('Whhaaassssuppp. New message man!', 'homeboy')
  ];
}
