import * as React from "react";
import TextField from "@mui/material/TextField";
import styles from "../styles/Form.module.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

export default function NewClient() {
  const [optional, setOptional] = React.useState("");

  const handleChange = (event) => {
    setOptional(event.target.value);
  };

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
              label="Nome"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Telefone"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
            <TextField
              label="Email"
              variant="outlined"
              className={styles.intireLine}
            ></TextField>
          </div>
          <div className={styles.dropdown}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">CPF/CNPJ</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={optional}
                  label="CPF/CNPJ"
                  onChange={handleChange}
                >
                  <MenuItem value={"Física"}>CPF</MenuItem>
                  <MenuItem value={"Jurídica"}>CNPJ</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {optional === "Física" ? (
            <div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="CPF"
                  variant="outlined"
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="Sexo"
                  variant="outlined"
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="CNPJ"
                  variant="outlined"
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="Nome Fantasia"
                  variant="outlined"
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
                <TextField
                  label="Inscrição estadual"
                  variant="outlined"
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
            </div>
          )}

          <div className={styles.formFirstLine}></div>
          <Button size="large" variant="contained" className={styles.btnSend}>
            ENVIAR
          </Button>
        </div>
      </form>
    </div>
  );
}

//OS, Cliente, Tipo, Equipamento, Situação, Modeificado em, Contato, E-mail
