import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  openSuccessSnackBar(message: string, duration: number = 4000) {
    this.snackBar.open(`${message}`, "", {
      duration: duration,
      verticalPosition: 'top',
      panelClass: ['alert-result'],
    });
  }

  openFailureSnackBar(message: string, duration: number = 4000) {
    this.snackBar.open(`${message}`, "", {
      duration: duration,
      verticalPosition: 'top',
      panelClass: ['error-result'],
    });
  }
}
