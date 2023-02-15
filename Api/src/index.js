import sql from 'mssql';
import Joi from 'joi';
import { app, config } from './server.js';

// app.get('/user/getAllUsers', (req, res) => {
//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
            
//         // query to the database and get the records
//         request.query('select * from SEC.Users', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);    
//         });
//     });
// });


// const courses = [
//     {
//         id: 1,
//         name: 'Course 1',
//     },
//     {
//         id: 2,
//         name: 'Course 2',
//     },
//     {
//         id: 3,
//         name: 'Course 3',
//     }
// ]
// app.get('/', (req, res) => {
//     res.send('Hello Test');
// });

// app.get('/api/courses', (req, res) => {
//     res.send([1,2,3]);
// });

// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find((course) => {
//         return course.id == req.params.id;
//     })
//     if(!course)
//         res.status(404).send(`The Course (${req.params.id}) could not be found`);
//     else 
//         res.send(course.name);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//     console.log(`Listening on Port ${port}`)
// });

// app.post('api/courses', (req, res) => {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     const result = Joi.validate(req.body, schema);

//     if(result.error) {
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     // Look up the course
//     const course = courses.find((course) => {
//         return course.id == req.params.id;
//     })
//     if(!course)
//         res.status(404).send(`The Course (${req.params.id}) could not be found`);

//     // Validate
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     const result = Joi.validate(req.body, schema);
//     if(result.error) {
//         res.status(400).send(result.error.details[0].message);
//         return;
//     }

//     // Update Course
//     course.name = req.body.name;

//     // Return Updated Course
//     res.send(course);
// })

// app.get();
// app.post();
// app.put();
// app.delete();