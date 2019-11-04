export const Payments = (state, action) => {
    switch(action.type){
        case 'SET_DATA':
            return [...action.data]
        case 'ADD_DATA':
            return [{...action.addData}, ...state]
        case 'UPDATE_DATA':
            const oldState = state.filter(s => s.id !== action.updatedData.id);
            return [action.updatedData, ...oldState]
        case 'DELETE_DATA':
            return state.filter(s => s.id !== action.id)
        default:
            return state
    }
}