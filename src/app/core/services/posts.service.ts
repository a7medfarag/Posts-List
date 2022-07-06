import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: BehaviorSubject<Post[]> = new BehaviorSubject(null)
  constructor(private _http: HttpClient) { }

  getPosts() {
    return this.posts.getValue()
  }
  setPosts(data:any) {    
    this.posts.next(data)
  }
  loadPosts() {    
    this._http.get(`${environment.base_url}/home/posts`).subscribe(
      (res:any)=>this.setPosts(res.data.posts)
      
    )
  }
  like_and_dislike(id:any){
    this._http.post(`${environment.base_url}/posts/${id}/like-unlike` , {}).subscribe(
      (res:any)=> {
        let newPostsData = this.getPosts().map(post=>{
          if(post.id == id){
            post = res.data
          }
          return post
        }) 
        this.setPosts(newPostsData)
      }
      
    )
  }
}
