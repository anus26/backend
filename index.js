import express from "express";
const app = express()
const port = 4000
const users = []

app.use(express.json());
app.get('/', (req, res) => {
  res.send('karachi!')
})
// app.get('/user',(req,res)=>{
//   res.json(user)
//   console.log(abdullah);

// })
// app.get('/user','/id',(req,res)=>{

// }
// add new user
app.post('/user', (req, res) => {
  const { title } = req.body
  if (!title) {
    res.status(400).json({
      message: "title is required"
    })
    return
  }
  users.push({
    title,
    id: Date.now
  })
  res.status(200).json({
    message: "user created",
    data: users
  })
})
let todos=[]
// app.put('/todos/:id',(req,res)=>{
//   const {id}=req.body
//   const {title,completed}=req.body
//   const todo=todos.findIndex((item)=>item.id===parseInt(id))
//   if(!todo){
//     res.status(400).json({
//       message:"title is required"
//     })
    
//   }
//   if (title) todo.title = title;
//   if (completed !== undefined) todo.completed = completed;



// res.status(200).json({
//   message: "user created",
//   data: users
// })
// })


// app.delete('/todos/:id',(req , res)=>{
//   const {id}=req.params

//   const index=todos.findIndex((item)=>item.id === +id)
//   if (index===  -1) {
//     res.status(404).json({
//       message: "not found"
//     })
    
//   }
//   todo.splice(index,1)
  
//   res.status(200).json({

//   message:'todo delete successfully'
//   })
// })


app.get("/", (req, res) => {
  res.send("Todo App API is running!");
});

// Get all todos
app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.status(200).json(todo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(index, 1);
  res.status(200).json({ message: "Todo deleted successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
