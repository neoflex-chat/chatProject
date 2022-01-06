import axios from 'axios'

export default class ApiService {
    static getItems(serialName:string) {
        return axios.get(`https://api.tvmaze.com/search/shows?q=${serialName}`).then((res) => res.data)
    }
}
/*
export default class ApiService {
    static getItems () {
        return axios.get("https://api.tvmaze.com/search/shows?q=girls").then((res) => res.data)
    }
}*/
