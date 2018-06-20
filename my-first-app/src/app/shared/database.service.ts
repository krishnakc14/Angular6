import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DatabaseService{

    constructor(private http:HttpClient, private authService:AuthService){}

    getRecipe(){

        const token = this.authService.getToken();

        return this.http.get<Recipe[]>('https://ng-recipe-book-29ced.firebaseio.com/recipes.json?auth='+token, {
            observe:'body',
            responseType:'json'
        }).pipe(map(
            (response) => {
                console.log("In Service "+response);
                return response;
            }
        ))

       

    }   

    saveRecipe(recipe:Recipe[]){

        const token = this.authService.getToken();

        console.log(recipe);
      // return this.http.put('https://ng-recipe-book-29ced.firebaseio.com/recipes.json', recipe);
      const myRequest = new HttpRequest('PUT', 'https://ng-recipe-book-29ced.firebaseio.com/recipes.json?auth='+token, recipe, 
                                        {reportProgress:true});
    
       return this.http.request(myRequest);

    }

}