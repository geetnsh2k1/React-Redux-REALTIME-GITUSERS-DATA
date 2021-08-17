const initialState = {
    since: 0,
    page: 1,
    per_page: 10,
    loading: false,
    search: null,
}

const PaginationReducer = (state=initialState, action) => {
    switch(action.type) {
        case "INCREASE": return {
            ...state,
            since: state.since+2*state.per_page,
            page: state.page+1,
        }
        case "DECREASE": return {
            ...state,
            since: (state.since-(2*state.per_page) < 0 ? 0 : state.since-(2*state.per_page)),
            page: state.page-1,
        }
        case "SET_PERPAGE": return{
            ...state, 
            per_page: action.per_page
        }
        case "SET_PAGE": return {
            ...state, 
            page: action.page, 
            since: 0,
        }
        case "START_LOADING": return {
            ...state, 
            loading: true,
        }
        case "STOP_LOADING": return {
            ...state, 
            loading: false
        } 
        case "SET_SEARCH": return {
            ...state,
            search: action.search
        }
        default: return state
    }
}

export default PaginationReducer