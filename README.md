Title: Lorehammer 40K

Technology Used:
1. bcrypt
2. cors
3. express
4. jsonwebtoken
5. mongodb
6. mongoose
7. nodemon
8. passport
9. passport-jwt

![ERD](/imgs/Project-2-ERD.png)

|      Name      | Path           | Verb   | Description                  |   |
|:--------------:|----------------|--------|------------------------------|---|
| indexCards     | /datacards     | GET    | Indexes all datacards        |   |
| showCard       | /datacards/:id | GET    | shows a datacard based on ID |   |
| createCard     | /datacards     | POST   | Creates a new datacard       |   |
| updateDatacard | /datacards/:id | PATCH  | Updates a datacard by its ID |   |
| deleteDeck     | /datacards/:id | DELETE | Deletes a deck               |   |
| signUp         | /sign-up       | POST   | Makes a user                 |   |
| signIn         | /sign-in       | POST   | Logs user in                 |   |
| indexWargear   | /wargears      | GET    | index all wargear            |   |