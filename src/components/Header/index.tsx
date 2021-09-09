import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"><Link href="/" color="inherit">Pro React Test</Link></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
