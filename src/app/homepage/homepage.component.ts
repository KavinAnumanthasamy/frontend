import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) {}
  login(){
    this.router.navigate(['/signin']);
  }
  sellacar(){
    this.router.navigate(['/sellacar']);
  }
  explorecars(){
    this.router.navigate(['/explorecars']);
  }
  Serviceprovider(){
    this.router.navigate(['/serviceprovider']);
  }
  homepage(){
    this.router.navigate(['/homepage']);
  }
}
