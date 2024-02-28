 const Contact = (props) =>{
    return(
        <div>
        <h1>i have contacted to {props.name} address = {props.address}</h1><br></br>
        <p>{props.users.map((item,index)=>{
            return (<li key={index}>{item.userName}</li>)
        })}</p>
        </div>
    )
}

export default Contact

