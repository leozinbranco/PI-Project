import * as React from "react";
import TextField from "@mui/material/TextField";
import styles from "../styles/Form.module.css";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <div
      style={{
        // width: "500px",
        // height: "600px",
        display: "flex",
        // alignItems: "center",
        alignItems: "center",
      }}
    >
      <form action="/send-data-here" method="post" style={{}}>
        <div className={styles.centerForm}>
          <div className={styles.formFirstLine}>
            <TextField
              label="Cliente"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Tipo"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
            <TextField
              label="Nº de Série"
              variant="outlined"
              className={styles.intireLine}
            ></TextField>
          </div>

          <div className={styles.formFirstLine}>
            <TextField
              label="Situação"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Descrição"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Técnico"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
          </div>
          <Button size="large" variant="contained" className={styles.btnSend}>
            ENVIAR
          </Button>
        </div>
      </form>
    </div>
  );
}

//OS, Cliente, Tipo, Equipamento, Situação, Modeificado em, Contato, E-mail
