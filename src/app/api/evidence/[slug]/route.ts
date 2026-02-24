import { NextResponse } from 'next/server';
import { readEvidenceMarkdown } from '@/lib/evidence';

export async function GET(
    _request: Request,
    context: { params: Promise<{ slug: string }> }
) {
    const { slug } = await context.params;
    const markdown = await readEvidenceMarkdown(slug);

    if (markdown === null) {
        return NextResponse.json({ message: 'Evidence not found or unreadable.' }, { status: 404 });
    }

    return new NextResponse(markdown, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-store',
        },
    });
}
