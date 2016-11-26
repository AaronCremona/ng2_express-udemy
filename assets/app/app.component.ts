import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = {
      content: "totally a sweet message here",
      author: "Aaron"
    }
}
