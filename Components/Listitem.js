import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Dele from '@mui/icons-material/DeleteSweep';

function Listitem({ item,index, removeItem }) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <li className={clsx({ isliClicked: isClicked })} onClick={() => setIsClicked(!isClicked)} key={item.id}>{item.name}
            <IconButton style={{ color: 'white' }} aria-label="delete" 
            onClick={(e) => removeItem(index, item.id,item.name,e)}>
                <Dele />
            </IconButton>
        </li>
    )
}

export default Listitem