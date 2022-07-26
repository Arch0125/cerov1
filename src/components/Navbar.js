import React from 'react';

const Navbar = () => {
    return ( 
        <div className=' flex flex-col w-[15%] h-screen text-white items-center bg-gradient-to-t from-indigo-900 to-black p-2 ' >
            <p className='text-2xl font-thin mb-14'>CERO v1</p>
            <a className=' bg-white bg-opacity-10 w-full text-center p-3 m-1 rounded-xl hover:bg-opacity-50 hover:bg-indigo-700' >Borrow</a>
            <a className=' bg-white bg-opacity-10 w-full text-center p-3 m-1 rounded-xl hover:bg-opacity-50 hover:bg-indigo-700' >Liquidity</a>
            <a className=' bg-white bg-opacity-10 w-full text-center p-3 m-1 rounded-xl hover:bg-opacity-50 hover:bg-indigo-700' >Stream</a>
        </div>
     );
}
 
export default Navbar;