// src/app/services/action.service.ts
import { Injectable } from '@angular/core';
import { Action } from '../models/action.models';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
    private actions: any[] = [];
    
    constructor() {
      // Exemple d'actions initiales (vous pouvez les charger à partir d'une source externe)
      this.actions = [
        { name: 'Action 1', objective: 'Objective 1', responsible: 'John Doe', beneficiaries: 10 },
        { name: 'Action 2', objective: 'Objective 2', responsible: 'members', beneficiaries: 20 },
    
      ];
    }
  
  addAction(action: Action): void {
    action.creationDate = new Date();
    this.actions.push(action);
  }


  deleteAction(index: number): void {
    if (index >= 0 && index < this.actions.length) {
      this.actions.splice(index, 1);
    }
  }
  getActions(): Action[] {
    return this.actions;
  }
}
