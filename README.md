Title: Lorehammer 40K

Technology Used:
bcrypt
cors
express
jsonwebtoken
mongodb
mongoose
nodemon
passport
passport-jwt

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