import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


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

findSomething();