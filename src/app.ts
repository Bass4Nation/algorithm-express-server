import express, { Request, Response } from 'express';
import admin from '../firebase';
import { firestore } from '../firebase';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  // console.log('You sent a GET request to the / endpoint');
  res.send('Hello World! From Express Server in Typescript with Jest Testing Framework and Supertest for testing HTTP requests and responses in Express Server in Typescript!');
});

// Sort numbers high to low
app.get('/sort_h_t_l', (req: Request, res: Response) => {
  const numbersParam = req.query.numbers;

  if (typeof numbersParam === 'string') {
    const numbers = numbersParam.split(',').map(Number);

    // numbers.forEach(number => {
    //   console.log(number);
    // });

    const sortedNumbers = sortNumbersHighToLow(numbers);
    const sortedNumbersString = convertNumbersToString(sortedNumbers);
    // console.log(sortedNumbersString);

    // You can also send a response to the user after processing the numbers
    res.send(sortedNumbersString);
  } else {
    res.status(400).send('Invalid input');
  }
});

const sortNumbersHighToLow = (numbers: number[]) => {
  return numbers.sort((a, b) => b - a);
};

app.get('/top2highest', (req: Request, res: Response) => {
  // const numbersParam = req.query.numbers;
  const testNumbers = [1, 2, 3, 4, 5, 2, 10, 999];
  const sortedNumbers = sortNumbersHighToLow(testNumbers);
  const top2HighestNumbers = sortedNumbers.slice(0, 2);
  // console.log(top2HighestNumbers);
  res.status(200).send(top2HighestNumbers);
});

// -----------------  Bubble Sort  -----------------
// Not working yet - need to fix 
app.get('/bubble_sort', (req: Request, res: Response) => {
  // const numbersParam = req.query.numbers;
  const testNumbers: number[] = [6,3,0,5]; // [0,3,5,6]
  const numbersDelivered: number[] = testNumbers;
  const displayCurrentNumbers: number[] = [];
  const sortedNumbers: number[] = [];
  
  // for (let i = 0; i < testNumbers.length; i++) {
  //   for (let j = 0; j < testNumbers.length; j++) {
  //     if (testNumbers[j] > testNumbers[j + 1]) {
  //       const temp = testNumbers[j];
  //       console.log('temp: ', temp);
  //       testNumbers[j] = testNumbers[j + 1];
  //       testNumbers[j + 1] = temp;
  //     }
  //   }
  // }


  // try {
  //   let index = 0;
  //   let currentNumber = numbersDelivered[index];

  //   testNumbers.forEach(number => {
  //     if (currentNumber > number) {
  //       displayCurrentNumbers.push(number);
  //       displayCurrentNumbers.push(currentNumber);
  //       currentNumber = number;
  //     } else {
  //       displayCurrentNumbers.push(currentNumber);
  //       displayCurrentNumbers.push(number);
  //       currentNumber = number;
  //     }
  //     index++;
  //     console.log('displayCurrentNumbers: ', displayCurrentNumbers);
      
  //   });

  // } catch (error) {
  //   console.error(error);
  // }


  // console.log(testNumbers);


  res.status(200).send('Bubble sort not implemented yet');
});

app.get('/users/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userRecord = await admin.auth().getUser(userId);
    console.log('Successfully fetched user data: ', userRecord.toJSON());
    
    res.status(200).send(userRecord);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching user data' });
  }
});

// -----------------  Firestore  -----------------
// Get all posts - BUT this is not working yet. It is just getting posts as a document with 
app.get('/posts', async (req, res) => {
  const collection: any = req.query.col || 'posts';
  try {
    const postsSnapshot = await firestore.collection(collection).get();
    const posts: any[] = [];

    postsSnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching posts data' });
  }
});


// Used to convert numbers to string for the response to the user
const convertNumbersToString = (numbers: number[]) => {
  return numbers.join(',');
};

app.listen(port, () => {
  console.log(`For testing purpose in express: listening at http://localhost:${port}`);
});

export default app;
