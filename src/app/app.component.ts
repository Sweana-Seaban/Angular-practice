import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestComponent,
    NgClass,
    NgStyle,
    FormsModule,
    NgIf,
    NgFor,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeModule,
    AdminModule,
    NameEditorComponent,
    ProfileEditorComponent,
  ],
  template: '',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  styles = {
    color: 'purple',
    fontStyle: 'italic',
  };
  title = 'hello-world';
  receivedText: string = '';
  initialCount = 0;
  a = 10;
  b = 20;
  colors = ['blue', 'green', 'yellow'];
  userName: string = '';
  // isActive = false;

  receiveText(text: string) {
    this.receivedText = text;
  }

  name: string = 'Sweana';

  ngOnInit() {
    console.log(`ngOnInit initializing with name: ${this.name}`);
  }
  // changeName() {
  //   this.name = 'Sweaba';
  // }

  updateText(event: KeyboardEvent) {
    this.name = 'Nacho';
  }

  alert(input: string) {
    console.log('Name is: ', input);
  }
}
