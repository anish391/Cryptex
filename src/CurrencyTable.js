import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3AAFA9",
    color: "#e9eff9",
  	"text-shadow": "1px 1px 1.1px black"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const RecommendedTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3AAFA9",
    color: "#e9eff9",
  	"text-shadow": "1px 1px 1.1px black"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class CurrencyTable extends Component{

	render() {
			return(
			<TableContainer component={Paper}>
	      <Table aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <StyledTableCell>Crypto Exchange</StyledTableCell>
	            <StyledTableCell align="right">Price</StyledTableCell>
	            <StyledTableCell align="right">Crypto-currency</StyledTableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {this.props.prices.map((row, index) => (
	          	index==0 ? 
	            <TableRow key={index}>
	              <RecommendedTableCell component="th" scope="row">
	                {row.exchange}
	              </RecommendedTableCell>
	              <RecommendedTableCell align="right">{row.amount}</RecommendedTableCell>
	              <RecommendedTableCell align="right">{row.currency}</RecommendedTableCell>
	            </TableRow>
	            :<TableRow key={index}>
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