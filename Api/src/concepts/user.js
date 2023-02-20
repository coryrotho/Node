import sql from 'mssql';

export function UserApi(app, config) {
    app.get('/user/getAllUsers', (req, res) => {
        // connect to your database
        sql.connect(config, function (err) {
    
            if (err) console.log(err);
    
            // create Request object
            var request = new sql.Request();
                
            // query to the database and get the records
            request.query('select * from SEC.Users', function (err, recordset) {
                
                if (err) console.log(err)
    
                // send records as a response
                res.send(recordset);    
            });
        });
    });

    app.get('/user/:userUID', (req, res) => {
        // connect to your database
        sql.connect(config, function (err) {
            if (err) console.log(err);
            // create Request object
            var request = new sql.Request();
            // query to the database and get the records
            request.query(`select 1 from SEC.Users where UserUID = ${req.params.userUID}`, function (err, recordset) {
                if (err) console.log(err)
                // send records as a response
                res.send(recordset);    
            });
        });
    });

    app.post('/user', (req, res) => {
        sql.connect(config, function (err) {
            console.log(req.body);
            if(err) console.log(err);

            var request = new sql.Request();
            request.query(`INSERT INTO SEC.Users (UserUID, Username, Password, [First Name], [Last Name], CreatedDate) 
            VALUES ('${req.body.userUID}', '${req.body.username}', '${req.body.password}',rs '${req.body.firstName}', '${req.body.lastName}', SYSDATETIME())`)
        })
    });
}



// export class UserApi {
//     constructor(app, config) {
//         app.get('/user/getAllUsers', (req, res) => {
//             // connect to your database
//             sql.connect(config, function (err) {
        
//                 if (err) console.log(err);
        
//                 // create Request object
//                 var request = new sql.Request();
                    
//                 // query to the database and get the records
//                 request.query('select * from SEC.Users', function (err, recordset) {
                    
//                     if (err) console.log(err)
        
//                     // send records as a response
//                     res.send(recordset);    
//                 });
//             });
//         });

//         app.get('/user/:userUID', (req, res) => {
//             // connect to your database
//             sql.connect(config, function (err) {
//                 if (err) console.log(err);
//                 // create Request object
//                 var request = new sql.Request();
//                 // query to the database and get the records
//                 request.query(`select 1 from SEC.Users where UserUID = ${req.params.userUID}`, function (err, recordset) {
//                     if (err) console.log(err)
//                     // send records as a response
//                     res.send(recordset);    
//                 });
//             });
//         });
    
//         app.post('/user', (req, res) => {
//             sql.connect(config, function (err) {
//                 console.log(req.body);
//                 if(err) console.log(err);
    
    
//                 var request = new sql.Request();
//                 request.query(`INSERT INTO SEC.Users (UserUID, Username, Password, [First Name], [Last Name], CreatedDate) 
//                 VALUES ('${req.body.userUID}', '${req.body.username}', '${req.body.password}',rs '${req.body.firstName}', '${req.body.lastName}', SYSDATETIME())`)
//             })
//         });
//     }
// }

// export function UserRoutes(app, config) {
//     app.get('/user/getAllUsers', (req, res) => {
//         // connect to your database
//         sql.connect(config, function (err) {
    
//             if (err) console.log(err);
    
//             // create Request object
//             var request = new sql.Request();
                
//             // query to the database and get the records
//             request.query('select * from SEC.Users', function (err, recordset) {
                
//                 if (err) console.log(err)
    
//                 // send records as a response
//                 res.send(recordset);    
//             });
//         });
//     });


// }