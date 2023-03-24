
import portraits from './import';
import './App.css';
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import journalBG from './assets/backgrounds/journal.png';

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        bigMobile: 350,
        tablet: 650,
        desktop: 900
      }
    },
    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'red',
                    fontFamily:'essay-text',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    textTransform: 'none',
                }
            }
        }
    }
  });

function App() {
  return (
        <ThemeProvider theme={theme}>
        <Stack sx={{padding: '2% 1% 0% 0%', float: 'right',}} spacing={2} justifyContent="flex-end">
            <Button variant="contained">Hunter</Button>
            <Button variant="contained">Survivor</Button>
            <Button variant="contained">♂</Button>
            <Button variant="contained">♀</Button>
        </Stack>

        <Box sx={{
          margin: '2% 0% 0% 0%',
          padding: '2% 5% 2% 5%',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundImage: `url('${journalBG}')`  ,
          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(2, 1fr)",
            bigMobile: "repeat(3, 1fr)",
            tablet: "repeat(7, 1fr)",
            desktop: "repeat(14, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          }
        }}>
            {portraits.map((item) => (
                <ImageListItem key={item}>
                <img
                    src={`${item}`}
                    srcSet={`${item}`}
                    alt={item}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </Box>
    
        </ThemeProvider>
  );
}



export default App;
