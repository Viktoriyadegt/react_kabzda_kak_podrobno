export type StateType = {
    collapsed: boolean
}

export type ActionType = {type:  string}
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type){
        case 'TOGGLE_COLLAPSED':
            return {...state, collapsed: !state.collapsed};

        default:
            throw new Error(`Bad action type ${action.type}`);
    }

}