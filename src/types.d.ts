type AddTodo = (newTodo: string) => void;

type Todo = {
    text: string;
    complete: boolean
}


type ToggleComplete = (selectedTodo: Todo) => void

type FormData = {
    title: string,
    time: string,
    details: string
}