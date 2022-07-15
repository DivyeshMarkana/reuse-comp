import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics: any[] = []

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics() {
    // console.log(this.router.url);
    this.appService.activeRoute.next(this.router.url)
    this.appService.getComics(10, 0).subscribe((response) => {
      this.comics = response.data.results
    })
  }

  route(event: any) {
    this.router.navigate(['/comics', event])
  }

}
