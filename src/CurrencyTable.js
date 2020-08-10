import React from 'react';
import { withStyles} from '@material-ui/core/styles';
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
          	<StyledTableCell align="center">{props.currency}</StyledTableCell>
            <StyledTableCell >Crypto Exchange</StyledTableCell>
            <StyledTableCell >{props.type===PriceType.BUY ? "Buying Price" : "Selling Price"}</StyledTableCell>
          	<StyledTableCell >Crypto Currency</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.prices.map((row, index) => (
          	<TableRow key={index} style ={ 
                (index % 2 === 0) ?  
                  (index===0 ? (row.currency==="Bitcoin"? {background: "#fac71b36"} : {background: "#e5e8f7"}) : { background : "white" }): { background : "#d5e4e4" }}>
              <TableCell align="center" component="th" scope="row"> 
              {index===0 ?
               (row.currency==="Bitcoin" ? 
                 <img src="https://img.icons8.com/fluent/24/000000/bitcoin.png" alt="Bitcoin icon."/> : 
                 <img src="https://img.icons8.com/color/24/000000/ethereum.png" alt="Ethereum icon."/>
               ) 
               : null  } 
              </TableCell>
              <TableCell >
                {row.exchange}
              </TableCell>
              <TableCell >${row.amount}</TableCell>
              <TableCell >{row.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}

