import UpperPane from "./UpperPane";
import LowerPane from "./LowerPane";
import HTMLEditor from "./HTMLEditor";
import CSSEditor from "./CSSEditor";
import JSEditor from "./JSEditor";
import { useState } from "react";

function Editor()
{
    const [expandedEditor, setExpandedEditor] = useState(null);
    const [htmlv, setHtml] = useState("");
    const [cssv, setCss] = useState("");
    const [jsv, setJs] = useState("");
    const toggleExpand = (editor) =>
    {
        setExpandedEditor(expandedEditor === editor ? null : editor);
    };
    const getEditorWidth = (editorName) =>
    {
        if (expandedEditor === null)
        {
            return `calc(33.33% - ${2 * 30 / 3}px)`;
        }
        else if (expandedEditor === editorName)
        {
            return "calc(100% - 20px)";
        }
        else
        {
            return "20%";
        }
    };
    return (
      <div style = {{ display: "flex", flexDirection: "column", width: "100%" }}>
        <UpperPane />
        <div style = {{
            display: "flex",
            gap: 20,
            justifyContent: "flex-start",
            width: "100%",
            backgroundColor: "#1C1C1C",
            padding: "10px" }}>
                <HTMLEditor
                    htmlv = { htmlv }
                    setHtml = { setHtml }
                    expanded = { expandedEditor === "html" }
                    onToggleExpand = { () => toggleExpand("html") }
                    width = { getEditorWidth("html") } />
                <CSSEditor
                    cssv = { cssv }
                    setCss = { setCss }
                    expanded = { expandedEditor === "css" }
                    onToggleExpand = { () => toggleExpand("css") }
                    width = { getEditorWidth("css") } />
                <JSEditor
                    jsv = { jsv }
                    setJs = { setJs }
                    expanded = { expandedEditor === "js" }
                    onToggleExpand = { () => toggleExpand("js") }
                    width = { getEditorWidth("js") } />
        </div>
        <LowerPane htmlv = { htmlv } cssv={cssv} jsv = { jsv } />
      </div>
    );
  }

export default Editor;