"use client";

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';
import Button from './functional/Button';

function WelcomePage() {
    return (
        <>
            <div>
                <div className="bg-gray-500 w-1/2 h-screen"></div>
                <Button buttonText='Login' ghostMode={false} onClick={() => {}} />
                <Button buttonText='Sign Up' ghostMode={true} onClick={() => {}}/>
            </div>
            <Footer />
        </>
    );
}

export default React.memo(WelcomePage);

// Forget about image for now. That is a later concern.