//External Modules
import { Router, Request, Response } from 'express';
import axios from 'axios';
import { stringify } from 'flatted';
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  try {
    const response = await axios.get(
      'https://api.github.com/users/silverorange/repos'
    );
    res.send(stringify(response));
  } catch (err) {
    console.error(err);
  }
});
