import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = (props) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }








  
  const handleEdit = ()=>{
    console.log('edit mode acticated')
  }

  return (
    <li className = {styles.item}>
      <input 
        className= {styles.checkbox}
        type="checkbox" 
        checked ={props.completed}
        onChange={ ()=>{props.handleChangeProp(props.id)} }
      />
      <div style={{display:"inlin-block"}} onDoubleClick={handleEdit}>
       <span style={props.completed ? completedStyle:null}>
         {props.children}
       </span>
      </div>
      
      <button
        onClick={()=>{props.delTodoProp(props.id)}}
      >
       <FaTrash color= "darkorange" fontSize= "20px"/>
      </button>
    </li>
  )
};

export default TodoItem;

// props.children:
// gibt aus, was zwischen dem
// öffnenden <TodoItem> und 
// schließenden </TodoItem> Tags steht