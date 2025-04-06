import { Typography, Button } from "@mui/material";
import { keyframes } from "@mui/material";
import { styled } from '@mui/system';

const animatedColor = keyframes`
                        0% { border-color: #FFA500; color: #FFA500; }
                        33.33% { border-color: #29ABE2; color: #29ABE2; }
                        66.66% { border-color: #F0DB4F; color: #F0DB4F; }
                        100% { border-color: #FFA500; color: #FFA500; } `;
const AnimatedSpan = styled('span')(({ theme }) => (
{
    border: '4px solid transparent',
    padding: theme.spacing(0.8),
    borderRadius: '5px',
    animation: `${animatedColor} 2s infinite`,
}));

function UpperPane()
{
  return (
    <div style = {{
        padding: 10,
        background: "black",
        display: "flex",
        alignItems: "center" }}>
        <div style = {{ flexGrow: 1, textAlign: "center" }}>
            <Typography fontWeight = {800} variant = "h5">
                <AnimatedSpan> {"</> Code Editor"} </AnimatedSpan>
            </Typography>
        </div>
        <Button style = {{ backgroundColor: "white", marginLeft: "auto" }}
                variant = "contained"
                size = "small"
                onClick = {() =>
                    {
                        window.location = "/";
                    }}>
                <img src = "/refresh.png" alt = "refresh logo" style = {{ width: 20, height: 20, objectFit: "contain" }} />
        </Button>
    </div>
  );
}

export default UpperPane;