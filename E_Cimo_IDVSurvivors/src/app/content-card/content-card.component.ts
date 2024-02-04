import { Component, OnInit, Input } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
//import { Content } from '../helper-files/content-interface';
//import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [ ContentListComponent, CommonModule ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{
  @Input() Content: any;

  getBorderStyle(): string {
    return this.Content.id === 1 ? '2px solid black' : '1px solid black';
  }

  showDetails() {
    console.log(`Image ID: ${this.Content.id}, Image Title: ${this.Content.title}`);
  }

  ngOnInit() {

  }
}
