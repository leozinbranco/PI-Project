import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DataGrid, GridToolbar, GridFilterItem } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Image from "next/image";
import dataBase from "../dataExample";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";


import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
const columns = [
  {
    field: "num_OS",
    headerName: "Nº ordem de serviço",
    width: 200,
    editable: true,
  },
  {
    field: "stts_andamento_OS",
    headerName: "Andamento",
    width: 130,
    editable: true,
  },
  {
    field: "date_inicio_OS",
    headerName: "Data início ",
    type: "dateTime",
    width: 130,
    editable: true,
  },
  {
    field: "date_fim_OS",
    headerName: "Data fim",
    type: "dateTime",
    width: 130,
    editable: true,
  },
];

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.name?.trim() === "") {
            reject();
          } else {
            resolve(user);
          }
        }, 200)
      ),
    []
  );
};


export default function Home() {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef(null);
  const [promiseArguments, setPromiseArguments] = React.useState(null);

  const [snackbar, setSnackbar] = React.useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    (newRow, oldRow) =>
      new Promise((resolve, reject) => {
        console.log(newRow);
        console.log(randomUpdatedDate)
        // if (mutation) {
          // Save the arguments to resolve or reject the promise later
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        // } else {
          // resolve(oldRow); // Nothing was changed
        // }
      }),
    []
  );

  React.useEffect(() => {
    console.log(dataBase);
  }, [dataBase]);

  const handleNo = () => {
    const { oldRow, resolve } = promiseArguments;
    resolve(oldRow); // Resolve with the old row to not update the internal state
    setPromiseArguments(null);
  };

  const handleYes = async () => {
    const { newRow, oldRow, reject, resolve } = promiseArguments;

    try {
      // Make the HTTP request to save in the backend
      const response = await mutateRow(newRow);
      setSnackbar({ children: "User successfully saved", severity: "success" });
      resolve(response);
      setPromiseArguments(null);
    } catch (error) {
      setSnackbar({ children: "Name can't be empty", severity: "error" });
      reject(oldRow);
      setPromiseArguments(null);
    }
  };

  const handleEntered = () => {
    // The `autoFocus` is not used because, if used, the same Enter that saves
    // the cell triggers "No". Instead, we manually focus the "No" button once
    // the dialog is fully open.
    // noButtonRef.current?.focus();
  };

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;
    // const mutation = computeMutation(newRow, oldRow);

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Edição</DialogTitle>
        <DialogContent dividers>
          {'\nVocẽ tem certeza que deseja editar esse campo?\n'}
        </DialogContent>
        <DialogActions>
          <Button ref={noButtonRef} onClick={handleNo}>
            No
          </Button>
          <Button onClick={handleYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <main className={styles.page}>
      <div className={styles.floatContainer}>
        <div className={styles.menuContainer}>
          <Image
            src="/Personal data-rafiki.svg"
            alt="Perfil image"
            width={200}
            height={200}
            style={{ marginTop: "20px" }}
          />
          <div style={{ width: "100%" }}>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    style={{ color: "#FFFFF" }}
                    primary={
                      <Typography type="body2" style={{ color: "#FFFFFF" }}>
                        Criar Nova Ordem
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    primary={
                      <Typography type="body2" style={{ color: "#FFFFFF" }}>
                        MyTitle
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
        <div className={styles.dataContainer}>
          {/* <div className={styles.btn}> */}
          <div>
            <div className={styles.btn}>
              <span className={styles.title}>Ordens de serviço</span>
              <Button size="large" variant="contained">
                LOGIN
              </Button>
            </div>
            <div className={styles.btn}>
              {/* <TextField
               
                
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                size="small"
                className={styles.textFieldLogin}
              ></TextField> */}
            </div>
            <div style={{ paddingLeft: "20px" }}></div>
          </div>

          <DataGrid
            components={{ Toolbar: GridToolbar }}
            style={{ marginTop: "20px" }}
            columns={columns}
            pageSize={5}
            rows={dataBase}
            editMode="cell"
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            // checkboxSelection
            processRowUpdate={processRowUpdate}
            experimentalFeatures={{ newEditingApi: true }}
            rowsPerPageOptions={[5]}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
          {!!snackbar && (
            <Snackbar
              open
              onClose={handleCloseSnackbar}
              autoHideDuration={6000}
            >
              <Alert {...snackbar} onClose={handleCloseSnackbar} />
            </Snackbar>
          )}
        </div>
      </div>
      {renderConfirmDialog()}
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </main>
  );
}
