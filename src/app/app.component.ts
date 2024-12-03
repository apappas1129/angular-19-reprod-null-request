import { Component, inject, Inject, REQUEST, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-app-19';

  // constructor(@Inject(REQUEST) public req: Request) {
  //   console.log('req', this.req); //null
  // }

  constructor() {
    // const req = inject(REQUEST);
    // console.log('req', req); // null
  }

  req = inject(REQUEST);
  ngOnInit() {
    console.log('req', this.req); // null
  }
}
