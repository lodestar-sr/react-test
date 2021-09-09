import React, { useMemo } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useParams } from "../../hooks/useParams";
import { useUser } from "../../context/userContext";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import UserDetail from "../../components/UserDetail";
import { User } from "../../interfaces/user";
import UsersTable from "../../components/UsersTable";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  }
}));

const UserDetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { getUserById, getFriends } = useUser();

  const user: User | undefined = useMemo(() => getUserById(id), [id, getUserById]);

  if (!user) {
    return <div />
  }

  const friends = getFriends(user.friends);

  return (
    <div className={classes.root}>
      <Box marginBottom={2}>
        <Typography variant="h4" gutterBottom align="left">
          {user.name}
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <UserDetail user={user} />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.root}>
            <Typography variant="h6" align="left" gutterBottom>Friends</Typography>
            <UsersTable users={friends} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetailPage;
