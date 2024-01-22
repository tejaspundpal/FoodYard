import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo1.jpg'

// const About = () => {
//   return (
//     <div>
//         <h1>This is the about page</h1>
//         <Profile name="Tejas"/>
//         <ProfileClass name="Tejas Class"/>
//     </div>
//   )
// }

class About extends Component{
  constructor(props){
    super(props); 
}

  render(){
    return (
      <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About <span className='text-blue-500'>FoodYard</span></h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to FoodYard, your go-to destination for delicious and convenient food ordering.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              At FoodYard, we strive to provide a seamless and enjoyable food ordering experience for our users.
              Our mission is to connect food lovers with a diverse range of culinary delights while ensuring
              quick and reliable delivery.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why <span className='text-blue-500'>FoodYard?</span></h2>
            <p className="text-gray-700">
              With a passion for great food and cutting-edge technology, FoodYard stands out in the world of
              online food ordering. We collaborate with top restaurants and use Swiggy's API to bring you a
              real-time menu with mouth-watering options.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/">
          <img alt="FoodYard Image" className="rounded-lg shadow-lg h-48" src={logo1}/>
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

export default About