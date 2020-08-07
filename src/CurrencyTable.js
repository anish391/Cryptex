import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const classes = {
  table: {
    minWidth: 650,
  },
  rowC: {
  	"display":"flex", 
  	"flex-direction":"row"
  }

};

class CurrencyTable extends Component{

	render() {
			return(
			<TableContainer component={Paper}>
	      <Table className={classes.table} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell>Crypto Exchange</TableCell>
	            <TableCell align="right">Price</TableCell>
	            <TableCell align="right">Crypto-currency</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {this.props.prices.map((row, index) => (
	            <TableRow key={index}>
	              <TableCell component="th" scope="row">
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
}

export default CurrencyTable;