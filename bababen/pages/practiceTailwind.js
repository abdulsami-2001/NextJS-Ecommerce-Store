import React from 'react'

const PracticeTailwind = () => {
    return (
        <>
            {/* <div className=" cont bg-black ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, adipisci animi labore et natus tenetur sint. Optio est quos nisi maxime deleniti recusandae debitis rem reiciendis distinctio. Praesentium, dignissimos voluptatibus?
                <button type="button" class="btn bg-yellow-400">Light</button>

            </div> */}
            <div className=' bg-yellow-400  min-h-screen sm:bg-red-300 md:bg-pink-400 lg:bg-gray-400' >
                {/* <div> */}
                <ul className=' bg-slate-500 h-20 items-center flex flex-row space-x-4 justify-center cursor-pointer text-white font-bold sm:flex-row sm:text-orange-400 sm:space-x-6 sm:justify-center' >
                    <div className='flex flex-col sm:flex-row sm:space-x-4 md:flex-row md:space-x-10 lg:flex-row lg:space-x-20 ' >
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:space-x-4 md:flex-row md:space-x-10 lg:flex-row lg:space-x-20' >
                        <li>T&C's</li>
                        <li>Reward</li>
                        <li>Privacy Policy</li>
                    </div>
                </ul>
                {/* </div> */}
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque unde dignissimos voluptatum amet possimus tempora odio, voluptatibus vitae odit minus ea sapiente cupiditate eum fugiat iste pariatur veniam magnam illum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae, nostrum tempora corporis necessitatibus voluptate, odio expedita molestias obcaecati deserunt eligendi maiores illo unde eius veritatis ad saepe praesentium blanditiis!
                    Lorem ipsum dolor sit amet consectetur adipisicing e Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate repudiandae, nostrum tempora corporis necessitatibus voluptate, odio expedita molestias obcaecati deserunt eligendi maiores illo unde eius veritatis ad saepe praesentium blanditiis!
                    Lorem ipsum dolor sit amet , tempore praesentium porro, ratione molestiae reprehenderit fuga rem recusandae totam accusantium doloribus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil, voluptas et, minus laborum illum dolore laboriosam voluptatum quod ad ut rem distinctio corrupti doloribus ipsum mollitia odio sequi porro!
                </div>
            </div>
            <div>
                <ul className=' bg-slate-500 h-auto flex space-x-2 justify-center items-center cursor-pointer text-white font-bold' >
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Privacy Policy</li>
                    <li>T&C's</li>
                </ul>
            </div>

        </>
    )
}

export default PracticeTailwind