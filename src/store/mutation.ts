import { State } from './state'

export default {
    change (state: State, v: any) {
        state.navSel = v
    }
}