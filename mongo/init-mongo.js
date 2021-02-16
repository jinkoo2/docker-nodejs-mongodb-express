db.createUser({
    user:"dbuser",
    pwd: "dbpw",
    roles: [
        {
            role: "readWrite",
            db: "mydb"
        }
    ]
})

