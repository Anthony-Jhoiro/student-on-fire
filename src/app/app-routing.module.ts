import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NouveauTopicComponent } from './nouveau-topic/nouveau-topic.component';
import { ReadComponent } from './read/read.component';


const routes: Routes = [
  { path: "nouveauTopic", component: NouveauTopicComponent },
  { path: "read", component: ReadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
