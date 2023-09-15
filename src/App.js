
import portraits from './import';
import './App.css';
import ImageListItem, { imageListItemClasses } from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import journalBG from './assets/backgrounds/journal.png';
import { useState } from 'react';

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
                    backgroundColor: 'black',
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

    const [filters,setFilter] = useState([]);

    // list of filters to remove from image list

    function toggleFilter(toFilter){
        // search if filter is in the list
        setFilter(filterItems => {
            console.log(filterItems);
            const index = filterItems.indexOf(toFilter);
            console.log(filterItems);
            if (index > -1) { // only splice array when item is found
                filterItems.splice(index, 1); // 2nd parameter means remove one item only
            } else {
                filterItems.push(toFilter);
            }
            console.log(filterItems);
        })
        portraits.forEach(item => 
            {
                item.selected = false;
                item.classes.split(" ").forEach(element => {
                    //if(filters === []) {
                        // do nothing
                   // }else if(filters.includes(element)) {
                     //   item.selected = true;
                  //  }
            });}

            //if(item.classes.split(" ").includes(toFilter)){
            //    item.selected = femFilter ? true : false;
            //}
        );
    }


     return (
        <ThemeProvider theme={theme}>
        <Stack sx={{padding: '2% 1% 0% 0%', float: 'right',}} spacing={2} justifyContent="flex-end">
            <Button onClick={()=>toggleFilter('hunter')} variant="contained">Hunter</Button>
            <Button onClick={()=>toggleFilter('survivor')} variant="contained">Survivor</Button>
            <Button onClick={()=>toggleFilter('male')} variant="contained">Male ♂</Button>
            <Button onClick={()=>toggleFilter('female')} variant="contained">Female ♀</Button>
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
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}n
                    className = {`${item.classes} ${item.selected ? 'selected' : ''}`}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </Box>
        
        </ThemeProvider>
  );
}



export default App;
