// src/app/components/action/action.component.ts
import { Component } from '@angular/core';
import { Action } from '../models/action.models';
import { ActionService } from '../services/action.service';
// import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-action',
  standalone: true,
  templateUrl: './action.component.html',
})
export class ActionComponent {
  action: Action = { name: '', objective: '', responsible: '', beneficiaries: 0, creationDate: new Date() };

  constructor(private actionService: ActionService) {}

  addAction(): void {
    this.actionService.addAction({ ...this.action });
    this.action = { name: '', objective: '', responsible: '', beneficiaries: 0, creationDate: new Date() };
  }
}
