import { PrismaClient } from "@prisma/client";
import express from "express"

const client = new PrismaClient();
const app = express();

async function insertSomething() {
    const createdUser = await client.user.create({
        data : {
            username : "sobhan sahoo",
            password : "1qadsfasera",
            age : 21,
            city : "basdffbser"
        }
    })
    console.log(createdUser);
}

async function deleteSomething() {
    await client.user.delete({
        where : {
            id : 2
        }
    })
}

async function updateSomething() {
    const updatedUser = await client.user.update({
        where : {
            id : 1
        },
        data : {
            username : "sobhan sahoo is good boy"
        }
    })

    console.log(updatedUser);
}

async function findSomething() {
    const findedUser = await client.user.findFirst({
        where : {
            id : 1
        }
    })

    console.log(findedUser);
}

async function insertTodoSomething() {
    const createdTodo = await client.todo.create({
        data : {
            title : "i can do what ever i want",
            description : "what ever",
            Completed : false,
            User_id : 1
        }
    })

    console.log(createdTodo);
}

async function returnSomething() {
    const data = await client.user.findFirst({
        where : {
            id : 1
        },
        include : {
            todo : true
        }
    })

    console.log(data);
}

app.get("/user", async (req,res) => {
    const users = await client.user.findMany()

    res.json({
        users
    })
})

app.get("/allTodos", async (req, res) => {
  try {
    const allTodo = await client.todo.findMany();
    res.json({ allTodo });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/userWithTodo/:id",async(req,res) => {
    const id = req.params.id

    const data = await client.user.findMany({
        where : {
            id : parseInt(id)
        },
        // include : {
        //     todo : true
        // }
        select : {
            todo : true,
            username : true,
            password : true
        }
    })

    res.json({data})
})

app.listen(3000)
// returnSomething();