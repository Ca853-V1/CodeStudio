import { Card, Typography, Button } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { useEffect, useRef } from "react";

function CSSEditor({ cssv, setCss, expanded, onToggleExpand, width })
{
    const editorRef = useRef(null);
    useEffect(() =>
    {
        if (cssv.trim() === "" && editorRef.current)
        {
            editorRef.current.scrollTo(0, 0);
        }
    }, [cssv]);
    return (
      <div style = {{
            width: width,
            transition: "width 0.3s ease-in-out",
            overflow: "hidden" }}>
                <Card
                    variant = "outlined"
                    style = {{
                        width: "100%",
                        height: 440,
                        borderRadius: 5,
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column" }}>
                            <div style = {{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    backgroundColor: "black",
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 1 }}>
                                        <img style = {{ marginLeft: 15 }} src = "/css_img.png" alt = "CSS Logo" />
                                        <Typography style={{ display: "flex", justifyContent: "center", color: "whitesmoke", fontWeight: 600 }}> CSS </Typography>
                                        <Button style = {{ backgroundColor: "black" }}
                                                variant = "contained"
                                                size = "small"
                                                onClick = { onToggleExpand }>
                                        {
                                            expanded ? ( <img src = "/contract.png" alt = "contract logo" style = {{ width: 20, height: 20, objectFit: "contain" }} /> ) 
                                                    : ( <img src = "/expand.png" alt = "expand logo" style = {{ width: 20, height: 20, objectFit: "contain" }} />)
                                        } </Button>
                            </div>
                            <div style = {{ flexGrow: 1, overflow: "auto" }} ref = { editorRef }>
                                <CodeMirror
                                    value = { cssv }
                                    onChange = { (c) => setCss(c) }
                                    extensions = { [css()] }
                                    height = "412.3px"
                                    theme = "dark"
                                    basicSetup =
                                    {{
                                        lineNumbers: true,
                                        highlightActiveLine: true
                                    }} />
                            </div>
                </Card>
      </div>
    );
}

export default CSSEditor;