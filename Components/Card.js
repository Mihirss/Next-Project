import React from 'react'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';





function card({ item }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    // const name= item.first_name
    console.log(name)
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
    };
  }
  return (

      <Grid align='center' item xl={6} md={12}>
        <item>
        <Card>
          <div className="card">
            <div className="card-columns">
              <div class="card-header">
                <Avatar {...stringAvatar(item.first_name)} />
                {item.first_name}
              </div>
              <img src={item.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name: {item.first_name}</h5>
                <p className="card-text">Email:{item.email}</p>
              </div>
              <div class="card-footer">
                <FavoriteIcon />
                <ShareIcon />
              </div>
            </div>
          </div>
        </Card>
        </item>
      </Grid>

  )
}

export default card
