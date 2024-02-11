import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { RouterOutlet } from '@angular/router';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet, TypeFilterPipe, FormsModule ],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: "Gardener",
      fName: "Emma",
      lName: "Woods",
      creator: "Identity V",
      description: "Emma Woods (formerly Lisa Beck), also known as the Gardener, is a Contain/Assist Type and Difficulty 1 Default Survivor unlocked after finishing the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Toolbox",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200873054251798568/gardener.png?ex=65c7c32f&is=65b54e2f&hm=2bd600a424df840e7ecf7e254e782ae56892f470aa384b847d9293593d312608&",
      type: "Contain",
      tags: ["Gardener", "Contain", "Support"]

    },

    {
      id: 2,
      title: "Doctor",
      fName: "Emily",
      lName: "Dyer",
      creator: "Identity V",
      description: "Emily Dyer (formerly Lydia Jones), also known as the Doctor, is a Contain/Assist Hybrid Type and Difficulty 1 Default Survivor unlocked after finishing the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Syringe",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874965789069342/doctor.png?ex=65c7c4f7&is=65b54ff7&hm=a1ee955b4ee91419fb63ea354b85d96fec529b41dfd03c97d532a4e3bd407ec0&",
      type: "Support",
      tags: ["Doctor", "Support", "Contain"]
    },

   {
      id: 3,
      title: "Mechanic",
      fName: "Tracy",
      lName: "Reznik",
      creator: "Identity V",
      description: "Tracy Reznik, also known as the Mechanic, is a Decode-Type and Difficulty 2 Survivor available for purchase after completion of the prologue. She is one of 43 playable Survivors added to Identity V.",
      item: "Controller",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874986026586192/mechanic.png?ex=65c7c4fb&is=65b54ffb&hm=66f393a5dd7983282d261925ba5a7a5efb7c2fab0f8742e0208fca8fc63f8da0&",
      type: "Decoder",
      tags: ["Mechanic", "Decoder"]
    },

    {
      id: 4,
      title: "Magician",
      fName: "Servais",
      lName: "Le Roy",
      creator: "Identity V",
      description: "Servais Le Roy, also known as the Magician, is a Contain-Type and Difficulty 2 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Decoy",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1206081643123834960/latest.png?ex=65dab60f&is=65c8410f&hm=4e2fb9a89bec23b8bba9728c88bf0012ca4d4b6ac0764572b776412690a49feb&",
      type: "Contain",
      tags: ["Magician", "Contain"]
    },

    {
      id: 5,
      title: "Mercenary",
      fName: "Naib",
      lName: "Subedar",
      creator: "Identity V",
      description: "Naib Subedar or नायब सुभेदार, also known as the Mercenary, is a Rescue-Type and Difficulty 1.5 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Elbow Pads",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1206081812011552779/latest.png?ex=65dab637&is=65c84137&hm=6ed3bd4c7a476b36d4e33e69a2bcd81d584e3adc92eaff84031d9f0c7425a326&",
      type: "Rescuer",
      tags: ["Mercenary", "Rescuer"]
    },

    {
      id: 6,
      title: "Forward",
      fName: "William",
      lName: "Ellis",
      creator: "Identity V",
      description: "William Webb Ellis or William Ellis, also known as the Forward, is an Assist/Rescue Hybrid Type and Difficulty 3 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Rugby Ball",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1206082000461766666/latest.png?ex=65dab664&is=65c84164&hm=5084828f9163b08e4ca309113409dbfd4c805917d6a6ad98695950e0bd795cd5&",
      type: "Rescuer",
      tags: ["Forward", "Rescuer", "Support"]
    },

    {
      id: 7,
      title: "Stranger B",
      fName: "Unknown",
      lName: "Unknown",
      creator: "Identity V",
      description: "Stranger B, also referred to as Stranger 2, is a cut Survivor planned for implementation during the early development phase of Identity V, but ultimately scrapped before the game's official release.",
      item: "Syringe",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1206049409134108682/latest.png?ex=65da980a&is=65c8230a&hm=d9f539d40af8a8660b3701ea12741f58a58d95ab4f5609c1eb3c6241635299cb&",
      tags: ["Stranger B"]
    }

  ];

  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(contentItem => contentItem.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

  constructor() {
    
  }
}