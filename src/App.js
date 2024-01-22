import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

//default import
//import HeaderComponent from "./components/Header";
//named import
//import {Title} from "./components/Header";

//BEST WAY TO IMPORT COMPONENTS --->
import HeaderComponent, { Title } from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import RestaurantInfo from "./components/RestaurantInfo";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //this package is used for routing
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
//import * as obj from "./components/Header";


// //react reconcilation key - imp point
// // const heading1 = React.createElement("h1", {
// //     id: "title-1",
// //     className: "Heading-1",
// //     key: "h1",
// // }, "Heading 1 from parcel");

// // React.createElement => Object => HTML(DOM) - imp point

// // const heading2 = React.createElement("h2",{ 
// //     id:"title-2",
// //     className:"Heading-2",
// //     key:"h2",
// // },"Heading 2");

// // const container = React.createElement("div",{
// //     className:"container",
// // },[heading1,heading2]);


//JSX->
// const heading = (
//     <h1 id="heading" key="h-1">
//         Namaste React
//     </h1>
// );

//this is normal js function
// const Title = () => (
//     <h1 id="title" key="t-1">
//         Namaste React Title
//     </h1>
// );


// const HeaderComponent = () => {
//     return(
//     <div>
//         {heading}
//         <Title/>  {/*this is known as component composition  - imp point*/}
//         {/* it can be called as{Title()} */}
//         <h2>Namaste React functional Component</h2>
//         <h2>This is h2 tag</h2>
//     </div>
//     )
// };

// //console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(heading);
// root.render(<HeaderComponent/>); 

// // normal javascript--->
// // var h1 = document.createElement("h1");
// // h1.innerHTML = "Tejas Pundpal";
// // document.getElementById("root").appendChild(h1);



// MealMate app ===>

// App layout -->
// Header
//     -Logo
//     -Nav Items(right side)
//     -Cart
// Body
//     -Search bar
//     -Restraurant list
//         -Restraurant Card    
//             -Image
//             -Name
//             -Ratings
//             -Price
// Footer
//     -Links
//     -Copyright   



//node modules
//parcel,webpack,bundler----why react is fast?
//package.json vs package-lock.json
// React Component
// functional - new - used most of the time  (functional component is a normal js function )
// class based - old 
//component composition
//config driven UI - imp point
//optional chaining=?. ****- imp point
//props in react 
//virtual dom
//reconcilation in react - diff algorithm
//React fiber
//ES6 - destructuring,map-filter-reduce,callback functions,asynch await,promises
//why we use key
//unique key >> index key >>>>>>>no key   (why it is not prefereable to use index as key?)
//what is state variable in react and why need of state variable
//what is react hook
//what is useState() and why
//useEffect()   if we dont pass any dependency then it will call at every render,if we pass empty dependency then it will render only once at initial and if we pass any dependency then it will call at every state change of dependency
//client side routing and server side routing
//class based component -based on js class concept -render method is mandatory in this -constructor in class based component
//custom hooks
//fallback in react
//chunking/dynamic bundling/code splitting/lazy loading/dynamic import
//tailwind css
//redux toolkit-store,createSlice,reducers,configureStore.....


// const burgerking = {
//     name:"Datt Bhel",
//     image:"https://b.zmtcdn.com/data/dish_photos/245/f22d7fb7a385cad4a887e69507975245.jpg",
//     cusines:["Near","Rajwada"],
//     rating:"4.2"
// }


const AppLayout = () => {
    return (
        <Provider store={store}>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </Provider>
    )
}
// console.log(10);
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer />}>
                    <Contact />
                </Suspense>,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<Shimmer />}>
                    <Cart />
                </Suspense>,
            },
            {
                path: "/profile",
                element: <Suspense fallback={<Shimmer />}>
                    <Profile />
                </Suspense>,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantInfo />,
            },
        ],
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);