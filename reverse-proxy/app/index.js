const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'db',
    user: 'example',
    password: 'example',
    database: 'example',
});

connection.query(`
    CREATE TABLE IF NOT EXISTS people(
        id int NOT NULL AUTO_INCREMENT, 
        name VARCHAR(255) NOT NULL, 
        PRIMARY KEY (id)
    )
`)

connection.query(`
    INSERT INTO people(name) VALUES ('José Cataldo Curti Neto')
`)

app.get('/', (req, res) => {
    connection.query('select * from people', (err, result) => {

        if (err) {
            res.send('Something went wrong')

        } else {
            res.send(`
                <html>
                    <body>
                        <h1>Full Cycle Rocks!</h1>
                        <ul>
                            ${result.map((r) => `<li>${r.name}</li>`).join("")}
                        </ul>
                    </body>
                </html>
            `)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
