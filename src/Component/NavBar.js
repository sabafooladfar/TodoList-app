const NavBar = ({unCompletedTodos}) => {
    return ( 
        <div>
            Uncompleted Todos : <button>{unCompletedTodos}</button>
        </div>
     );
}
 
export default NavBar;