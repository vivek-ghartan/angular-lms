import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconCardComponent} from './icon-card/icon-card.component';
import {AdvantageComponent} from './advantage/advantage.component';
import { LearningComponent } from './learning/learning.component';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [
    IconCardComponent,
    AdvantageComponent,
    LearningComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconCardComponent,
    AdvantageComponent,
    LearningComponent
  ]
})
export class SharedModule { }
