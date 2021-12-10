import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
interface Train {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises:Exercise[]=[];
  constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
    this.exercises=this.trainingService.getAvailableExercises();
  }
  onStartTraining(form:NgForm){
    console.log(form.value.exercise);
    
    this.trainingService.startExercise(form.value.exercise);

  }

}