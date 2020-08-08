import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PriceType from './PriceType';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3a827f",
    color: "#e9eff9",
  	"text-shadow": "1px 1px 1.1px black",
  },
}))(TableCell);

export default function CurrencyTable(props){

		return(
		<TableContainer component={Paper} style={{marginLeft: "30px", width:"90%"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          	<StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="right">Crypto Exchange</StyledTableCell>
            <StyledTableCell align="right">{props.type==PriceType.BUY ? "Buying Price" : "Selling Price"}</StyledTableCell>
          	<StyledTableCell align="right">Crypto Currency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        	
          {props.prices.map((row, index) => (
          	<TableRow key={index} style ={ index % 2 ? { background : "#edf7f8" }:{ background : "white" }}>
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="right">
                {row.exchange}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}

