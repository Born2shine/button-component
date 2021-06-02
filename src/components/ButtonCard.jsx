import { MdAddShoppingCart } from "react-icons/md"
import Button from "./Button"

const ButtonCard = () => {
    return (
        <>
            <div className="btn-card md">           
                    <Button className="bg-grey-2" htmlCode={'<Button />'}/>       
                    <Button className="bg-grey" htmlCode={'&:hover, &:focus'}/>       
            </div>
            <div className="btn-card md"> 
                    <Button className="outline" htmlCode={'<Button variant=\'outline\'/>'}/>       
                    <Button className="bg-primary-6 outline" htmlCode={'&:hover, &:focus'}/>       
            </div>  
            <div className="btn-card md"> 
                    <Button className="clr-primary" htmlCode={'<Button variant=\'text\'/>'}/>       
                    <Button className="bg-primary-6" htmlCode={'&:hover, &:focus'}/>       
            </div>  
            <div className="btn-card"> 
                    <Button className="bg-primary" htmlCode={'<Button disableShadow />'}/>      
            </div>
            <div className="btn-card md"> 
                    <Button className="bg-grey-2 clr-dark shadow-off" htmlCode={'<Button disabled/>'}/>      
                    <Button className="clr-dark shadow-off" htmlCode={'<Button variant=\'text\' disabled/>'}/>      
            </div> 
            <div className="btn-card col-sm-1"> 
                    <Button className="bg-primary has-icon-left" htmlCode={'<Button startIcon=\'local_grocery_store\'/>'}> <MdAddShoppingCart className="icon"/> Default</Button>      
                    <Button className="bg-primary has-icon-right" htmlCode={'<Button endIcon=\'local_grocery_stor\e/>'}> Default <MdAddShoppingCart className="icon-right"/> </Button>      
            </div>
            <div className="btn-card col-sm-3"> 
                    <Button className="btn-sm bg-primary" htmlCode={'<Button size=\'sm\'/>'}>  Default</Button>      
                    <Button className="btn-md bg-primary" htmlCode={'<Button size=\'md\' />'}> Default  </Button>      
                    <Button className="btn-lg bg-primary" htmlCode={'<Button size=\'lg\' />'}> Default  </Button>      
            </div>
            <div className="btn-card col-sm-3"> 
                    <Button className="bg-grey-2" htmlCode={'<Button color=\'default\'/>'}>  Default</Button>      
                    <Button className="bg-primary" htmlCode={'<Button color=\'primary\' />'}> Default  </Button>      
                    <Button className="bg-secondary-2" htmlCode={'<Button color=\'secondary\' />'}> Secondary  </Button>      
                    <Button className="bg-danger" htmlCode={'<Button color=\'danger\' />'}> Danger  </Button>      
            </div> 
            <div className="btn-card col-sm-3 col-md-4"> 
                    <Button className="bg-grey-2" htmlCode={'&:hover, &:focus'}>  Default</Button>      
                    <Button className="bg-primary-2" htmlCode={''}> Default  </Button>      
                    <Button className="bg-secondary" htmlCode={''}> Secondary  </Button>      
                    <Button className="bg-danger-2" htmlCode={''}> Danger  </Button>      
            </div>  
        </>
    )
}

export default ButtonCard
