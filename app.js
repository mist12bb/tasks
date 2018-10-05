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
    let regexList = {
        title: /^[a-zA-Z]{1} *[0-9A-Za-z!-) ]{3,15}/,
        task: /[a-zA-Z]{1}.{10}/
    };
    let con = document.querySelector(".tasks");

    let form = document.querySelector("#new_task");
    function render_task(task){
        let div = document.createElement("div");
        let ellipse = document.createElement("div");
        let corss = document.createElement("button");
        corss.textContent = "x";
        corss.classList.add("delete");
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
        
        div.appendChild(corss);
        div.appendChild(title);
        div.appendChild(info);
        con.appendChild(div);
        div.appendChild(ellipse);
        div.appendChild(taskLable);
        div.appendChild(taskBox);
        div.appendChild(dateLable);
        div.appendChild(dateBox);
        //deletet task
        corss.addEventListener("click", (e) => {
            e.stopPropagation();

            let id = e.target.parentElement.getAttribute("data-id");
            console.log(id)
            db.collection("project").doc(id).delete();
        });
    }
    //#geting data
    db.collection("project").get().then((snapshot) => {
        snapshot.docs.forEach((doc)=>{
           render_task(doc)
        })
    })
    //#saving data
    form.addEventListener("submit", (e) => {
                let chack = document.querySelector("#chack");
                e.preventDefault();
                if (regexList.title.test(form.title.value) && regexList.task.test(form.task.value)){
                db.collection("project").add({
                    title: form.title.value,
                    info: form.task.value,
                    full: form.info.value,
                })
                chack.innerHTML = "you just add a new task";
            }
            else {
                
                chack.innerHTML = "the title shold be at lest 4 carcter and start with letter and the task at letst 11 caracter";
            }
                form.title.value = "";
                form.task.value = "";
                form.full.value = ""
            }); 

})()
