const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const fs = require('node:fs');
const md5 = require('md5');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'book'
});

connection.connect();


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// files
const writeImage = imageBase64 => {
    if (!imageBase64) {
        return null;
    }
    let type;
    let image;
    if (imageBase64.indexOf('data:image/png;base64,') === 0) {
        type = 'png';
        image = Buffer.from(imageBase64.replace(/^data:image\/png;base64,/, ''), 'base64');
    } else if (imageBase64.indexOf('data:image/jpeg;base64,') === 0) {
        type = 'jpg';
        image = Buffer.from(imageBase64.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
    } else {
        res.status(500).send('Bad image format');
        return;
    }
    const filename = md5(uuidv4()) + '.' + type;
    fs.writeFileSync('public/img/' + filename, image);
    return filename;
};

const deleteImage = postId => {
    let sql = 'SELECT photo FROM posts WHERE id = ?';
    connection.query(sql, [postId], (err, results) => {
        if (err) {
            res.status
        } else {
            if (results[0].photo) {
                fs.unlinkSync('public/img/' + results[0].photo);
            }
        }
    });
};

const preDeleteImage = postId => {
    let sql = 'SELECT photo FROM posts WHERE id = ?';
    connection.query(sql, [postId], (err, results) => {
        if (err) {
            return null;
        } else {
            if (results[0].photo) {
                return results[0].photo;
            }
        }
    });
};

const doDeleteImage = filename => {
    fs.unlinkSync('public/img/' + filename);
};




const maintenance = (req, res, next) => {
    res.status(503).json({
        message: {
            type: 'error',
            title: 'Techniniai darbai',
            text: `Atsiprašome, bet šiuo metu vykdomi techniniai darbai`
        }
    }).end();
}


const checkSession = (req, _, next) => {
    const session = req.cookies['book-session'];
    if (!session) {
        return next();
    }
    const sql = `
        SELECT id, name, email, role 
        FROM users
        WHERE session = ?
    `;
    connection.query(sql, [session], (err, rows) => {
        if (err) throw err;
        if (!rows.length) {
            return next();
        }
        req.user = rows[0];
        next();
    });
}

const checkUserIsAuthorized = (req, res, roles) => {
    if (!req.user) {
        res.status(401).json({
            message: {
                type: 'error',
                title: 'Neautorizuotas',
                text: `Jūs turite būti prisijungęs`
            },
            reason: 'not-logged-in'
        }).end();
        return false;
    }
    if (!roles.includes(req.user.role)) {
        res.status(401).json({
            message: {
                type: 'error',
                title: 'Neautorizuotas',
                text: `Jūs neturite teisių atlikti šią operaciją`
            },
            reason: 'not-authorized'
        }).end();
        return false;
    }
    return true;
}



// app.use(maintenance);

app.use(checkSession);

app.get('/web/types', (req, res) => {
    setTimeout(_ => {
        const sql = `SELECT * FROM types`;
        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                types: rows
            }).end();
        });
    }, 1500);
});

app.get('/web/posts', (req, res) => {
    setTimeout(_ => {
        const sql = `SELECT * FROM posts`;
        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                posts: rows
            }).end();
        });
    }, 500);
});


app.get('/web/content', (req, res) => {

    setTimeout(_ => {

        const sql = `
        SELECT *
        FROM options`;

        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                content: rows
            }).end();
        });

    }, 1500);
});


app.get('/admin/posts', (req, res) => {
    setTimeout(_ => {
        if (!checkUserIsAuthorized(req, res, ['admin'])) {
            return;
        }
        const sql = `
        SELECT id, title, preview, photo, is_top
        FROM posts`;
        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                posts: rows
            }).end();
        });
    }, 1500);
});

app.delete('/admin/delete/post/:id', (req, res) => {
    setTimeout(_ => {
        const { id } = req.params;
        const filename = preDeleteImage(id);
        const sql = `
        DELETE 
        FROM posts 
        WHERE id = ? AND is_top = 0
        `;
        connection.query(sql, [id], (err, result) => {
            if (err) throw err;
            const deleted = result.affectedRows;
            if (!deleted) {
                res.status(422).json({
                    message: {
                        type: 'info',
                        title: 'Straipsniai',
                        text: `Straipsnis yra priskirtas kaip viršutinis ir negali būti ištrintas arba straipsnis neegzistuoja`
                    }
                }).end();
                return;
            }
            if (filename) {
                doDeleteImage(filename);
            }
            res.json({
                message: {
                    type: 'success',
                    title: 'Straipsniai',
                    text: `Straipsnis sėkmingai ištrintas`
                }
            }).end();
        });
    }, 1500);
});

app.get('/admin/edit/post/:id', (req, res) => {
    setTimeout(_ => {
        if (!checkUserIsAuthorized(req, res, ['admin'])) {
            return;
        }
        const { id } = req.params;
        const sql = `
        SELECT *
        FROM posts
        WHERE id = ?
        `;
        connection.query(sql, [id], (err, rows) => {
            if (err) throw err;
            if (!rows.length) {
                res.status(404).json({
                    message: {
                        type: 'info',
                        title: 'Straipsniai',
                        text: `Straipsnis nerastas`
                    }
                }).end();
                return;
            }
            res.json({
                post: rows[0]
            }).end();
        });

    }, 1500);
});

app.put('/admin/update/post/:id', (req, res) => {

    setTimeout(_ => {

        const { id } = req.params;

        const { title, content, preview, photo } = req.body;

        if (photo) {
            photo.length > 40 && deleteImage(id);
            const filename = photo.length > 40 ? writeImage(photo) : photo;
            const sql = `
            UPDATE posts
            SET title = ?, content = ?, preview = ?, photo = ?
            WHERE id = ?
            `;
            connection.query(sql, [title, content, preview, filename, id], (err, result) => {
                if (err) throw err;
                const updated = result.affectedRows;
                if (!updated) {
                    res.status(404).json({
                        message: {
                            type: 'info',
                            title: 'Straipsniai',
                            text: `Straipsnis nerastas`
                        }
                    }).end();
                    return;
                }
                res.json({
                    message: {
                        type: 'success',
                        title: 'Straipsniai',
                        text: `Straipsnis sėkmingai atnaujintas`
                    }
                }).end();
            });
        } else {
            deleteImage(id);
            const sql = `
            UPDATE posts
            SET title = ?, content = ?, preview = ?, photo = NULL
            WHERE id = ?
            `;
            connection.query(sql, [title, content, preview, id], (err, result) => {
                if (err) throw err;
                const updated = result.affectedRows;
                if (!updated) {
                    res.status(404).json({
                        message: {
                            type: 'info',
                            title: 'Straipsniai',
                            text: `Straipsnis nerastas`
                        }
                    }).end();
                    return;
                }
                res.json({
                    message: {
                        type: 'success',
                        title: 'Straipsniai',
                        text: `Straipsnis sėkmingai atnaujintas`
                    }
                }).end();
            });
        }

    }, 1500);

});

app.post('/admin/store/post', (req, res) => {

    setTimeout(_ => {

        const { title, content, preview, photo } = req.body;
        const filename = writeImage(photo);
        const sql = `
            INSERT INTO posts (title, content, preview, photo)
            VALUES ( ?, ?, ?, ? )
            `;
        connection.query(sql, [title, content, preview, filename], (err) => {
            if (err) throw err;
            res.status(201).json({
                message: {
                    type: 'success',
                    title: 'Straipsniai',
                    text: `Straipsnis sėkmingai sukurtas`
                }
            }).end();
        });

    }, 1500);

});



app.get('/admin/edit/contacts', (req, res) => {
    setTimeout(_ => {
        const sql = `
        SELECT value
        FROM options
        WHERE name = 'contacts'`;
        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                contacts: rows[0]
            }).end();
        });
    }, 1500);
});


app.put('/admin/update/contacts', (req, res) => {

    setTimeout(_ => {

        const { title, email, about, phone, address } = req.body;

        //TODO: Validation

        const value = JSON.stringify({ title, email, about, phone, address });

        const sql = `
                UPDATE options
                SET value = ?
                WHERE name = 'contacts'
                `;

        connection.query(sql, [value], (err) => {
            if (err) throw err;
            res.json({
                message: {
                    type: 'success',
                    title: 'Vartotojai',
                    text: `Kontaktai sėkmingai atnaujinti`
                }
            }).end();
        });


    }, 1500);

});



app.get('/admin/users', (req, res) => {

    setTimeout(_ => {

        if (!checkUserIsAuthorized(req, res, ['admin'])) {
            return;
        }

        const sql = `
        SELECT *
        FROM users`;

        connection.query(sql, (err, rows) => {
            if (err) throw err;
            res.json({
                users: rows
            }).end();
        });

    }, 1500);
});

app.delete('/admin/delete/user/:id', (req, res) => {

    setTimeout(_ => {

        const { id } = req.params;

        const sql = `
        DELETE 
        FROM users 
        WHERE id = ? AND role != 'admin'
        `;

        connection.query(sql, [id], (err, result) => {
            if (err) throw err;
            const deleted = result.affectedRows;
            if (!deleted) {
                res.status(422).json({
                    message: {
                        type: 'info',
                        title: 'Vartotojai',
                        text: `Vartotojas yra administratorius ir negali būti ištrintas arba vartotojas neegzistuoja`
                    }
                }).end();
                return;
            }
            res.json({
                message: {
                    type: 'success',
                    title: 'Vartotojai',
                    text: `Vartotojas sėkmingai ištrintas`
                }
            }).end();
        });

    }, 1500);
});


app.get('/admin/edit/user/:id', (req, res) => {

    setTimeout(_ => {


        if (!checkUserIsAuthorized(req, res, ['admin'])) {
            return;
        }

        const { id } = req.params;
        const sql = `
        SELECT id, name, email, role
        FROM users
        WHERE id = ?
        `;
        connection.query(sql, [id], (err, rows) => {
            if (err) throw err;
            if (!rows.length) {
                res.status(404).json({
                    message: {
                        type: 'info',
                        title: 'Vartotojai',
                        text: `Vartotojas nerastas`
                    }
                }).end();
                return;
            }
            res.json({
                user: rows[0]
            }).end();
        });

    }, 1500);

});


app.put('/admin/update/user/:id', (req, res) => {

    setTimeout(_ => {

        const { id } = req.params;
        const { name, email, role, password } = req.body;

        if (!password) {

            const sql = `
            UPDATE users
            SET name = ?, email = ?, role = ?
            WHERE id = ?
            `;

            connection.query(sql, [name, email, role, id], (err, result) => {
                if (err) throw err;
                const updated = result.affectedRows;
                if (!updated) {
                    res.status(404).json({
                        message: {
                            type: 'info',
                            title: 'Vartotojai',
                            text: `Vartotojas nerastas`
                        }
                    }).end();
                    return;
                }
                res.json({
                    message: {
                        type: 'success',
                        title: 'Vartotojai',
                        text: `Vartotojas sėkmingai atnaujintas`
                    }
                }).end();
            });

        } else {
            const sql = `
                UPDATE users
                SET name = ?, email = ?, role = ?, password = ?
                WHERE id = ?
                `;

            connection.query(sql, [name, email, role, md5(password), id], (err, result) => {
                if (err) throw err;
                const updated = result.affectedRows;
                if (!updated) {
                    res.status(404).json({
                        message: {
                            type: 'info',
                            title: 'Vartotojai',
                            text: `Vartotojas nerastas`
                        }
                    }).end();
                    return;
                }
                res.json({
                    message: {
                        type: 'success',
                        title: 'Vartotojai',
                        text: `Vartotojas sėkmingai atnaujintas`
                    }
                }).end();
            });
        }

    }, 1500);

});

app.post('/login', (req, res) => {

    setTimeout(_ => {

        const { email, password } = req.body;
        const session = md5(uuidv4());

        const sql = `
            UPDATE users
            SET session = ?
            WHERE email = ? AND password = ?
        `;

        connection.query(sql, [session, email, md5(password)], (err, result) => {
            if (err) throw err;
            const logged = result.affectedRows;
            if (!logged) {
                res.status(401).json({
                    message: {
                        type: 'error',
                        title: 'Prisijungimas nepavyko',
                        text: `Neteisingi prisijungimo duomenys`
                    }
                }).end();
                return;
            }
            const sql = `
            SELECT id, name, email, role
            FROM users
            WHERE email = ? AND password = ?
        `;
            connection.query(sql, [email, md5(password)], (err, rows) => {
                if (err) throw err;
                res.cookie('book-session', session, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
                res.json({
                    message: {
                        type: 'success',
                        title: `Sveiki, ${rows?.[0]?.name}!`,
                        text: `Jūs sėkmingai prisijungėte`
                    },
                    session,
                    user: rows?.[0]
                }).end();
            });
        });

    }, 1500);
});

app.post('/logout', (req, res) => {

    setTimeout(_ => {

        const session = req.cookies['book-session'];

        const sql = `
                UPDATE users
                SET session = NULL
                WHERE session = ?
            `;

        connection.query(sql, [session], (err, result) => {
            if (err) throw err;
            const logged = result.affectedRows;
            if (!logged) {
                res.status(401).json({
                    message: {
                        type: 'error',
                        title: 'Atsijungimas nepavyko',
                        text: `Neteisingi prisijungimo duomenys`
                    }
                }).end();
                return;
            }
            res.clearCookie('book-session');
            res.json({
                message: {
                    type: 'success',
                    title: `Atsijungta`,
                    text: `Jūs sėkmingai atsijungėte`
                }
            }).end();
        });

    }, 1500);
});




app.post('/register', (req, res) => {

    const { name, email, password } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({
            message: 'Siunčiamoje formoje yra klaidų',
            errorsBag: {
                email: 'El pašto formatas neteisingas',
            }
        }).end();
        return;
    }

    const sql = `SELECT email FROM users WHERE email = ? `;

    connection.query(sql, [email], (err, rows) => {
        if (err) throw err;
        if (rows.length) {
            res.status(422).json({
                message: 'Siunčiamoje formoje yra klaidų',
                errorsBag: {
                    email: 'Toks el paštas jau yra',
                }
            }).end();
        } else {
            const sql = `
            INSERT INTO users (name, email, password)
            VALUES ( ?, ?, ? )
            `;
            connection.query(sql, [name, email, md5(password)], (err) => {
                if (err) throw err;
                res.status(201).json({
                    message: {
                        type: 'success',
                        title: 'Sveiki!',
                        text: `Malonu, kad prie mūsų prisijungėte, ${name}`
                    }
                }).end();
            });
        }
    });
});




app.listen(port, _ => {
    console.log(`Books app listening on port ${port}`);
});
