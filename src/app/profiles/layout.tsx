import React from 'react';
import ProfileHeader from '@components/ProfileHeader';

export default function ProfileLayout() {
    return (
        // If you want inner divs to show up, you MUST explicitly define the outer div's width and height!
        <div className="pl-[80px] pr-[80px] pt-[40px] pb-[40px] h-[calc(100vh-56px)] overflow-y-scroll w-full">
            <ProfileHeader />
        </div>
    );
}
