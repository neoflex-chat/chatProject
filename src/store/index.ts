import {types} from 'mobx-state-tree'
import itemsStore from "./items";
const RootStore = types
    .model('RootStore', {
        items: types.optional(itemsStore,{})
    });

export default RootStore