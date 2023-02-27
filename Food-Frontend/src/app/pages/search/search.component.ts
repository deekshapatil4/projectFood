import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute  } from '@angular/router';
//  import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm=''
  route: any;


  construtor( activatedRoute:ActivatedRoute ,route :Router

  ){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.searchTerm=params.searchTerm;
    });
  }

//
  ngOnInit(): void {

  }
  search(term:string){
    if(term)
    this.route.navigate(['/search/'+term]);
  }

}
