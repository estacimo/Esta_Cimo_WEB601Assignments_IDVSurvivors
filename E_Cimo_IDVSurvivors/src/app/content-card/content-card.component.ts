import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit{
  contentList:ContentList;

  constructor() {
    this.contentList=new ContentList
    this.contentList.addContentItem({
      id: 1,
      title: "Gardener",
      fName: "Emma",
      lName: "Woods",
      role: "Contain",
      description: "---",
      item: "Toolbox"
    })

    this.contentList.addContentItem({
      id: 2,
      title: "Doctor",
      fName: "Emily",
      lName: "Dyer",
      role: "Contain",
      description: "---",
      item: "Syringe"
    })

    this.contentList.addContentItem({
      id: 3,
      title: "Mechanic",
      fName: "Tracy",
      lName: "Reznik",
      role: "Decoder",
      description: "---",
      item: "Controller"
    })
  }

  ngOnInit() {

  }
}
