import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
//   posts: any[] = [];
//   constructor(private http:HttpClient, private apiService: ApiService) {
//     this.loadPosts();
//   }
//   loadPosts() {
//     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((responce) => {
//       alert(JSON.stringify(responce));
//   });
//  }
}
