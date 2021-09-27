import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ListItem from '../Components/Listitem'
import { Grid,Paper } from '@mui/material';
import Add from '@mui/icons-material/Add';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import Snackbar from '@mui/material/Snackbar';
import RestoreIcon from '@mui/icons-material/Restore';
import { v4 as uuidv4 } from 'uuid';
import {Alert,AlertTitle} from '@mui/material';



const TodoList = () => {
  const [todoList, setTodoList] = useState([])// setNewtodoList. todoList, setTodoList
  // [{id, name}]
  const [undoList,setUndoList]= useState([])
  const [taskName, setTaskname] = useState('')

  const vertical = 'bottom'
  const horizontal = 'left'

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [isSnackUndoOpen, setisSnackUndoOpen] = useState(false)


  function handleSubmit(e) {
    if (taskName.trim().length !== 0) {
      e.preventDefault();
      setTodoList([...todoList, { id: uuidv4(), name: taskName }]);
      setTaskname("");
    }
    else {
      setIsSnackbarOpen(true)

    }
  }

  function removeItem(index, id,name,e) {
    e.stopPropagation()
    console.log(id)
    setUndoList([...undoList, { id: id, name: name, indexOfRemovedItem:index }]);
    console.log(undoList)


    const newList = todoList.filter((item) => item.id !== id)
    console.log(newList)
    setTodoList(newList)

  }

  function undo(e){
    e.preventDefault()
    console.log(undoList)
    if(undoList.length !==0)
    {
    let newList=[...todoList]
    let newUndoList = [...undoList].reverse()

    // obj
    const elementToAddInList = undoList[newUndoList.length - 1]

  newList.splice(elementToAddInList.indexOfRemovedItem,0,elementToAddInList)

    let newUndoListOrignal = [...undoList]
    newUndoListOrignal.pop()
    setUndoList(newUndoListOrignal)
    console.log('newlist',newList)
    setTodoList(newList)
    }
    else{
      setisSnackUndoOpen(true)
    }
  }

  // find, findIndex, Entries, Splice, Slice, 

  const paperstyle = { padding: 20, width: 400, magin: "20px auto" }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
    setisSnackUndoOpen(false);
  };

  // setTaskname(name)
  // taskName = name
  return (
    <>
      {/* Make this into new component
    TodolistContainer
    */}
      <Grid align='center'>
        <Paper elevation={24} style={paperstyle}>
          <Grid align='center'>
            <AssignmentOutlinedIcon color='secondary' fontSize='large' />
            <form>
              <TextField id="outlined-basic" label="Task" variant="outlined" color="secondary" type="text" placeholder="Task here..." fullWidth required value={taskName} onChange={e => setTaskname(e.target.value)} />
              <Button variant="outlined" color="secondary" mt={10} fullWidth required startIcon={<Add />} onClick={handleSubmit}>Add To my List</Button>
              <Button variant="outlined" color="secondary" mt={10} fullWidth required startIcon={<RestoreIcon />} onClick={undo}>Undo my List</Button>
            </form>
            <PlaylistAddCheckOutlinedIcon color='secondary' fontSize='large' />
            <ul className='list'>
              {todoList.map((item, index) => (
                <ListItem item={item}
                  removeItem={removeItem}
                  index={index} />
              ))
              }
            </ul>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={3000}
            open={isSnackbarOpen}
            onClose={handleClose}>
            <Alert variant="outlined" severity="warning"><AlertTitle>Warning</AlertTitle>Please enter some message for add some to-do.</Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={ {vertical: 'bottom', horizontal: 'right'} }
            autoHideDuration={3000}
            open={isSnackUndoOpen}
            onClose={handleClose}>
            <Alert variant="outlined" severity="warning"><AlertTitle>Warning</AlertTitle>No Items Available for Undo, Please Delete some Items first...</Alert>
          </Snackbar>


        </Paper>
      </Grid>
    </>
  )
}

export default TodoList