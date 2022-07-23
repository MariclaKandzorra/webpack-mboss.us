import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'
import React, { useState, useRef, useCallback } from 'react';
import ReactDom from 'react-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/dist/client/router';
import { parseJSON } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';
import Header from './src/application/components/Header.js';

run( Header );

ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
