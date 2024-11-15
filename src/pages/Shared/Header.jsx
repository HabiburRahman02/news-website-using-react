
import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex justify-center text-center my-8  space-y-8'>
            <div>
                <img src={logo} alt="" />
                <p className='text-lg font-semibold text-gray-500'>Journalism Without Fear or Favour</p>
                <div className='font-semibold'>{moment().format("dddd, MMMM Do YYYY")}</div>
            </div>
        </div>
    );
};

export default Header;