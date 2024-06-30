import React from 'react'

const Header = () => {
  return (
    <div>
    <div className="flex justify-between items-start flex-wrap my-32">
        <p className='mb-[2.4rem] text-[17px]'>
            <span>
            Achraf Oubakouz
            </span>
            
            <span className='text-[#808080]'>
            &nbsp;is a software engineer specializing <br />
            in building websites, applications and everything in between.
            </span>
        </p>

        <div className='flex gap-[1.75vw] text-[13px]'>
            <button className="pill">Linkedin</button>
            <button className="pill">Contact</button>
            <button className="pill">0.09g</button>
        </div>
    </div>
    </div>
  )
}

export default Header;