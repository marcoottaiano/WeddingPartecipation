import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore/lite';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { ToastContainer, toast } from 'react-toastify';

//mui
import {
  DataGrid,
  GridActionsCellItem,
} from '@mui/x-data-grid';

function Admin(props) {

  const columns = [
    // { field: 'pinsaId', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 100 },
    { field: 'surname', headerName: 'Cognome', width: 100 },
    { field: 'phone', headerName: 'Numero di telefono', width: 150 },
    { field: 'confirmation', headerName: 'Conferma', width: 100, type: 'boolean' },
    { field: 'menu', headerName: 'Menú', width: 200 },
    { field: 'notes', headerName: 'Note allergie/intolleranze', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Azioni',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={openModal.bind(this, id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [model, setModel] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // const firestore = getFirestore();

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    const col = collection(props.db, 'partecipations');
    const snapshot = await getDocs(col);
    const list = snapshot.docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    });
    setModel(list);
  }

  function handleOnSubmit() {
    if (form.username == 'ilariaeleonardo' && form.password == '123456') {
      setLoggedIn(true);
    } else {
      setError(true);
    }
  }

  function handleOnChange(e) {
    setError(false);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function goToHome() {
    props.login();
  }

  function openModal(id, evt) {
    setDeleteModal(true);
    setSelectedId(id);
    console.log(id);
  }

  async function confirmCancel() {
    await deleteDoc(doc(props.db, "partecipations", selectedId));
    toast.success('Eliminazione confermata!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      closeButton: false,
      style: {
        background: '#6869AA',
        color: 'white',
        borderRadius: '20px',
        border: '1px solid #E8E7EA',
        textAlign: 'center',
        margin: '10px 10px'
      },
    });
    getData();
    setDeleteModal(false);
  }

  return (
    <div id='control-panel'>
      <ToastContainer />
      {loggedIn ?
        <section id='admin-section'>
          <div className='admin text-decoration-underline' onClick={goToHome}>Indietro</div>
          <h1>
            Partecipanti
          </h1>
          <DataGrid
            style={{ width: '100%' }}
            rows={model}
            columns={columns}
            pageSizeOptions={[5, 10]}
            columnBuffer={150}
          />
          <Dialog
            open={deleteModal}
            onClose={() => setDeleteModal(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Confermare eliminazione?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={confirmCancel}>Confermo</Button>
              <Button onClick={() => setDeleteModal(false)}>
                Annulla
              </Button>
            </DialogActions>
          </Dialog>
        </section>
        :
        <section id='login-section'>
          <h1>
            Login
          </h1>
          {/* <hr className='divider' /> */}
          <FloatingLabel
            label="Username"
            className="floating-field">
            <Form.Control
              type="text"
              placeholder=""
              name='username'
              className='text-capitalize'
              onChange={handleOnChange}
              value={form.username}
            />
          </FloatingLabel>
          <FloatingLabel
            label="Password"
            className="floating-field">
            <Form.Control
              type="password"
              placeholder=""
              name='password'
              className='text-capitalize'
              onChange={handleOnChange}
              value={form.password}
            />
          </FloatingLabel>
          {error && <div className='error-msg'> Username e/o password errati </div>}
          <Button
            variant='primary'
            className='button-text mt-4 mb-4'
            size='lg'
            disabled={!form.username || !form.password}
            onClick={handleOnSubmit}
          >
            Login
          </Button>
          <div className='admin text-decoration-underline' onClick={goToHome}>Indietro</div>
        </section>
      }
    </div>
  )
}

export default Admin