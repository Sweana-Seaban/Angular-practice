import {
  Component,
  inject,
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
import { HttpClient, HttpParams } from '@angular/common/http';

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
  http: HttpClient = inject(HttpClient);

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
    this.getAllObjects();
    this.createObject();
    this.getObjectById();
    this.updateObject(7);
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

  //get method - without parameters
  private getAllObjects() {
    this.http
      .get('https://api.restful-api.dev/objects')
      .subscribe((response) =>
        console.log('response from get without parameters', response)
      );
  }

  //post method
  private createObject() {
    this.http
      .post(
        'https://api.restful-api.dev/objects',
        {
          name: 'Apple MacBook Pro 16',
          data: {
            year: 2019,
            price: 1849.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
          },
        },
        { headers: { 'my-header': 'my custom header' } }
      )
      .subscribe((response) => console.log('response from post', response));
  }

  //get method - with parameters(query string)
  private getObjectById() {
    const params = new HttpParams().set('id', 7);
    this.http
      .get('https://api.restful-api.dev/objects', { params })
      .subscribe((response) =>
        console.log('response from get with parameters', response)
      );
  }

  //put method
  private updateObject(id: number) {
    this.http
      .put(
        `https://api.restful-api.dev/objects/${id}`,
        {
          name: 'Apple MacBook Pro 16',
          data: {
            year: 2019,
            price: 2049.99,
            'CPU model': 'Intel Core i9',
            'Hard disk size': '1 TB',
            color: 'silver',
          },
        },
        { headers: { 'my-header': 'my custom header for update' } }
      )
      .subscribe((response) => console.log('response from put', response));
  }
}
