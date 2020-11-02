
import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import { makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function FriendCard(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 800,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <div>
              <TableCell>
                Name<h3>{props.friends.name}</h3>
              </TableCell>
              <TableCell>
                ID#<p>{props.friends.id}</p>
              </TableCell>
              <TableCell>
                Age<p>{props.friends.age}</p>
              </TableCell>
              <TableCell>
                Email<p>{props.friends.email}</p>
              </TableCell>
            </div>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}