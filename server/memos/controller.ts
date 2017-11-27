import { Router, Request, Response } from 'express';
import { MemoDatabase } from '../database/memo-database';
import JsonDb = require('node-json-db');

const db = new JsonDb(`${__dirname}/../database/notes.json`, true, true);


export class MemosController {


constructor(private memoDatabase = new MemoDatabase(db), public instance: Router = Router() ) {
  this.init();
 }

init() {
  this.instance.get('/notes', this.all);
  this.instance.get('/notes/:query', this.search);
  this.instance.get('/note/:guid', this.single);
  this.instance.post('/note/', this.createOrUpdate);
  this.instance.put('/note/', this.createOrUpdate);
  this.instance.delete('/memo/:guid', this.remove);
}


all = (req: Request, res: Response) => {
  res.status(200).send(this.memoDatabase.all());
}

single = ({ params }: Request, res: Response) => {
  const found = this.memoDatabase.single(params.guid);

  if (found) {
    return res.send(found);
  }

  return res.status(404).send(new Error('Uups, we found no note having ' +
                                        `an ID "${params.guid}".`));
}

search = ({ params }: Request, res: Response) => {
  const found = this.memoDatabase.searchByTitle(params.query);

  if (found && found.length > 0) {
    return res.send(found);
  }

  return res.status(404).send(new Error(`Sorry, no note contains the title "${params.title}".`));
}

createOrUpdate = (req: Request, res: Response) => {
  const guid = this.memoDatabase.create(req.body);

  if (guid) {
    return res.status(201).send({
      message: 'Congratulations, all information were transmitted successfully.',
      href: `http://localhost:4280/notes/single/${guid}`
    });
  }

  return res.status(405).send(new Error('Note could not be created'));
}

remove = ({ params }: Request, res: Response) => {
  this.memoDatabase.remove(params.guid);
  return res.send('The note has been removed, successfully.');
}

}

