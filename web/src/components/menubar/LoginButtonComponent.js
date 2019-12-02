import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    link: {
        margin: theme.spacing(1, 1.5),
      },
  });

class LoginButtonComponent extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <Button href="#" variant="contained" className={classes.link}>
                Login
            </Button>
        );
    }
}

export default withStyles(styles)(LoginButtonComponent);
