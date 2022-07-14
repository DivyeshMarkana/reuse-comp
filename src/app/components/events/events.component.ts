import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private service: AppService) { }

  events: any[] = []

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents() {
    this.service.getEvents(10, 0).subscribe((response) => {
      this.events = response.data.results
    })
  }

}
