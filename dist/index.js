"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
function insertSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const createdUser = yield client.user.create({
            data: {
                username: "sobhan sahoo",
                password: "1qadsfasera",
                age: 21,
                city: "basdffbser"
            }
        });
        console.log(createdUser);
    });
}
function deleteSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 2
            }
        });
    });
}
function updateSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedUser = yield client.user.update({
            where: {
                id: 1
            },
            data: {
                username: "sobhan sahoo is good boy"
            }
        });
        console.log(updatedUser);
    });
}
function findSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const findedUser = yield client.user.findFirst({
            where: {
                id: 1
            }
        });
        console.log(findedUser);
    });
}
function insertTodoSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const createdTodo = yield client.todo.create({
            data: {
                title: "i can do what ever i want",
                description: "what ever",
                Completed: false,
                User_id: 1
            }
        });
        console.log(createdTodo);
    });
}
function returnSomething() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield client.user.findFirst({
            where: {
                id: 1
            },
            include: {
                todo: true
            }
        });
        console.log(data);
    });
}
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany();
    res.json({
        users
    });
}));
app.get("/allTodos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodo = yield client.todo.findMany();
        res.json({ allTodo });
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
app.get("/userWithTodo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield client.user.findMany({
        where: {
            id: parseInt(id)
        },
        // include : {
        //     todo : true
        // }
        select: {
            todo: true,
            username: true,
            password: true
        }
    });
    res.json({ data });
}));
app.listen(3000);
// returnSomething();
