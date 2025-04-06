import { Card, Typography, Button } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useRef } from "react";

function JSEditor({ jsv, setJs, expanded, onToggleExpand, width })
{
    const editorRef = useRef(null);
    useEffect(() =>
    {
        if (jsv.trim() === "" && editorRef.current)
        {
            editorRef.current.scrollTo(0, 0);
        }
    }, [jsv]);
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
                                        <img style = {{ marginLeft: 15 }} src = "/js_img.png" alt = "JS Logo" />
                                        <Typography style={{ display: "flex", justifyContent: "center", fontWeight: 600, color: "whitesmoke" }}> JS </Typography>
                                        <Button style = {{ backgroundColor: "black" }}
                                                variant = "contained"
                                                size = "small"
                                                onClick = { onToggleExpand }>
                                                {
                                                    expanded ? ( <img src = "/contract.png" alt = "contract logo" style = {{ width: 20, height: 20, objectFit: "contain" }} /> )
                                                            : ( <img src="/expand.png" alt = "expand logo" style = {{ width: 20, height: 20, objectFit: "contain" }} /> )
                                                } </Button>
                            </div>
                            <div style = {{ flexGrow: 1, overflow: "auto" }} ref = { editorRef }>
                                <CodeMirror
                                    value = { jsv }
                                    onChange = { (j) => setJs(j) }
                                    extensions = { [javascript()] }
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

export default JSEditor;