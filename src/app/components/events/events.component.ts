import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  events: any[] = []

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    // console.log(this.router.url);
    this.service.activeRoute.next(this.router.url)
    this.service.getEvents(10, 0).subscribe((response) => {
      this.events = response.data.results
    })
  }

  route(event: any) {
    this.router.navigate(['/events', event])
  }

}
