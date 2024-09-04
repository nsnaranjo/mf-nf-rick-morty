import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { login } from "../../state";
import { LoginDTO } from "../../dtos";

@Injectable({
  providedIn: "root",
})
export class LoginUseCase {
  constructor(private store: Store) {}

  execute(loginDTO: LoginDTO) {
    this.store.dispatch(login({ loginDTO }))
  }
}