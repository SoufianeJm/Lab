"use client";
import React, { useState } from 'react';
import Components from '../constants/Components';
  

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', 'Navbar', "Button", 'Hero', 'Footer'];

    return (
        <div className='overflow-hidden '>
            <div className='mx-auto flex w-full max-w-screen-2xl gap-3 py-3'>
                <div className='relative overflow-hidden'>
                    <div className='scrollbar-hide relative flex-1 overflow-x-scroll'>
                        <div className="flex gap-1.5">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`focus-visible::ring inline-flex h-8 select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#1A1A1A] pl-3.5 pr-4 font-medium tracking-tighter text-[#808080] ring-offset-black transition-colors hover:bg-white hover:text-black focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                                        selectedCategory === category ? 'bg-white text-black' : ''
                                    }`}
                                >
                                    <div className='flex items-center justify-center text-[13px]'>
                                        &nbsp;{category}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-grid'>
                {Components.filter(component => 
                    selectedCategory === 'All' || component.category.toLowerCase() === selectedCategory.toLowerCase()
                ).map(component => (
                    <div key={component.id} className='website-card'>
                        <img src={component.img} alt={component.title} className='website-image' />
                        <div className="card-info">
                            <a className='text-left pl-1 flex'>
                            <h2 className='pr-2' >{component.title}</h2>
                            </a>
                            
                                <div className="">
                                {component.technologies.map((img, index) => (
                                    <img src={img} key={component.id} className="inline w-8 text-[.8rem] text-center bg-[#1a1a1a] px-[7px] py-[3px] mr-[4px] rounded-[4px] text-[#808080]" />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
