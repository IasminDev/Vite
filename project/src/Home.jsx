import Graphics from "./components/Graphics"

export const Home = () =>{
    return(
        <>
            <Graphics text="Grafico de linha" color="lightpink" whatChart='line'/>
            <Graphics text="Grafico de area" color="lightblue" whatChart='area'/>
            <Graphics text="Grafico de pizza" color="lightgreen" whatChart='pie'/>
            <Graphics text="Grafico de barra" color="lightgray" whatChart='bar'/>
        </>
    )
}