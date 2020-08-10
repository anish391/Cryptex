import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3a827f",
    color: "#e9eff9",
  	"text-shadow": "1px 1px 1.1px black",
  },
}))(TableCell);

export default function RecommendedTable(props){
    var {bitcoin, ethereum} = props.prices;
		return(
		<TableContainer component={Paper} style={{marginLeft: "30px", width: "95%"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Recommended</StyledTableCell>
            <StyledTableCell>Crypto Currency</StyledTableCell>
          	<StyledTableCell>Crypto Exchange</StyledTableCell>
            <StyledTableCell>Best Buying Price</StyledTableCell>
            <StyledTableCell>Crypto Exchange</StyledTableCell>
            <StyledTableCell>Best Selling Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow style={{background : "#fac71b36"}}>
            <TableCell align="center"><img src="https://img.icons8.com/fluent/24/000000/bitcoin.png" alt="Bitcoin icon."/></TableCell>
            <TableCell>Bitcoin</TableCell>
            <TableCell>{bitcoin[0].exchange}</TableCell>
            <TableCell>${bitcoin[0].amount}</TableCell>
            <TableCell>{bitcoin[1].exchange}</TableCell>
            <TableCell>${bitcoin[1].amount}</TableCell>
          </TableRow>
          <TableRow style={{background : "#e5e8f7"}}>
            <TableCell align="center"><img src="https://img.icons8.com/color/24/000000/ethereum.png" alt="Ethereum icon."/></TableCell>
            <TableCell>Ethereum</TableCell>
            <TableCell>{ethereum[0].exchange}</TableCell>
            <TableCell>${ethereum[0].amount}</TableCell>
            <TableCell>{ethereum[1].exchange}</TableCell>
            <TableCell>${ethereum[1].amount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>);
}

