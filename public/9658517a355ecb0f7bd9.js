function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid';
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

function Header() {
  var utcDate = parseJSON('2022-05-30T15:00:00.000Z, America/New_York');
  var timeZone = 'Europe/Rome';
  var zonedTime = utcToZonedTime(utcDate, timeZone);
  var pattern = "EE, do MMM yyyy kk:mm:ss 'GMT+02:00'";
  var output = format(zonedTime, pattern, {
    timeZone: 'Europe/Rome'
  });
  console.log(output);
  console.log("Node version:", process.version);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = useState(new Date(utcDate)),
      _useState4 = _slicedToArray(_useState3, 2),
      time1 = _useState4[0],
      setTime1 = _useState4[1];

  var _useState5 = useState(new Date(utcDate)),
      _useState6 = _slicedToArray(_useState5, 2),
      time2 = _useState6[0],
      setTime2 = _useState6[1];

  var _useState7 = useState(new Date()),
      _useState8 = _slicedToArray(_useState7, 2),
      startDate = _useState8[0],
      setStartDate = _useState8[1];

  var _useState9 = useState(addDays(new Date(), 1)),
      _useState10 = _slicedToArray(_useState9, 2),
      endDate = _useState10[0],
      setEndDate = _useState10[1];

  var _useState11 = useState(1),
      _useState12 = _slicedToArray(_useState11, 2),
      noOfGuests = _useState12[0],
      setNoOfGuests = _useState12[1];

  var router = useRouter();

  var handleSelect = function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  var selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  var resetInput = function resetInput() {
    setSearchInput();
  };

  var search = function search() {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toDateString(),
        endDate: endDate.toDateString(),
        noOfGuests: noOfGuests,
        time1: time1.toISOString(),
        time2: time2.toISOString()
      }
    });
  };

  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-50 grid grid-cols-3  bg-white shadow-md p-5 md:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return router.push('/');
    },
    className: "relative flex items-center h-10 cursor-pointer  my-auto hover:shadow-xl active:scale-90 duration-150"
  }, /*#__PURE__*/React.createElement(Image, {
    src: "https://i.ibb.co/CM7x3FX/1628329259246.png",
    layout: "fill",
    objectFit: "contain",
    objectPosition: "left"
  }), " "), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center md:border-2 rounded-full py-2 md:shadow-sm"
  }, /*#__PURE__*/React.createElement("input", {
    value: searchInput,
    onChange: function onChange(e) {
      return setSearchInput(e.target.value);
    },
    className: "flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500",
    type: "text",
    placeholder: "Search Location"
  }), /*#__PURE__*/React.createElement(SearchIcon, {
    className: "hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 shadow-md hover:shadow-xl active:scale-90 duration-150"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4 justify-end text-gray-500"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hidden md:inline-flex"
  }, "BECOME AN EVENT-DESIGNER"), /*#__PURE__*/React.createElement(GlobeAltIcon, {
    className: "h-5 hover:shadow-xl active:scale-90 duration-150"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 border-2 p-2 rounded-full shadow-md hover:shadow-xl active:scale-90 duration-150"
  }, /*#__PURE__*/React.createElement(MenuIcon, {
    className: "h-5"
  }), /*#__PURE__*/React.createElement(UserCircleIcon, {
    className: "h-5"
  }))), searchInput && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col col-span-3 mx-auto"
  }, /*#__PURE__*/React.createElement(DateRangePicker, {
    editableDateInputs: true,
    selected: startDate,
    onChange: handleSelect,
    ranges: [selectionRange],
    minDate: new Date(),
    rangeColors: ["#FD5B61"]
  }), /*#__PURE__*/React.createElement("div", {
    clasName: "flex border-b mb-4"
  }, /*#__PURE__*/React.createElement("td", {
    className: "flex flex-grow justify-between flex flex-row-reverse space-x-4 space-x-reverse"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("h2", {
    className: ""
  }, "Number of Guests ")), /*#__PURE__*/React.createElement("tr", {
    className: ""
  }, /*#__PURE__*/React.createElement(UsersIcon, {
    className: "h-6"
  }), /*#__PURE__*/React.createElement("input", {
    value: noOfGuests,
    onChange: function onChange(e) {
      return setNoOfGuests(e.target.value);
    },
    type: "number",
    min: 1,
    className: "w-13 pl-2 text-lg outline-none text-red-400"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: 3
  }, /*#__PURE__*/React.createElement(TimePicker, {
    ampm: false,
    openTo: "hours",
    views: ['hours', 'minutes', 'seconds'],
    inputFormat: "HH:mm:ss",
    mask: "_:_:_",
    value: time1,
    label: "Event Start Time",
    onChange: function onChange(newValue) {
      setTime1(newValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, params);
    }
  }), /*#__PURE__*/React.createElement(TimePicker, {
    ampm: false,
    openTo: "hours",
    views: ['hours', 'minutes', 'seconds'],
    inputFormat: "HH:mm:ss",
    mask: "_:_:_",
    value: time2,
    label: "Event End Time",
    onChange: function onChange(newValue) {
      setTime2(newValue);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, params);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetInput,
    className: "flex-grow text-gray-500"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: search,
    className: "flex-grow text-red-400"
  }, "Search"))));
}

export default Header;