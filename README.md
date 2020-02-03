# back-end
Node/Java back end student here

Hi Everyone!

HOW TO USE OUR API:

First, I'm truly grateful to be a part of this team, and I hope you find my contributions useful. The following endpoints should enable you to reach MVP, and with creativity perhaps we can hit stretch together as well. 
Please let me know if there are any questions. 

Happy Coding!


Our API is live at https://spotify-song-suggester-5.herokuapp.com/

API Documentation

Unauthenticated GET requests:

[GET] to https://spotify-song-suggester-5.herokuapp.com/

Authentication

[POST] to  api/auth/register : creates user. Pass in the following credentials of your choice as the body of the request: { username: 'yourusername', password: 'yourpassword'}

[POST]  to api/auth/login : returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'yourusername', password: 'yourpassword' }

[GET]  to api/auth/logout : invalidates the user. Pass in the following credentials as the body of the request: { username: 'yourusername', password: 'yourpassword' }






CRUD Endpoints


As of right now the shape of the data is :

{
    song_name: "name",
    artist_name: "name",
    duration: "integer",
    genre: "genre",
    song_url: "url"
}


[GET] to /api/songs  : returns the list of Spotify's top 8 songs as of 2/1/20, along with the corresponding artist, duration, genre, and a url for each song

[POST] to /api/songs  : creates a new song entry. Requires { song_name: "Name Here" artist_name: "Name Here"} in the body of the request, other information is optional.

[PUT] to /api/songs/:id  : updates the song using the id passed as part of the URL. Send the song object with the updated information as the body of the request.

[DELETE] to /api/songs/:id  : removes the song using the id passed as part of the URL .

Thanks again!

UPDATE: I've added additional endpoints for authorization, and they are as follows

[POST] to /api/auth/login : I've added a default admin user. To log in as admin pass in the following credentials in the body of the request: {username: 'admin2', password: 'Lambda1234$'}
 
 **Only Admin2 may access the following endpoints**
 
[GET] to /api/users  : returns a list of users and passwords

[POST] to /api/users  : creates a new user entry. Does not register user, but adds them to your list of users. Requires { username: "Name Here" password: "Name Here"} in the body of the request.

[PUT] to /api/users/:id  : updates the user using the id passed as part of the URL. Send the user object with the updated information as the body of the request.

[DELETE] to /api/users/:id  : removes the song using the id passed as part of the URL .

 
 
 