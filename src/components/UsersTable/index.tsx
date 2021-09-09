import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiChip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { common } from "@material-ui/core/colors";

import { User } from "../../interfaces/user";
import { useHistory } from "../../hooks/useParams";
import Chip from "../Chip";

const columns = [
  {
    name: 'no',
    label: 'No'
  },
  {
    name: 'avatar',
    label: 'Avatar'
  },
  {
    name: 'name',
    label: 'Name'
  },
  {
    name: 'age',
    label: 'Age'
  },
  {
    name: 'weight',
    label: 'Weight'
  },
  {
    name: 'height',
    label: 'Height'
  },
  {
    name: 'hair_color',
    label: 'Hair Color'
  },
  {
    name: 'professions',
    label: 'Professions'
  },
  {
    name: 'action',
    label: ''
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  hair: {
    color: common.white,
  },
  thead: {
    fontWeight: 700,
  }
}));

interface UsersTableProps {
  users: User[];
  startNo?: number;
}

const UsersTable = ({ users, startNo = 0 }: UsersTableProps) => {
  const classes = useStyles();
  const history  = useHistory();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((column) => (
                <TableCell key={column.name} className={classes.thead}>{column.label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((user: User, index: number) => (
              <TableRow key={user.id}>
                <TableCell>{startNo + index + 1}</TableCell>
                <TableCell>
                  <Avatar alt="photo" src={user.thumbnail} />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.weight}</TableCell>
                <TableCell>{user.height}</TableCell>
                <TableCell>
                  <Chip label={user.hair_color} color={user.hair_color.toLowerCase()}/>
                </TableCell>
                <TableCell>
                  {
                    user.professions && user.professions.map(item => <MuiChip key={item} label={item} className={classes.chip} />)
                  }
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    startIcon={<VisibilityIcon />}
                    onClick={() => {
                      history.push(`/users/${user.id}`)
                    }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
