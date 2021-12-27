import {types, flow} from 'mobx-state-tree'
import ApiService from "../api";
import axios from "axios";

const item = types
    .model('item', {
        id: types.optional(types.identifierNumber,0),
        name: types.string,
        genres: types.string,
        rating: types.maybeNull(types.number),
        picture: types.maybeNull(types.string),
        url: types.string
    })

const itemsStore = types
    .model('itemsStore', {
        items: types.maybeNull(types.array(item))
    })
    .actions(self => {
        return {
            load: flow(function* (quest) {
                self.items = yield ApiService.getItems(quest).then((response) => {
                    return response.map( (item:any ) =>
                        ({


                                id: item.show.id,
                                    name: item.show.name || 'name',
                                genres: item.show.genres.length ? item.show.genres.join(', ') : '',
                                rating: item.show.rating?.average,
                                picture: item.show.image?.medium, url: item.show.url
                        })



                    )


                })
            })/*,
            loadAPI(api:string){

            }*/
        }
    });

export default itemsStore;