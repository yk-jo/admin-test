import { Theme } from "@mui/material";
import AppBar from "./AppBar";
import TextField from "./TextField";
import Select from "./Select";
import Typography from "./Typography";
import CssBaseline from "./CssBaseline";
import Chip from "./Chip";
import Switch from "./Switch";
import Tabs from "./Tabs";
import Button from "./Button";
import Breadcrumbs from "./Breadcrumbs";
import DataGrid from "./DataGrid";
import InputBase from "./InputBase";

export default function componentsOverrides(theme: Theme) {
  return Object.assign(
    CssBaseline(theme),
    AppBar(theme),
    TextField(theme),
    Select(theme),
    Typography(theme),
    Chip(theme),
    Switch(theme),
    Tabs(theme),
    Button(theme),
    Breadcrumbs(theme),
    DataGrid(theme),
    InputBase(theme)
  );
}
