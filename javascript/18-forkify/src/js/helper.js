import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json(); // data is a promise
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const data = await res.json(); // data is a promise
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥`);
    throw err;
  }
};

export const AJAX = async function (url, uploadData = undefined) {
  const fetchPro = uploadData
    ? fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      })
    : fetch(url);
};
