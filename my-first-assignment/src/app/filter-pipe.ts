import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'filterpipe'
})
export class FilterPipe implements PipeTransform{

    transform(value:any, filterfor:string, filterArg:string){

        console.log(value);
        console.log(value.length);
        console.log(filterArg);
        console.log(filterfor);
        // if(value.length > argument){
        //     console.log( value.substr(0,argument));
        //     return value.substr(0,argument);
            
        // }else {
        //     return value;
        // }
      
        if(value.length === 0 || filterfor === ''){
            return value;
        }
        
        const len = filterfor.length;
        const newArr = [];
        for(let item of value){
           
            if(item[filterArg].substr(0,len) === filterfor){
                newArr.push(item);
            }
        }
        return newArr;
           

      
       

    }
}