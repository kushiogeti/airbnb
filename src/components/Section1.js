import section1 from '../assets/section1.png';

function Section1(props){
    return(
        <div>
            <h2>{props.heading}</h2>
            <img src={section1}></img>
            <h3>{props.description}</h3>
        </div>
    )
}

export default Section1;