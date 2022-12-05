import styles from './news.module.css';
 
 function NewsMenu({active,setActive,setCategory}){
   const links = [
    {id:1, name: "General", value:"general"},
    {id:1, name: "Business", value:"business"},
    {id:1, name: "Entertainment", value:"entertainment"},
    {id:1, name: "Health", value:"health"},
    {id:1, name: "Science", value:"science"},
    {id:1, name: "Sports", value:"sports"},
    {id:1, name: "Technology", value:"technology"},
   ]
   // Function that will set the state variables to whatever we pass into it when we call it later. I will use 'id', 'value' as the func parameters

   function onClick(id,value){
    setActive(id)
    setCategory(value)
   }
    // actual menu , with mapped links create above 
   return (
    <nav className={styles.menu}>
        <ul>
        {links.map(link => (
            <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => onClick(link.id,link.value)}
            >
            {link.name}
            </li>
        ))}
        </ul>
    </nav>
   )
}

export default NewsMenu;