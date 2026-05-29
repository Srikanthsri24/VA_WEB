import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
    industryPagesData,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Workflow,
} from "./industryPagesData";

const IndustryPage = () => {
    const { industrySlug } = useParams();

    const page = industryPagesData[industrySlug];

    if (!page) {
        return <Navigate to="/services" replace />;
    }

    const HeroIcon = page.heroIcon;
    const HighlightIcon = page.highlightIcon;
    const FloatingIcon = page.floatingIcon;
    const SectionIcon = page.sectionIcon;
    const ModulesIcon = page.modulesIcon;
    const ModulesHighlightIcon = page.modulesHighlightIcon;

    return (
        <Layout>

            <section className="relative overflow-hidden bg-background">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-[-120px] top-[-120px] h-[330px] w-[330px] rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute right-[-140px] top-[200px] h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />
                    <div className="absolute bottom-[-160px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="container px-4 py-4 pt-4">
                    <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="lg:mt-24 md:mt-10 mt-6">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                <Sparkles className="h-4 w-4" />
                                {page.badge}
                            </div>

                            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                {page.title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                                {page.description}
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    {page.buttonText}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>

                                <a
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                                >
                                    {page.secondaryButtonText}
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[2rem] border border-border bg-card/80 p-5 shadow-2xl backdrop-blur-xl">
                                <div className="rounded-[1.5rem] border border-border bg-background p-6">
                                    <div className="mb-6 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                {page.hubSmallTitle}
                                            </p>
                                            <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                                                {page.hubTitle}
                                            </h2>
                                        </div>

                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                                            <HeroIcon className="h-7 w-7" />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {page.hubCards.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <div
                                                    key={item.title}
                                                    className="rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                                                >
                                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                        <Icon className="h-5 w-5" />
                                                    </div>

                                                    <h3 className="font-semibold text-foreground">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                                        <div className="flex items-start gap-3">
                                            <HighlightIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                            <p className="text-sm leading-6 text-muted-foreground">
                                                {page.highlightText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <FloatingIcon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            {page.floatingTitle}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {page.floatingText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {page.stats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                            >
                                <h3 className="font-display text-2xl font-bold text-primary">
                                    {item.value}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-muted/30 py-10 pt-6">
                <div className="container px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <SectionIcon className="h-4 w-4" />
                            {page.sectionBadge}
                        </div>

                        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                            {page.sectionTitle}
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            {page.sectionDescription}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {page.solutions.map((solution) => {
                            const Icon = solution.icon;

                            return (
                                <div
                                    key={solution.title}
                                    className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
                                >
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="font-display text-xl font-semibold text-foreground">
                                        {solution.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-muted-foreground">
                                        {solution.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-background py-10">
                <div className="container px-4">
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                <ModulesIcon className="h-4 w-4" />
                                {page.modulesBadge}
                            </div>

                            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                                {page.modulesTitle}
                            </h2>

                            <p className="mt-4 leading-8 text-muted-foreground">
                                {page.modulesDescription}
                            </p>

                            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/10 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                                        <ModulesHighlightIcon className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <h3 className="font-display text-lg font-semibold text-foreground">
                                            {page.modulesHighlightTitle}
                                        </h3>
                                        <p className="mt-2 leading-7 text-muted-foreground">
                                            {page.modulesHighlightText}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {page.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <p className="text-sm font-medium leading-6 text-foreground">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted/30 py-10">
                <div className="container px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Workflow className="h-4 w-4" />
                            Implementation Process
                        </div>

                        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                            {page.processTitle}
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            {page.processDescription}
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {page.steps.map((item) => (
                            <div
                                key={item.step}
                                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                            >
                                <div className="mb-5 inline-flex rounded-2xl bg-primary px-4 py-2 font-display text-lg font-bold text-primary-foreground">
                                    {item.step}
                                </div>

                                <h3 className="font-display text-lg font-semibold text-foreground">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-10">
                <div className="container px-4">
                    <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary p-8 text-primary-foreground shadow-2xl sm:p-10 lg:p-12">
                        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                                    {page.ctaTitle}
                                </h2>

                                <p className="mt-4 max-w-3xl leading-8 text-primary-foreground/85">
                                    {page.ctaDescription}
                                </p>
                            </div>

                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                Contact Our Team
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default IndustryPage;