import { ReactNode } from "react";
import ButtonExample from "./examples/ButtonExample";
import CardExample from "./examples/CardExample";
import CheckExample from "./examples/CheckExample";
import ChipExample from "./examples/ChipExample";
import DateExample from "./examples/DateExample";
import FileUploadExample from "./examples/FileUploadExample";
import RadioExample from "./examples/RadioExample";
import SearchFilterExample from "./examples/SearchFilterExample";
import SelectExample from "./examples/SelectExample";
import SwitchExample from "./examples/SwitchExample";
import TabExample from "./examples/TabExample";
import TableExample from "./examples/TableExample";
import TextExample from "./examples/TextExample";
import TreeExample from "./examples/TreeExample";
import WysiwygExample from "./examples/WysiwygExample";

export const examples: { [k: string]: { title: string; element: ReactNode } } = {
    input: { title: "Input", element: <TextExample /> },
    button: { title: "Button", element: <ButtonExample /> },
    radio: { title: "Radio Group", element: <RadioExample /> },
    checkbox: { title: "Checkbox Group", element: <CheckExample /> },
    select: { title: "Select", element: <SelectExample /> },
    datepicker: { title: "Date Picker", element: <DateExample /> },
    card: { title: "Card", element: <CardExample /> },
    "search-filter": { title: "Search Filter", element: <SearchFilterExample /> },
    wysiwyg: { title: "Wysiwyg Editor", element: <WysiwygExample /> },
    table: { title: "Table", element: <TableExample /> },
    switch: { title: "Switch", element: <SwitchExample /> },
    chip: { title: "Chip", element: <ChipExample /> },
    upload: { title: "FileUpload", element: <FileUploadExample /> },
    tab: { title: "Tab", element: <TabExample /> },
    "tree-view": { title: "TreeView", element: <TreeExample /> },
  };