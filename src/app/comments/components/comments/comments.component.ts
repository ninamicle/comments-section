import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as commentsActions from '../../store/comments.actions';
import * as selectComments from '../../store/comments.selectors';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments$ = this.store.select(selectComments.selectComments);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(commentsActions.getComments());
  }
}
