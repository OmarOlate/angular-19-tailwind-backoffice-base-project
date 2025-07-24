import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse, HttpStatusCode } from "@angular/common/module.d-CnjH8Dlt";
import { Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject, catchError, finalize, map, Observable, Subject, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { DeactivateUserForPasswordDto } from "../dtos/deactivate-user-for-password.dto";

@Injectable({
    providedIn: 'root'
})
export class ExternalDeactivateUserForPasswordService{
    readonly #isLoading$ = new BehaviorSubject(false);
    readonly #error$ = new Subject<HttpStatusCode | undefined>

    readonly $isLoading = toSignal(this.#isLoading$, {initialValue: false});
    readonly $error = toSignal(this.#error$);
    readonly $hasError = toSignal(
      this.#error$.pipe(map((code) => code !== undefined)),
    );
    
    constructor(private httpClient: HttpClient){}

    deactivate(input: DeactivateUserForPasswordDto): Observable<{statusCode: number, message: string}>{
        this.#isLoading$.next(true);

        return this.httpClient.put<{statusCode: number, message: string}>(
            `${environment.baseUrl}/login/external-deactivate-user-for-password`, {
                email: input.email
            }
        ).pipe(
            tap(()=> this.#isLoading$.next(true)),
            tap(() => this.#error$.next(undefined)),
            catchError((error: HttpErrorResponse) =>{
                console.log(`Error: ${error.status}`);
                  this.#error$.next(error.status);
                  this.#isLoading$.next(false);
                  return throwError(() => error);
            }),
            finalize(() => {
                this.#isLoading$.next(false);
            })
        )
    }
    
}