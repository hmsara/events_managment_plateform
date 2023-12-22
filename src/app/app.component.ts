import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { MemberComponent } from './member/member.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { ListeDesActionsComponent } from './list-action/list-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HeaderComponent ,LandingPageComponent, ActionComponent, MemberComponent , ListeDesActionsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestionnaire d’évènements';
}
