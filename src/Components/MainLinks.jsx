import { Link } from "react-router-dom";


export default function MainLinks() {
const elementiUl = ["TRENDING", "PODCAST", "MOODS AND GENRES", "NEW RELEASES", "DISCOVER" ];

    return(
        <>
            <div>
                <ul>
                    {
                      elementiUl.map((e, index) => {
                       return (<li key={index}> <Link className='linkMain' > {e} </Link> </li>) 
                      }
                     )
                    }
                </ul>
            </div>
        </>
    )
}