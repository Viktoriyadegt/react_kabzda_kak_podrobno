import {reducer, StateType} from "./reducer";


test('collapsed should be true', ()=>{

    const state:StateType = {
        collapsed: false,
    }

    const newState:StateType = reducer(state, {type: 'TOGGLE_COLLAPSED'})


    expect(newState.collapsed).toBe(true)

})
