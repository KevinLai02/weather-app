import { makeAutoObservable } from 'mobx';
import MainStore from '../container/Main/store/MainStore'



export class RootStore {
    mainStore: MainStore
    
    constructor() {
        makeAutoObservable(this)

        this.mainStore = new MainStore()
        
    }
}
const rootStore = new RootStore()

export default rootStore;