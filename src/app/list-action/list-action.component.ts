// src/app/components/liste-des-actions/liste-des-actions.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Action } from '../models/action.models';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-liste-des-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-action.component.html',
  styleUrls: ['./list-action.component.scss'] // Correction ici
})
export class ListeDesActionsComponent implements OnInit{
  @Input()
  actions: Action[] = []; // Le tableau qui contiendra toutes les actions
  

  constructor(private actionService: ActionService) {}

  ngOnInit() {
    // Chargez les actions depuis le service
    this.actions = this.actionService.getActions();
  }

  deleteAction(index: number) {
    // Appelez la méthode de suppression du service en utilisant l'index
    this.actionService.deleteAction(index);
  }
}
