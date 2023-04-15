import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/sort', (req: Request, res: Response) => {
    const numbersParam = req.query.numbers;
  
    if (typeof numbersParam === 'string') {
      const numbers = numbersParam.split(',').map(Number);
  
      numbers.forEach(number => {
        console.log(number);
      });
  
      // You can also send a response to the user after processing the numbers
      res.send('Received and processed the numbers');
    } else {
      res.status(400).send('Invalid input');
    }
  });

app.listen(port, () => {
  console.log(`For testing purpose in express: listening at http://localhost:${port}`);
});

export default app;
