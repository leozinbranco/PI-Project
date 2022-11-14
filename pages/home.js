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
import Image from "next/image";
import dataBase from "../dataExample";

const columns = [
  { field: "num_OS", headerName: "Nº ordem de serviço", width: 200 },
  { field: "stts_andamento_OS", headerName: "Andamento", width: 130 },
  {
    field: "date_inicio_OS",
    headerName: "Data início ",
    type: "data",
    width: 130,
  },
  {
    field: "date_fim_OS",
    headerName: "Data fim",
    type: "data",
    width: 130,
  },
];

export default function Home() {
  // const { data } = useDemoData({
  //   dataSet: 'Employee',
  //   visibleFields: VISIBLE_FIELDS,
  //   rowLength: 100,
  // });

  // // Otherwise filter will be applied on fields such as the hidden column id
  // const columns = React.useMemo(
  //   () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
  //   [data.columns],
  // );

  console.log(dataBase);
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
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemText style={{ color: "#FFFFF"}} primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
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
            rowsPerPageOptions={[5]}
            checkboxSelection
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
          />
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}
