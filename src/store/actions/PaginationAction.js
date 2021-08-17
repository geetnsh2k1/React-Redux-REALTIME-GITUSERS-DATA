export const DECREASE = (action) => {
    return (dispatch) => {
        dispatch({
            type: "DECREASE",
        })
    }
}

export const INCREASE = (action) => {
    return (dispatch) => {
        dispatch({
            type: "INCREASE",
        })
    }
}

export const SET_PAGE = (action) => {
    return (dispatch) => {
        dispatch({
            type: "SET_PAGE",
            page: action.set_page
        })
    }
}

export const START_LOADING = (action) => {
    return (dispatch) => {
        dispatch({
            type: "START_LOADING",
        })
    }
}

export const STOP_LOADING = (action) => {
    return (dispatch) => {
        dispatch({
            type: "STOP_LOADING",
        })
    }
}

export const SET_SEARCH = (action) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SEARCH",
            search: action.search
        })
    }
}

export const SET_PERPAGE = (action) => {
    return (dispatch) => {
        dispatch({
            type: "SET_PERPAGE",
            per_page: action.per_page
        })
    }
}