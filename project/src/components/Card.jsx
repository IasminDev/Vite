// TipeScript ->
// interface ICard {
//     name: String;
//     desc: String;
//     value: String;
//     image: String;
//     alt: String;
// }

export const Card = (props) => {
    return(
        <>            
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>{props.value}</p>
            <img src={props.image} alt="Image" width={200} height={200}/>
        </>
    )
}