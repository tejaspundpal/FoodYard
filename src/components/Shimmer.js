const Shimmer = () => {
    return (
        <div className="mt-20">
            <input className="m-4 w-60 h-7 bg-gray-200 rounded-md animate-pulse" />
            <button className="px-2 py-0.5 mx-3 bg-gray-200 rounded-md animate-pulse"></button>
            <div className="flex flex-wrap">
                {Array(10).fill("").map((e, index) => (
                    <div key={index} className="w-60 h-80 rounded-md bg-gray-200 m-5 animate-pulse"></div>))
                }
            </div>
        </div>
    )
}

export const ShimmerResMenu = () => {
    return (
        <div className='flex flex-col bg-gray-100 p-4 mt-20'>
            <div className='bg-white p-4 shadow-lg rounded-md mb-4'>
                <div className='flex items-center mb-4'>
                    <div className='w-32 h-32 bg-gray-300 animate-pulse rounded-full mr-4'></div>
                    <div>
                        <div className='w-28 h-1 bg-gray-300 animate-pulse mb-5'></div>
                        <div className='w-28 h-1 bg-gray-300 animate-pulse mb-5'></div>
                        <div className='w-28 h-1 bg-gray-300 animate-pulse'></div>
                    </div>
                </div>
            </div>

            <div className='bg-white p-4 shadow-md rounded-md'>
                <h3 className='text-lg font-bold mb-4 text-gray-800'>Recommended Menu:</h3>
                <ul>
                    {[...Array(5).keys()].map((index) => (
                        <li key={index} className='flex items-center justify-between text-gray-700 mb-2 border-b-2 border-gray-300'>
                            <div className='flex items-center'>
                                <div className='w-20 h-20 bg-gray-300 animate-pulse rounded-md mr-2 mb-2'></div>
                                <div>
                                    <div className='w-10 h-1 bg-gray-300 animate-pulse mb-5'></div>
                                    <div className='w-10 h-1 bg-gray-300 animate-pulse mb-5'></div>
                                </div>
                            </div>
                            <div className='bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700'></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Shimmer; 