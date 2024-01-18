import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    const{status,statusText} = err;
    console.log(err);
   return( 
    <div className="error-container">
        <h1>Oops!</h1>
        <h2>Something went wrong!</h2>
        <h2>{status + " : Page " + statusText}</h2>
   </div>
)
}

export default Error;