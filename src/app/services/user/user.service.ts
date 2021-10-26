import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.base_url;

  constructor(private router: Router) { }

  get authorization(): string {
    return localStorage.getItem('authorization') || '';
  }

  get headers() {
    return { headers: { 'authorization': (('Bearer ').concat(this.authorization)) } }
  }

  savedLocalStorage(authorization: string) {
    localStorage.setItem('authorization', authorization);
  }

  async getUser() {
    return await axios.get<User>(`${this.url}/users`, this.headers)
  }

  async getUserById(id: string) {
    return await axios.get<User>(`${this.url}/users/${id}`, this.headers)
  }

  async createUser(formData: User) {
    return await axios.post(`${this.url}/users`, formData)
      .then(({ data }) => {
        this.savedLocalStorage(data.token)
      })
  }

  async deleteUser(id: string) {
    return await axios.delete(`${this.url}/users/${id}`, this.headers)
      .then((user) => {
        return user
      })
  }


  /* Login */
  async loginUser(formData: User) {
    return await axios.post(`${this.url}/auth`, formData)
      .then(({ data }) => {
        this.savedLocalStorage(data.token)
        return data
      })
  }

  /* Logout */
  logout() {
    localStorage.removeItem('authorization');
    this.router.navigateByUrl('/login');
  }

}


