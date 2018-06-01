import { RouterModule, Routes } from "@angular/router";
import { ServersComponent } from "./servers/servers.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

const appRoutes:Routes = [
    {path: '', redirectTo:'/recipes', pathMatch:'full'},
    {path: 'recipes', component:RecipesComponent, children:[
        {path: 'recipe-list', component:RecipeListComponent},
        {path: 'recipe-detail', component:RecipeDetailComponent}
    ]},
    {path:'shopping-list', component:ShoppingListComponent}
]

@NgModule( {
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}