export const getMessage = (req: any) => {
  return req.query.message || req.body.message || 'Hello World!';
};
