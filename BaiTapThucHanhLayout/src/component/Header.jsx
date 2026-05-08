import React from 'react'

const Header = () => {
  return (
    <div>
        <header class="bg-gray-900 py-3">
            <div class="container mx-auto px-4 lg:px-20 flex flex-wrap items-center justify-between">
                <a class="text-white text-xl font-semibold" href="#!">Start Bootstrap</a>

                <button 
                class="text-gray-400 border border-gray-700 px-3 py-1 rounded lg:hidden hover:text-white focus:outline-none" 
                type="button"
                >
                <span class="block w-6 h-0.5 bg-current mb-1"></span>
                <span class="block w-6 h-0.5 bg-current mb-1"></span>
                <span class="block w-6 h-0.5 bg-current"></span>
                </button>

                <div class="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarSupportedContent">
                <ul class="flex flex-col lg:flex-row list-none lg:ml-auto mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-4">
                    <li>
                    <a class="text-white block" aria-current="page" href="#!">Home</a>
                    </li>
                    <li>
                    <a class="text-gray-400 hover:text-gray-200 block" href="#!">About</a>
                    </li>
                    <li>
                    <a class="text-gray-400 hover:text-gray-200 block" href="#!">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
