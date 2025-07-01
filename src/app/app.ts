import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component'; // adjust path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent],  // include here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hello-world';
}
