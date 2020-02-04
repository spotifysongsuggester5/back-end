const db = require('../data/dbConfig');
const Auth = require('./auth-model');

describe('auth model', () => {
   beforeEach( async () => {
       await db('users').truncate();
   });
   describe('add function', () => {
       it('inserts users into the db', async () => {
           let userNumber;
           userNumber = await db('users');
           expect(userNumber).toHaveLength(0);
           await Auth.add({ username: 'test', password: 'test'});
            userNumber = await db('users');
            expect(userNumber).toHaveLength(1);
       });
       it('inserts the provided user into the db', async () => {
           let user = await Auth.add({ username: 'test', password:'test' });
           expect(user.username).toBe('test')
       })
      
       })

   })

