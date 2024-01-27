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
    this.contentList=new ContentList();
    this.contentList.addContentItem({
      id: 1,
      title: "Gardener",
      fName: "Emma",
      lName: "Woods",
      creator: "Identity V",
      description: "Emma Woods (formerly Lisa Beck), also known as the Gardener, is a Contain/Assist Type and Difficulty 1 Default Survivor unlocked after finishing the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Toolbox",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200873054251798568/gardener.png?ex=65c7c32f&is=65b54e2f&hm=2bd600a424df840e7ecf7e254e782ae56892f470aa384b847d9293593d312608&",
      type: "Contain"

    })

    this.contentList.addContentItem({
      id: 2,
      title: "Doctor",
      fName: "Emily",
      lName: "Dyer",
      creator: "Identity V",
      description: "Emily Dyer (formerly Lydia Jones), also known as the Doctor, is a Contain/Assist Hybrid Type and Difficulty 1 Default Survivor unlocked after finishing the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Syringe",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874965789069342/doctor.png?ex=65c7c4f7&is=65b54ff7&hm=a1ee955b4ee91419fb63ea354b85d96fec529b41dfd03c97d532a4e3bd407ec0&",
      type: "Support"
    })

    this.contentList.addContentItem({
      id: 3,
      title: "Mechanic",
      fName: "Tracy",
      lName: "Reznik",
      creator: "Identity V",
      description: "Tracy Reznik, also known as the Mechanic, is a Decode-Type and Difficulty 2 Survivor available for purchase after completion of the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Controller",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874986026586192/mechanic.png?ex=65c7c4fb&is=65b54ffb&hm=66f393a5dd7983282d261925ba5a7a5efb7c2fab0f8742e0208fca8fc63f8da0&",
      type: "Decoder"
    })
  }

  ngOnInit() {

  }
}
