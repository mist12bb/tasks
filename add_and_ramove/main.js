(function()
    {
        /* let form = document.querySelector("#new_task");
        console.log({title, task, form});
        form.addEventListener("submit", (e) => {
            let title = document.querySelector("#title").vlaue;
            let task = document.querySelector("#task").vlaue;
                e.preventDefault();
                db.collection("tasks").add({
                    tilte: form.tilte.vlaue,
                    info: form.task.vlaue
                })
                //e.preventDefault();
            }); */
/*             let form = document.querySelector("#new_task")
            let btn = document.querySelector(".btn");
            btn.addEventListener("click", ()=>{
                let task = document.querySelector("#task").;
                let title = document.querySelector("#title").value;
                console.log(task);
                console.log(title);
                

            }) */
        console.log({title, task, form});
        form.addEventListener("submit", (e) => {
                e.preventDefault();
                console.log(
                 {   tilte: title.value,
                    info: task.value}
                )
                //e.preventDefault();
            });
    }
)()