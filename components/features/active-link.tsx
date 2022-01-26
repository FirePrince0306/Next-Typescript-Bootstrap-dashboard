import { useRouter } from 'next/router';
import React from 'react';

import type { PropsWithChildren } from 'react';

export type activeProps = PropsWithChildren<{
    path ?: string;
}>;

const ActiveLink: React.FC<activeProps> = ({ path, children }) => {
    const router = useRouter();
    const className = router.asPath === `/${path}` ? "active" : '';
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default ActiveLink;