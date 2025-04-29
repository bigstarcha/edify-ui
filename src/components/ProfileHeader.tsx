'use client';
import React from 'react';
import Image from 'next/image';
import { IoChatbubbleEllipsesSharp  } from 'react-icons/io5';
import logo from '../assets/images/sampleperson.jpeg';

function ProfileHeader() { // This will need props passed down later on
    const url = "../assets/images/samplebackground.jpg";
    const className = `bg-[url(${url})] bg-cover w-full h-[240px] rounded-r-[20px]`; // You want to make the left rounded to match the profile picture.

    // Currently seeing a react hydration error, will fix later.

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row relative">
                <Image src={logo} alt='profile' height={240} width={240} style={{ position: 'absolute', borderRadius: 120, border: '10px solid #fdfdfd' }}/> {/** Next image takes inline CSS props. */}
                <div className="mr-[120px]"></div> {/** Shoehorn this extra div */}
                <div className={className}></div> {/** This is supposed to be a background image */}
            </div>
            <div className="mt-[20px] flex flex-row w-full justify-between">
                {/** Name container */}
                <div>
                    <h1 className="text-5xl font-semibold">
                        Brandon Lake
                    </h1>
                    <div className="flex flex-row mt-[10px] max-w-1/4 justify-between">
                        <h2 className="text-2xl">
                            500 friends
                        </h2>
                        <h2 className="text-2xl">
                            20 mutual
                        </h2>
                    </div>
                    <h2 className="text-lg mt-[10px] max-w-2/3">
                        John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.
                    </h2>
                </div>
                <button
                    className="bg-primary-400 hover:bg-primary-600 text-base mb-3 rounded-md py-2 px-4 text-2xl hover:bg-primary-500 transition duration-200 w-[200px] h-[50px]"
                >
                    Add Friend
                </button>
                <button
                    className="ml-[15px] flex flex-row items-center bg-primary-400 hover:bg-primary-600 text-base mb-3 rounded-md py-2 px-4 text-2xl hover:bg-primary-500 transition duration-200 h-[50px]"
                >
                    <IoChatbubbleEllipsesSharp />
                    <div className="ml-2"></div>
                    Message
                </button>
            </div>
        </div>
    );
}

export default React.memo(ProfileHeader);
