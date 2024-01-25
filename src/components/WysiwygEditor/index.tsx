import WysiwygEditor from "./JoditEditor";

export interface WysiwygProps {
  placeholder?: string;
  content: string;
  onBlur?: (newContent: string) => void;
  onChange?: (newContent: string) => void;
}

export default WysiwygEditor;
