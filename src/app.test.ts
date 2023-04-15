import request from 'supertest';
import app from './app';

// -----------------  Hello World and more letters and words and stuff :) -----------------
describe('GET /', () => {
  it('responds with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World! From Express Server in Typescript with Jest Testing Framework and Supertest for testing HTTP requests and responses in Express Server in Typescript!');
  });
});

//  -----------------  Sort Numbers High to Low  -----------------
describe('GET /sort_h_t_l', () => {
  it('responds with numbers high to low', async () => {
    const command = '/sort_h_t_l';

    const numbers: number[] = [1, 2, 3, 4, 5, 2];
    const stringNumbers = numbers.join(',');
    const dataString = '?numbers=' + stringNumbers;

    const collectedCommand =  command + dataString;
    const response = await request(app).get(collectedCommand);
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('5,4,3,2,2,1');
  });
});

//  -----------------  Top 2 Highest  -----------------
describe('GET /top2highest', () => {
  it('should return 2 highest number', async () => {
    const command = '/top2highest';

    const response = await request(app).get(command);
    expect(response.statusCode).toBe(200);
  });
});

// -----------------  Bubble Sort  -----------------
describe('GET /bubble_sort', () => {
  it('should return bubble sorted numbers', async () => {
    const command = '/bubble_sort';

    const response = await request(app).get(command);
    expect(response.statusCode).toBe(200);
  });
});

//  -----------------  Firebase  -----------------
// describe('GET /firebase', () => {
//   it('should return firebase data', async () => {
//     const command = '/firebase';

//     const response = await request(app).get(command);
//     expect(response.statusCode).toBe(200);
//   });
// });













// describe('GET /', () => {
//   it('responds with "Hello World!"', async () => {
//     const response = await request(app).get('/');
//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe('Hello World! From Express Server in Typescript with Jest Testing Framework and Supertest for testing HTTP requests and responses in Express Server in Typescript!');
//   });
// });
