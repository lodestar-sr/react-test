import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import UsersTable from "../../components/UsersTable";
import { useUser } from "../../context/userContext";
import { User } from "../../interfaces/user";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const UserListPage = () => {
  const classes = useStyles();
  const { users, totalCount }: { users: User[], totalCount: number } = useUser();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };


  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Typography variant="h4" gutterBottom align="left">
          Users
        </Typography>
        <Typography variant="h6">({totalCount})</Typography>
      </Box>
      <UsersTable users={users.slice((page - 1) * pageSize, page * pageSize)} startNo={(page - 1) * pageSize} />
      <Box display="flex" justifyContent="flex-end" padding={2}>
        <Select
          value={pageSize}
          onChange={(e: React.ChangeEvent<any>) => setPageSize(e.target.value)}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <Pagination color="primary" count={Math.ceil(totalCount / pageSize)} page={page} onChange={handleChange} />
      </Box>
    </div>
  );
};

export default UserListPage;
