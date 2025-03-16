import CardWrapper from "./CardWrapper";
import Heading from "./Heading";
import ImageBox from "./Image";
import teddy from '../assets/124.gif'

export default function MostImp(){
    return(
        <CardWrapper>
                <Heading title="Would You Have a Date with Me?" />
                <ImageBox link={teddy} alt="date" />
        </CardWrapper>
    )
}