import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Form.module.css";

export default function Form() {
  const [clientName, setClientName] = React.useState("");
  const [type, setType] = React.useState("");
  const [numSerie, setNumSerie] = React.useState("");
  const [equipamento, setEquipamento] = React.useState("");
  const [situation, setSituation] = React.useState("");

  const handleChangeClientName = (event) => {
    setClientName(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeNumSerie = (event) => {
    setNumSerie(event.target.value);
  };

  const handleChangeSituation = (event) => {
    setSituation(event.target.value);
  };

  const handleChangeEquipamento = (event) => {
    setEquipamento(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/os/new", {
      method: "POST",
      body: JSON.stringify({
        nome_cliente: clientName,
        desc_servico_OS: situation,
        num_serie_equip: numSerie,
        tipo_equip: type,
        equipamento,
      }),
    }).then((res) => {
      
    }).catch((err) => {
      
    });
    // Lógica para enviar os dados
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <div className={styles.centerForm}>
          <div className={styles.formFirstLine}>
            <TextField
              label="Cliente"
              variant="outlined"
              value={clientName}
              onChange={handleChangeClientName}
              className={styles.spaceTextFieldTwoLines}
            />
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Equipamento"
              variant="outlined"
              value={equipamento}
              onChange={handleChangeEquipamento}
              className={styles.spaceTextFieldTwoLines}
            />
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Tipo"
              variant="outlined"
              placeholder="Notebook, PC, etc."
              value={type}
              onChange={handleChangeType}
              className={styles.spaceTextFieldTwoLines}
            />
            <TextField
              label="Nº de Série"
              variant="outlined"
              value={numSerie}
              onChange={handleChangeNumSerie}
              className={styles.intireLine}
            />
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Situação"
              variant="outlined"
              value={situation}
              onChange={handleChangeSituation}
              className={styles.spaceTextFieldTwoLines}
            />
          </div>
          <Button
            type="submit"
            size="large"
            onClick={handleSubmit}
            variant="contained"
          >
            ENVIAR
          </Button>
        </div>
      </form>
    </div>
  );
}

//OS, Cliente, Tipo, Equipamento, Situação, Modeificado em, Contato, E-mail
