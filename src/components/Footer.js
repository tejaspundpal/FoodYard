import logo from "../assets/images/logo.png";
import { Footer } from 'flowbite-react';

const FooterComponent = () => {
    return (
        <Footer container className='bg-gray-300'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://img.icons8.com/arcade/64/fast-food.png"
            alt="FoodYard Logo"
            name="FoodYard"
          />
          <Footer.LinkGroup>
            <Footer.Link className="text-gray-700 font-medium" href="#">About</Footer.Link>
            <Footer.Link className="text-gray-700 font-medium" href="#">Privacy Policy</Footer.Link>
            <Footer.Link className="text-gray-700 font-medium" href="#">Licensing</Footer.Link>
            <Footer.Link className="text-gray-700 font-medium" href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider/>
        <Footer.Copyright className="text-gray-700 font-medium"  href="#" by="FoodYard™" year={2024} />
      </div>
    </Footer>
    )
}

export default FooterComponent;