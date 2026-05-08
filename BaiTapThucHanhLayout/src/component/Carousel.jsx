import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div class="py-10">
            <div class="container mx-auto px-4 lg:px-20">
                <div class="p-4 lg:px-10 py-2 bg-gray-100 rounded-xl">
                    <div class="m-2 lg:m-10">
                        <h1 class="text-5xl font-bold">A warm welcome!</h1>
                        <p class="text-2xl mt-4">
                            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                        </p>
                        <a class="inline-block bg-blue-600 text-white text-xl font-medium py-3 px-6 rounded-lg mt-6 hover:bg-blue-700 transition-colors" href="#!">
                            Call to action
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel