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
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200873054251798568/gardener.png?ex=65ecad2f&is=65da382f&hm=c59839c4000966706d78307df157571eb109425e267f202b5923137e9d72cc16&",
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
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874965789069342/doctor.png?ex=65ecaef7&is=65da39f7&hm=3f6f01b365df5dbf355668909acf08a77b284c6e65d8034c89efeb6102cb01e8&",
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
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1200874986026586192/mechanic.png?ex=65ecaefb&is=65da39fb&hm=33cf4e0aa4b043117a0937c176e14b06c7ca77bd9499213381db5a7c3d70015f&",
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
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1206082000461766666/latest.png?ex=65e3f0e4&is=65d17be4&hm=8fda90e24b9bd747787bb0c6aa7d9762851b8917af0aaf5ad2fb700b8bf65e9e&",
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
      imgURL: "",
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