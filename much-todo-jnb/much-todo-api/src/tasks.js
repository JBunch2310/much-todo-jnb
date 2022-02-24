const { FieldValue, serverTimestamp} = require("firebase-admin").firestore;
const { connectDb } = require("./connectDb");

exports.createTask = (request, response) => {
  const newTask = {
    task: request.body.task,
    done: false,
    createdAt: FieldValue.serverTimestamp()
  };
  const db = connectDb();
  db.collection("tasks")
    .add(newTask)
    .then((docRef) => {
      response.json({ message: `Document ${docRef.id} created successfully` });
    })
    .catch((err) => {
      response.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.getTasks = (request, response) => {
  const db = connectDb();
  db.collection("tasks")
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      response.send(taskList);
    })
    .catch((err) => response.status(500).send(err));
};

exports.updateTasks = (request, response) => {
    const { taskId } = request.params
    const isDone = request.body.isDone
    const db = connectDb();
    db.collection('tasks').doc(taskId).update({ done : isDone })
        .then(doc => response.status(202).send(doc))
        .catch((err) => response.status(500).send(err)); 

};