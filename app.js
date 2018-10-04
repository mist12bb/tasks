let config = {
    apiKey: "AIzaSyAK724ahvQrWCwYpQ0K5-NPxzqnpZFj_vc",
    authDomain: "time-mangement-app.firebaseapp.com",
    databaseURL: "https://time-mangement-app.firebaseio.com",
    projectId: "time-mangement-app",
    storageBucket: "time-mangement-app.appspot.com",
    messagingSenderId: "800938732583"
};
firebase.initializeApp(config);
let db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

(function(){
    let con = document.querySelector(".tasks");

    function render_task(task){
        let div = document.createElement("div");
        let ellipse = document.createElement("div");
        let taskLable = document.createElement("div");
        let taskBox = document.createElement("div");
        let dateLable = document.createElement("div");
        let dateBox = document.createElement("div");
        div.classList.add("box");
        taskLable.classList.add("task-lable");
        taskBox.classList.add("task-box");
        dateLable.classList.add("date-lable");
        dateBox.classList.add("date-box");
        ellipse.classList.add("ellipse");
        let info = document.createElement("p");
        let title = document.createElement("p");
        info.classList.add("info");
        title.classList.add("title");title.textContent =  task.data().title == undefined ? task.data().title:"title"
        div.setAttribute("data-id", task.id);
        info.textContent = task.data().info;
        taskBox.textContent = task.data().full;
        title.textContent = task.data().title;
        dateBox.textContent = task.data().time;
        taskLable.textContent = "Task";
        dateLable.textContent = "date";

        div.appendChild(title);
        div.appendChild(info);
        con.appendChild(div);
        div.appendChild(ellipse);
        div.appendChild(taskLable);
        div.appendChild(taskBox);
        div.appendChild(dateLable);
        div.appendChild(dateBox);
    }
    db.collection("project").get().then((snapshot) => {
        snapshot.docs.forEach((doc)=>{
           render_task(doc)
        })
    })

})()
