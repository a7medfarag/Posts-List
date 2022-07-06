import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/interface/post.interface';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts!:Post[];
  constructor(private _posts:PostsService) { }

  ngOnInit(): void {
    this._posts.posts.subscribe(
      res=>{
        this.posts = res
        console.log(res);
      }
      )
      this.getPosts()
    }
    getPosts(){
      this._posts.loadPosts()
    }

    pressLike(event , id:any){
      this._posts.like_and_dislike(id)
    }
}
