import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet],
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
      type: "Contain"

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
      type: "Support"
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
      type: "Decoder"
    },

    {
      id: 4,
      title: "Magician",
      fName: "Servais",
      lName: "Le Roy",
      creator: "Identity V",
      description: "Servais Le Roy, also known as the Magician, is a Contain-Type and Difficulty 2 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Decoy",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1203529390328127569/115.png?ex=65d16d17&is=65bef817&hm=daf981d67be01bf4fc74b9a0d92730007226f7439dd554b32b7337e93b40dac5&",
      type: "Contain"
    },

    {
      id: 5,
      title: "Mercenary",
      fName: "Naib",
      lName: "Subedar",
      creator: "Identity V",
      description: "Naib Subedar or नायब सुभेदार, also known as the Mercenary, is a Rescue-Type and Difficulty 1.5 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Elbow Pads",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1203530462581227520/115.png?ex=65d16e16&is=65bef916&hm=a54b0c7671a5f4ddac99dddb82c71ad2dfa799d9b48a10009da27f99cfe9b538&",
      type: "Rescuer"
    },

    {
      id: 6,
      title: "Forward",
      fName: "William",
      lName: "Ellis",
      creator: "Identity V",
      description: "William Webb Ellis or William Ellis, also known as the Forward, is an Assist/Rescue Hybrid Type and Difficulty 3 Survivor available for purchase after completion of the prologue. He is one of 43 playable Survivors added to Identity V.",
      item: "Rugby Ball",
      imgURL: "https://cdn.discordapp.com/attachments/1012354587241488447/1203530994070855680/115.png?ex=65d16e95&is=65bef995&hm=25d2cfd8d5f74c1d2eb78787ec3d076ce9b0fa6c3a2639cdc0c726e155e0fdb1&",
      type: "Rescuer"
    }
  ]
}