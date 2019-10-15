import { getMessage } from '@0local/package0';

export const app0 = (req: any, res: any) => {
  res.status(200).send(getMessage(req));
};
