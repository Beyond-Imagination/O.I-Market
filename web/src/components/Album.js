import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
});

const tileData = [
   {
      img: "https://source.unsplash.com/random",
     title: 'Image',
     author: 'author',
     cols: 1,
   },
   {
    img: "https://source.unsplash.com/random",
   title: 'Image',
   author: 'author',
   cols: 2,
 },{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 3,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 2,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 4,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 3,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 2,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 5,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 5,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 3,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 4,
},{
  img: "https://source.unsplash.com/random",
 title: 'Image',
 author: 'author',
 cols: 1,
},
 ];
  
class Album extends Component {
  render () {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <main className={classes.content}>
          <GridList cellHeight={160} className={classes.cardGrid} cols={12}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Album);
