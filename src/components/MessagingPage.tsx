'use client';
import React, { ReactNode } from 'react';

function MessagingPage({ children }: { children: ReactNode }) {
    return (
        <div>
            <div>Welcome to messaging!</div>
            {children}
        </div>
    );
}

export default React.memo(MessagingPage);
