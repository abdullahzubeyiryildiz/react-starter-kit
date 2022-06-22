export default function reducer (state, action) {
    switch (action.type) {
        case 'TOOGLE_THEME': 
        return {
            ...state,
            theme: action.value
        }
        default :
    }
}