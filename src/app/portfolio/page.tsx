import { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import classes from './portfolio.module.css';

export const metadata: Metadata = {
    title: 'Portfolio',
};

export default function PortfolioPreviewPage() {
    return (
        <main className={classes.page}>
            <section className={classes.toolbar}>
                <p className={classes.toolbarTitle}>포트폴리오 출력</p>
                <div className={classes.actions}>
                    <Link href="/portfolio-submit?print=1" className={classes.btnPrimary}>
                        출력하기 / PDF 저장
                    </Link>
                    <Link href="/portfolio-submit" target="_blank" rel="noreferrer" className={classes.btnGhost}>
                        출력 미리보기
                    </Link>
                </div>
            </section>
            <Hero />
            <Skills />
            <ProjectsSection />
            <AboutSection />
        </main>
    );
}
