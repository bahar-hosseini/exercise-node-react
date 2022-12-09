//External Modules
import { Router, Request, Response } from 'express';
import axios from 'axios';
import { stringify, parse } from 'flatted';
export const repos = Router();

repos.get('/', async (req, res) => {
  res.header('Cache-Control', 'no-store');
  res.set('Content-Type', 'application/json');

  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  try {
    const response = await axios.get(
      'https://api.github.com/users/silverorange/repos'
    );
    const result = response.data.filter((i) => i.fork === false);
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});
