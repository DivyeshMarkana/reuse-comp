import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = ''

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchTerm = event.target.value
    this.service.search.next(this.searchTerm)
  }

}
