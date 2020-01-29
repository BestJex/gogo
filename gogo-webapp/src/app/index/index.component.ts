import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'gogo-webapp';

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.search('👋', 1).subscribe(r => {
      console.log(r);
    })
    this.searchService.lint('github').subscribe(r => {
      console.log(r);
    })
  }

}
