import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
      new Message('Totally a message', 'F Scott Fitzgerald'),
      new Message('This is totally another different message', 'F Scott is a Hack'),
      new Message('Whhaaassssuppp. New message man!', 'homeboy')
    ];
}
