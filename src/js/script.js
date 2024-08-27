const btnAddTarefa = document.querySelector(".btn-add-tarefa")
const tarefas = document.querySelector(".tarefas")
const inputTarefa = document.querySelector(".input-tarefa")

const createTask = document.createElement("div")

btnAddTarefa.addEventListener("click", () => {
  const tarefa = inputTarefa.value
  createTask.innerHTML += `
  <li class="tarefa"> 
    ${tarefa}
      <span class="btn-deletar-tarefa" onclick="deletarTarefa(this)">
        <i class="fa-solid fa-x"></i> 
      </span>
  </li>  
`
  tarefas.appendChild(createTask)
  inputTarefa.value = ""
})

function deletarTarefa(li) {
  li.parentElement.remove()
}
