import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[]=[];  
  name:any;
  constructor(private heroService:HeroesService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.getAllHeroes();
  }


  getAllHeroes():void{
    this.heroService.getAllHeroes().subscribe(heroes=>{
     this.heroes = heroes; 
     this.messageService.addMessage('All Heros Fetched','success');
    });
  }

  insertHero()
  {

    const hero = new Hero(this.name);
    this.heroService.insertHero(hero).subscribe(hero=>{
      this.heroes.push(hero);
      this.messageService.addMessage('Hero Added Successfully','success');
    });
  }

  deleteHero(hero:Hero){
    this.heroService.deleteHero(hero).subscribe(res=>{
    this.heroes=   this.heroes.filter(her => her.id !== res.id);
      this.messageService.addMessage('Hero Is Deleted','danger');
    },
    (err)=>{this.messageService.addMessage('An Error Occured','danger')}
    );
  }

  updateHero()
  {
    
  }
}
