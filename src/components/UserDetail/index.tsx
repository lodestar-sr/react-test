import React from 'react';
import Paper from "@material-ui/core/Paper";
import { User } from "../../interfaces/user";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "../Chip";
import MuiChip from "@material-ui/core/Chip";

interface UserDetailProps {
  user: User;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  chip: {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  wrapper: {
    maxWidth: 300,
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const UserDetail = ({ user }: UserDetailProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" align="left" gutterBottom>User Detail</Typography>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Avatar alt="photo" className={classes.avatar} src={user.thumbnail} />
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Name</Typography>
        <Typography>{user.name}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Age</Typography>
        <Typography>{user.age}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Weight</Typography>
        <Typography>{user.weight}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Height</Typography>
        <Typography>{user.height}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Hair Color</Typography>
        <Chip label={user.hair_color} color={user.hair_color.toLowerCase()} />
      </Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography>Professions</Typography>

        <div className={classes.wrapper}>
          {
            user.professions && user.professions.map(item => <MuiChip key={item} label={item} className={classes.chip} />)
          }
        </div>
      </Box>
    </Paper>
  );
};

export default UserDetail;
