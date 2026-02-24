import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

export async function GET(request: Request) {
    const filePath = path.join(process.cwd(), 'portfolio_submit.pdf');
    const url = new URL(request.url);
    const shouldDownload = url.searchParams.get('download') === '1';
    const disposition = shouldDownload ? 'attachment' : 'inline';

    try {
        const file = await readFile(filePath);

        return new NextResponse(file, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `${disposition}; filename=\"portfolio_submit.pdf\"`,
                'Cache-Control': 'no-store',
            },
        });
    } catch {
        return NextResponse.json(
            { message: 'portfolio_submit.pdf not found in repository root.' },
            { status: 404 }
        );
    }
}
