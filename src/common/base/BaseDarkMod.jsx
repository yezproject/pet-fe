import { useColorScheme } from '@mui/joy/styles';
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

export default function BaseDarkMod(props) {
    const { onClick, ...other } = props;
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    const changeDarkTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <IconButton aria-label="toggle light/dark mode"
                    size="sm"
                    variant="outlined"
                    disabled={!mounted}
                    onClick={() => changeDarkTheme()}
                    {...other}>
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}
