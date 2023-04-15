import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! From Express Server in Typescript with Jest Testing Framework and Supertest for testing HTTP requests and responses in Express Server in Typescript! ');
});

app.get('/sort', (req: Request, res: Response) => {
  const numbersParam = req.query.numbers;

  if (typeof numbersParam === 'string') {
    const numbers = numbersParam.split(',').map(Number);

    numbers.forEach(number => {
      console.log(number);
    });

    const sortedNumbers = sortNumbersHighToLow(numbers);
    const sortedNumbersString = convertNumbersToString(sortedNumbers);


    

    // You can also send a response to the user after processing the numbers
    res.send('Received and processed the numbers' + sortedNumbersString );
  } else {
    res.status(400).send('Invalid input');
  }
});

const sortNumbersHighToLow = (numbers: number[]) => {
  return numbers.sort((a, b) => b - a);
};

const convertNumbersToString = (numbers: number[]) => {
  return numbers.join(',');
};

app.listen(port, () => {
  console.log(`For testing purpose in express: listening at http://localhost:${port}`);
});

export default app;
