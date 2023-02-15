import sql from 'mssql';

export class UserApi {
    constructor(app, config) {
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
        })
    }
}

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
// })

