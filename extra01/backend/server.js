import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "Math Joke",
            content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
        },
        {
            id: 3,
            title: "Dad Joke",
            content: "I only know 25 letters of the alphabet. I don’t know y."
        },
        {
            id: 4,
            title: "Work Joke",
            content: "Why don’t scientists trust atoms? Because they make up everything!"
        },
        {
            id: 5,
            title: "Food Joke",
            content: "Why don’t eggs tell jokes? Because they’d crack each other up."
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log("The server is listening to requests")
})