const React = require('react')

let doneMsg;

class Index extends React.Component{
    render(){
        const { allTodos, msg } = this.props
        // console.log(allTodos)
        if(msg !== undefined) {
            return(
                <div>
                <h1>To Do List</h1>
                <h3>{msg}</h3>
                <hr/>
                <form action="/" method="POST">
                    <label htmlFor="todo">Add To-Do item</label>
                    <input type="text" name="name" id="todo"/>
                    <input type="submit"/>
                </form>
                </div>
            )
        }
        else {
            return(
                <div>
                <h1>To Do List</h1>
                <ul>
                {allTodos.map((item, index) => (
                    <div>
                        <li>{item.name}-{ item.done  === false ? doneMsg = 'not done' : doneMsg = 'done' `${doneMsg}`}</li>
                        <form action={`/${item._id}?_method=DELETE`} method="POST">
                        <input type="submit" value='delete'/>
                        </form>
                    </div>
                ))}
                </ul>
                <hr/>
                    <form action="/" method="POST">
                        <label htmlFor="todo">Add To-Do item</label>
                        <input type="text" name="name" id="todo"/>
                        <input type="submit"/>
                    </form>
                </div>
            )
        }
        }
}


module.exports = Index;