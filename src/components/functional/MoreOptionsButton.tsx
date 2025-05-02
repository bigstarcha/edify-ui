'use client';
import React from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

function MoreOptionsButton() {
    // Worry about click functionality later.
    return (
        <button className="ml-[15px] px-3 text-2xl rounded-md bg-gray-300 hover:bg-gray-400 transition duration-200 w-max h-[40px]">
            <IoEllipsisHorizontalSharp />
        </button>
    );
}

export default React.memo(MoreOptionsButton);
