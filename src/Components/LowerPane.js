function LowerPane({ htmlv, cssv, jsv })
{
    const srcDoc = `
        <html>
            <head>
                <style>${cssv}</style>
                <script src = "https://code.jquery.com/jquery-3.6.0.min.js"></script>
            </head>
            <body>
                ${htmlv}
                <script>${jsv}</script>
            </body>
        </html>
    `;
    return (
        <div style = {{ width: "100%", height: "210px", background: "white" }}>
            <iframe style = {{ width: "100%", height: "205px", border: "none" }}
                    title = "Output"
                    srcDoc = { srcDoc }
                    sandbox = "allow-scripts" />
        </div>
    );
}

export default LowerPane;
