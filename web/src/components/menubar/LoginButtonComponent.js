import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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
            <Grid align-items-xs-center justify-xs-flex-end>
                <Button href="#" variant="outlined" className={classes.link}>
                    Login
                </Button>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginButtonComponent);
