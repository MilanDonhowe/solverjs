// the digital storage conversion is a most 
//roll play work with andy intrenal services.

// bit to all importent digital storage units.
let bitToByte = (bit) => bit / 8;
let bitToKb = (bit) => bit / 8000;
let bitToMb = (bit) => bit / 8e+6;
let bitToGb = (bit) => bit / 8e+9;
let bitToTb = (bit) => bit / 8e+12;
let bitToPb = (bit) => bit / 8e+15;

// byte to all importent digital storage units.
let byteToBit = (byte) => byte * 8;
let byteToKb = (byte) => byte / 1000;
let byteToMb = (byte) => byte / 1e+6;
let byteToGb = (byte) => byte / 1e+9;
let byteToTb = (byte) => byte / 1e+12;
let byteToPb = (byte) => byte / 1e+15;

// kilobyte to all importent digital storage units.
let kbToBit = (kilobyte) => kilobyte * 8000;
let kbToByte = (kilobyte) => kilobyte * 1000;
let kbToMb = (kilobyte) => kilobyte / 1000;
let kbToGb = (kilobyte) => kilobyte / 1e+6;
let kbToTb = (kilobyte) => kilobyte / 1e+9;
let kbToPb = (kilobyte) => kilobyte / 1e+12;