import { Component, OnInit, Input } from '@angular/core';
//import { ContentListComponent } from '../content-list/content-list.component';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';
//import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [ CommonModule, HoverAffectDirective ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit{
  @Input() content: Content;


  showDetails() {
    console.log(`Image ID: ${this.content.id}, Image Title: ${this.content.title}`);
  }

  ngOnInit() {

  }
}
