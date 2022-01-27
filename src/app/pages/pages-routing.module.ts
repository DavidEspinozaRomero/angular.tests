/*  
CREATED BY: 	Carlos Sánchez
DATE:      	 	22-10-2021
HISTORY:    	2091
DESCRIPTION: 	Estructura FrontEnd
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboard/default/default.component';
import { ClassroomComponent } from './classroom/classroom/classroom.component';
import { RegisterComponent } from './register/register/register.component';
import { BonusesComponent } from './bonuses/bonuses/bonuses.component';
import { EmailsComponent } from './emails/emails/emails.component';
import { AttendanceComponent } from './attendance/attendance/attendance.component';
import { NewsComponent } from './community/news/news.component';
import { AlertsComponent } from './community/alerts/alerts.component';
import { PollsComponent } from './community/polls/polls.component';
import { YearbookComponent } from './community/yearbook/yearbook.component';
import { AcademicCalendarComponent } from './community/academic-calendar/academic-calendar.component';
import { FormalitiesComponent } from './community/formalities/formalities.component';
import { CourseComponent } from './reports/course/course.component';
import { IncidentsComponent } from './reports/incidents/incidents.component';
import { GeneralComponent } from './reports/general/general.component';
import { ReinforcementMaterialComponent } from './dashboard/reinforcement-material/reinforcement-material.component';
import { PersonalRepositoryComponent } from './dashboard/personal-repository/personal-repository.component';
import { PlanningComponent } from './planning/planning/planning.component';
import { PlanningReviewComponent } from './planning/planning-review/planning-review.component';
import { PcaComponent } from './planning/pca/pca.component';
import { PudComponent } from './planning/pud/pud.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  // inicio
  { path: 'dashboard', component: DefaultComponent },
  { path: 'dashboard/reinforcementmaterial', component: ReinforcementMaterialComponent },
  { path: 'dashboard/personalrepository', component: PersonalRepositoryComponent },

  // clases
  { path: 'classroom', component: ClassroomComponent },

  // registro
  { path: 'register', component: RegisterComponent },

  // comunidad
  { path: 'community/news', component: NewsComponent },
  { path: 'community/alerts', component: AlertsComponent },
  { path: 'community/polls', component: PollsComponent },
  { path: 'community/yearbook', component: YearbookComponent },
  { path: 'community/academic_calendar', component: AcademicCalendarComponent },
  { path: 'community/formalities', component: FormalitiesComponent },
  
  // reportes
  { path: 'reports/courses', component: CourseComponent },
  { path: 'reports/incidents', component: IncidentsComponent },
  { path: 'reports/general', component: GeneralComponent },

  // bonificaciones
  { path: 'bonuses', component: BonusesComponent },

  // planificaciones
  { path: 'planning/planning', component: PlanningComponent },
  { path: 'planning/planningreview', component: PlanningReviewComponent },
  { path: 'planning/planning/pca', component: PcaComponent },
  { path: 'planning/planning/pud', component: PudComponent },

  // correos
  { path: 'emails', component: EmailsComponent },

  // horarios / asistencias
  { path: 'attendance', component: AttendanceComponent },

  //clases 
//  { path: 'classroom/details', component: ClassEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
