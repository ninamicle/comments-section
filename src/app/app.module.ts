import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CommentComponent } from './comments/components/comment/comment.component';
import { CommentsComponent } from './comments/components/comments/comments.component';
import { COMMENTS_EFFECTS, COMMENTS_REDUCERS } from './comments/store';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent, CommentComponent, CommentsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { comments: COMMENTS_REDUCERS },
      {
        runtimeChecks: { strictActionTypeUniqueness: true },
      }
    ),
    EffectsModule.forRoot(COMMENTS_EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
