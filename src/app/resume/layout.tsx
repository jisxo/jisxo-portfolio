import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
    title: 'Jiseo_Jeong_ML_Data_Engineer_Resume',
};

export default function ResumeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
