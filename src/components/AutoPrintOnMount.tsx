'use client';

import { useEffect } from 'react';

interface AutoPrintOnMountProps {
    enabled: boolean;
}

export function AutoPrintOnMount({ enabled }: AutoPrintOnMountProps) {
    useEffect(() => {
        if (!enabled) return;

        const timer = window.setTimeout(() => {
            window.print();
        }, 900);

        return () => {
            window.clearTimeout(timer);
        };
    }, [enabled]);

    return null;
}
