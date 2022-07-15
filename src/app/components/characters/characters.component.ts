import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  characters: any[] = []

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    // console.log(this.router.url);
    this.appService.activeRoute.next(this.router.url)

    this.appService.getCharacters(10, 0).subscribe((response) => {
      this.characters = response.data.results
    })
  }

  route(event: any) {
    this.router.navigate(['/characters', event])
  }

}
