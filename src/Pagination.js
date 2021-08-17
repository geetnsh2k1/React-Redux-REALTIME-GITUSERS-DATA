import React from 'react';

import { bindActionCreators } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from "./store/actions/index"

import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';

export default function TablePaginationDemo() {
  const state = useSelector((state) => (state))

  const dispatch = useDispatch()
  const { INCREASE, DECREASE, SET_PERPAGE, SET_PAGE, START_LOADING, STOP_LOADING } = bindActionCreators(actionCreators, dispatch)

  const handleChangePage = (event, newPage) => {

    if(newPage > state.PaginationReducer.page) {
        START_LOADING()
        setTimeout(() => {
            STOP_LOADING()
            INCREASE()
        }, 2500)
    } else {
        START_LOADING()
        setTimeout(() => {
            STOP_LOADING()
            DECREASE()
        }, 2500)
    }

  };

  const handleChangeRowsPerPage = (event) => {
    SET_PERPAGE({per_page:event.target.value})
    SET_PAGE({set_page: 0})
  };

  return (
    <Typography variant="h1" component="h2" gutterBottom>
      <TablePagination
        component="div"
        count={5000}
        page={state.PaginationReducer.page}
        onPageChange={handleChangePage}
        rowsPerPage={state.PaginationReducer.per_page}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{color:"#fff"}}
      />
    </Typography>
  );
}
