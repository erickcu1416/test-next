import * as React from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setNameHeader } from '../redux/slice/headerSlice';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

import { selectLoader, setLoader } from '../redux/slice/loaderSlice';
import { ItemsResponse, SimpleItem } from '../src/interfaces/ItemsResponse';
import ItemCard from '../src/ItemCard';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
import { useSelector } from 'react-redux';
import { firstFilter, fourthFilter, secondFilter, thirdFilter } from '../src/promises';

const defaultItems: SimpleItem[] = []

import genericData from "../data/sample.json";
const data: any = genericData;

const Series: NextPage = () => {
    const dispatch = useDispatch();
    const loader = useSelector(selectLoader);
    const [items, setItems] = React.useState(defaultItems)
    const [response, setResponse] = React.useState<ItemsResponse>({ entries: [], total: 0 })

    const [value, setValue] = React.useState<moment.Moment | null>(null);

    const [age, setAge] = React.useState('5');

    const [pageNumber, setPageNumber] = React.useState(1);
    const [total, setTotal] = React.useState(100);


    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        filterItems();
    };


    React.useEffect(() => {
        dispatch(setNameHeader('Popular Series'))
        filterItems();
        
    }, [value, pageNumber, age])

    const filterItems = async () => {
        dispatch(setLoader(true));
        await fetch('sample.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                const data: any = myJson;
                setResponse(data);
                console.log('Complete data');
                return data;
            });
            console.log('Complete data 2');

        let dataFormatted: ItemsResponse = response;
        console.log('dataFormatted', dataFormatted);
        const copyDate = value;
        let yearActually: any = copyDate?.format('YYYY');
        let newYearActually = Number(yearActually);

        const secondFilterResult = await secondFilter(dataFormatted.entries, newYearActually);
        console.log('secondFilterResult', secondFilterResult);

        const thirdFilterResult = await thirdFilter(secondFilterResult);
        console.log('thirdFilterResult', thirdFilterResult);

        const fourthFilterResult = await fourthFilter(thirdFilterResult, 'series');

        console.log('fourthFilterResult', fourthFilterResult);
        let copyFf = fourthFilterResult;
        setTotal(Math.ceil(copyFf.length / Number(age)));

        const firstFilterResult = await firstFilter(fourthFilterResult, Number(age), pageNumber);
        console.log('firstFilterResult', firstFilterResult);


        setItems(firstFilterResult);
        setTimeout(() => {
            dispatch(setLoader(false));
        }, 1000);
    }

    const nextPage = () => {
        if (pageNumber >= total) return; 

        setPageNumber((prevPage: number) => (prevPage + 1));
        console.log('PAGEnumber', pageNumber);
        filterItems()
    }

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber((prevPage: number) => (prevPage - 1));
            console.log('PAGEnumber', pageNumber);
            filterItems()
        }
    }

    return (
        <>
            {
                !loader ?
                    <Box
                        sx={{
                            my: 4,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Grid sx={{ mt: 2 }} container spacing={0}>
                            <Grid item xs={3} md={2} >
                                <DatePicker
                                    views={['year']}
                                    label="Year only"
                                    value={value}
                                    onChange={(newValue) => {
                                        console.log('On cahge date');
                                        setValue(newValue);
                                        setPageNumber(1);
                                    }}
                                    renderInput={(params) => <TextField  {...params} sx={{ width: 220 }} helperText={null} />}
                                />
                            </Grid>
                            <Grid item xs={3} md={2} >
                                <FormControl sx={{ width: 220 }}>
                                    <InputLabel id="demo-simple-select-label">Items</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Items"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'5'}>5</MenuItem>
                                        <MenuItem value={'10'}>10</MenuItem>
                                        <MenuItem value={'20'}>20</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3} md={6} >
                            </Grid>
                            <Grid item xs={3} md={1} >
                                <Button onClick={prevPage} variant="contained">{'<'}</Button>
                            </Grid>
                            <Grid item xs={3} md={1} >
                                <Button onClick={nextPage} variant="contained">{'>'}</Button>
                            </Grid>
                        </Grid>
                        <br />

                        <Grid container spacing={4}>
                            {items.map((card, i) => (
                                <Grid item key={i} xs={6} sm={3} md={2}>
                                    <ItemCard key={i} item={card} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box> : null
            }
        </>
    );
};

export default Series;
