import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics: any[] = []

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics() {
    this.appService.getComics(10, 0).subscribe((response) => {
      // console.log(response);
      this.comics = response.data.results
    })
  }

}
