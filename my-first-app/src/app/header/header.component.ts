import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { DatabaseService } from '../shared/database.service';
import { Response } from '@angular/http';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DatabaseService]
})
export class HeaderComponent implements OnInit {

  myRecipe:Recipe[];
  myStoredRecipe:Recipe[];
  percentage = 0;
  inProgress = false;

  constructor(private recipeService:RecipeService, private databaseService:DatabaseService, 
              private authService:AuthService) { }

  ngOnInit() {
    this.myRecipe = this.recipeService.getRecipe();
    this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[]) => {
        this.myRecipe = recipe;
      }
    );
  }

  // this.databaseService.saveRecipe(this.myRecipe).subscribe(
  //   (response:HttpResponse<Recipe[]>) => {
  //     // this.percentage = 
  //     console.log("This is the First Subscriprion: "+response.body);
  //   }
  // );

  OnSaveData(){
    this.inProgress = true;

    setTimeout(() => {
      console.log("Slowing the process");
      this.databaseService.saveRecipe(this.myRecipe).subscribe(
        (response:HttpResponse<Recipe[]>) => {
          // this.percentage = 
          console.log("This is the First Subscriprion: "+response);
        }
      );
    }, 5000);

    

    setTimeout(() => {
      console.log("Slowing the process dobara");
      this.databaseService.saveRecipe(this.myRecipe).subscribe(event => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
         this.percentage = Math.round(100 * event.loaded / event.total);
          console.log(`File is ${this.percentage}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });
    }, 5000);

    setTimeout(() => {
      console.log("Slowing the process theesra");
      this.inProgress = false;
    }, 5000);


    
  }

  OnFetchData(){
     this.databaseService.getRecipe().subscribe(
       (recipe:Recipe[]) => {
        
         this.recipeService.setRecipe(recipe);
         console.log("Inside "+this.myStoredRecipe);
       }
     );

  }

  onLogout(){
    this.authService.onLogout();
    
  }

}
