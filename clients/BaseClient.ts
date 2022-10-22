import { Authorization } from "../typings";

export default class BaseClient {
    URL: string;
    auth: Authorization

    constructor(baseURL: string, authorization: Authorization) {
        this.URL = baseURL
        this.auth = authorization
    }

    public postMethod(route: string, body: any) {
        return fetch(this.URL + route, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                ...this.auth
            }
        })
    }

    public getMethod(route: string, body: any) {
        return fetch(this.URL + route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                ...this.auth
            }
        })
    }
}