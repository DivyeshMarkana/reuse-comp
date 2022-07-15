import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm: string = ''

  constructor(private service: AppService, private router: Router) {
  }

  ngOnInit(): void {
    // console.log(this.router.url);
    this.service.activeRoute.next(this.router.url)

  }

  search(event: any) {
    this.searchTerm = event.target.value
    this.service.search.next(this.searchTerm)
  }

}
