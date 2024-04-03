alert("chamou")

const fetchTasks = async () =>{
  const response = await fetch('http://localhost:8888/cadUsers/', {
    method: 'GET',
    headers: {
        'Authorization': '44d939129da1372c74eb4798ffd930cc' // 
    }
    
})

const tasks = await response.json();
console.log(tasks);
}
 
fetchTasks();

