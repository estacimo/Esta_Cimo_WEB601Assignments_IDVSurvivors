import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
// import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E_Cimo_IDVSurvivors';
}
