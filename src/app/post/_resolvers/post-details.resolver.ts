import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { PostService } from '../_services/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<any> {

  constructor(
    private postservice: PostService,
    private router: Router
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.postservice.getpost(route.params.id).pipe(
      ((response: any) => {
        return response;
      }),
      catchError(error => {
        this.router.navigate(['/404']);
        return error;
      })
    );

  }
}
