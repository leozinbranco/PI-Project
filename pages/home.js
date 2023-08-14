import styles from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogContentText from "@mui/material/DialogContentText";
import { DataGrid, GridToolbar, GridFilterItem } from "@mui/x-data-grid";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import dataBase from "../dataExample";
import * as React from "react";
import Form from "../components/newOs";
import NewClient from "../components/newClient";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import config from "../config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
const columns = [
  {
    field: "num_OS",
    headerName: "Nº OS",
    width: 100,
    editable: false,
  },
  {
    field: "nome_pessoa",
    headerName: "Nome do cliete",
    width: 180,
    editable: true,
  },
  {
    field: "tipo_equip",
    headerName: "Tipo",
    width: 100,
    editable: true,
  },
  {
    field: "desc_equip",
    headerName: "Equipamento",
    width: 240,
    editable: true,
  },
  {
    field: "stts_andamento_OS",
    headerName: "Situação",
    width: 130,
    editable: true,
  },
  {
    field: "date_inicio_OS",
    headerName: "Data início ",
    type: "dateTime",
    width: 110,
    editable: true,
  },
  {
    field: "data_ult_update_OS",
    headerName: "Ultima modificação",
    width: 150,
    editable: true,
  },
  {
    field: "ramal_func",
    headerName: "Contato técnico",
    width: 140,
    editable: true,
  },
  {
    field: "email_func",
    headerName: "Email técnico",
    width: 180,
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

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef(null);
  const [promiseArguments, setPromiseArguments] = React.useState(null);
  const [dataOs, setDataOs] = React.useState([]);
  const [changeTabNewUser, setChangeTabNewUser] = React.useState(false);
  const [changeTabNewOS, setChangeTabNewOs] = React.useState(false);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(null);
  const [newOs, setNewOs] = React.useState(null);
  const [newClient, setNewClient] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleCloseSnackbar = () => setSnackbar(null);

  const handleOpenDialog = (title, desc) => {
    setTitle(title);
    setDesc(desc);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  async function fetchData() {
    await fetch(`/api/getOs/10`).then(async (data) => {
      const response = await data.json();
      console.log("DATABASE#$$$$$$$$$$$$$$4>>>", response);
      setDataOs(response);
      // console.log("DATABASE#$$$$$$$$$$$$$$4>>>", dataOs);
    });
  }
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    console.log("######################@@@@@@@@@@@@@@@@@@@ ", newClient);

    async function postNewClient() {
      console.log("NEW Client<>", newClient);
      await fetch(`/api/cliente/insertClient`, {
        method: "POST",
        body: JSON.stringify(newClient),
      })
        .then((res) => {
          // console.log("RES>>", res);
          console.log("CHEGOU NESSE IF!!");
          if (res.status === 200) {
            handleOpenDialog("Sucesso!", "Cliente cadastrado!");
          } else {
            handleOpenDialog("Erro!", "Não foi possível cadastrar o cliente!");
          }
        })
        .catch((err) => {});
    }
    if (newClient) postNewClient();
  }, [newClient]);

  React.useEffect(() => {
    async function postNewOs() {
      console.log("NEW Os<>", newOs);
      await fetch(`/api/os/new`, {
        method: "POST",
        body: JSON.stringify(newOs),
      })
        .then((res) => {
          // console.log("RES>>", res);
          if (res.status === 200) {
            handleOpenDialog("Sucesso!", "Nova OS Cadastrada!");
          } else {
            handleOpenDialog("Erro!", "Cliente não encontrado!");
          }
        })
        .catch((err) => {});
    }
    console.log(newOs);
    console.log("EXECUTOU?");
    if (newOs) {
      console.log("SSS");
      postNewOs();
    }
  }, [newOs]);

  const renderConfirmDialog = () => {
    if (!promiseArguments) {
      return null;
    }

    const { newRow, oldRow } = promiseArguments;

    return (
      <Dialog
        maxWidth="xs"
        TransitionProps={{ onEntered: handleEntered }}
        open={!!promiseArguments}
      >
        <DialogTitle>Edição</DialogTitle>
        <DialogContent dividers>
          {"\nVocẽ tem certeza que deseja editar esse campo?\n"}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <main className={styles.page}>
      {/* <div className={styles.floatContainer}> */}
      <div className={styles.menuContainer}>
        <Modal open={open} onClose={handleClose}>
          <Box sx={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {desc}
            </Typography>
            <Button
              ref={noButtonRef}
              style={{ marginTop: "30px" }}
              onClick={handleClose}
            >
              Ok
            </Button>
          </Box>
        </Modal>
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
              <ListItemButton
                onClick={() => {
                  setChangeTabNewOs(false);
                  setChangeTabNewUser(false);
                  fetchData();
                }}
              >
                <ListItemText
                  style={{ color: "#FFFFF" }}
                  primary={
                    <Typography type="body2" style={{ color: "#FFFFFF" }}>
                      Listar ordens
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setChangeTabNewOs(true);
                  setChangeTabNewUser(false);
                }}
              >
                <ListItemText
                  style={{ color: "#FFFFF" }}
                  primary={
                    <Typography type="body2" style={{ color: "#FFFFFF" }}>
                      Criar nova ordem
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component="a"
                onClick={() => {
                  setChangeTabNewOs(false);
                  setChangeTabNewUser(true);
                }}
              >
                <ListItemText
                  primary={
                    <Typography type="body2" style={{ color: "#FFFFFF" }}>
                      Cadastrar cliente
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
        <div className={styles.btn}>
          <span className={styles.title}>Ordens de serviço</span>
          <Button
            size="large"
            variant="contained"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </Button>
        </div>
        <div className={styles.btn}></div>
        <div style={{ paddingLeft: "20px" }}></div>
        {changeTabNewUser || changeTabNewOS ? (
          <div>
            <Divider />
            <div className={styles.divTitle}>
              Preencha os campos para inserir{" "}
              {changeTabNewUser ? "um novo cliente" : "uma nova OS"}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "20px",
                flex: 1,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  {changeTabNewOS ? (
                    <Form handleNewOs={setNewOs} />
                  ) : (
                    <NewClient handleNewClient={setNewClient} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            style={{ marginTop: "20px" }}
            columns={columns}
            pageSize={5}
            rows={dataOs}
            getRowId={(row) => row.num_OS}
            editMode="cell"
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            experimentalFeatures={{ newEditingApi: true }}
            rowsPerPageOptions={[5]}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
        )}

        {!!snackbar && (
          <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
          </Snackbar>
        )}
      </div>
      {/* </div> */}
      {renderConfirmDialog()}
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </main>
  );
}
