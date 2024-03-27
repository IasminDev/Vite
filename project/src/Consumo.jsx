import { Card } from "./components/Card"
import Menu from "./components/Menu"
import Data from "./constants/coffee.json"

export const Consumo = () => {
    return(
        <div>
            <Menu/>
            <br/>
            Consumo JSON
            {Data.map((item) => {
                return(
                    <Card 
                        name={item.name}
                        desc={item.desc}
                        value={item.value}
                        image={item.image}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}