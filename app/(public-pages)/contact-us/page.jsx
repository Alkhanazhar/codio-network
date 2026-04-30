"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowRightIcon,
    CheckCircle2,
    MapPin,
    Mail,
    Phone,
    Zap,
    Globe,
    Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const services = [
    "Agentic AI",
    "AI Integration & Automation",
    "Web Applications",
    "Mobile Applications",
    "Other",
];

const contactInfo = [
    { icon: MapPin, label: "Our Office", value: "New Delhi, India" },
    { icon: Mail, label: "Email Us", value: "codionetwork@gmail.com" },
    { icon: Phone, label: "Call Us", value: "+923080058815" },
];

const floatingIcons = [
    { icon: Zap, top: "12%", left: "8%", delay: 0 },
    { icon: Globe, top: "60%", left: "5%", delay: 0.4 },
    { icon: Cpu, top: "80%", left: "78%", delay: 0.8 },
];

function validate(data) {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = "Enter a valid email";
    if (!data.company.trim()) errors.company = "Company is required";
    if (!data.service) errors.service = "Please select a service";
    if (!data.message.trim()) errors.message = "Message is required";
    else if (data.message.trim().length < 20)
        errors.message = "Message must be at least 20 characters";
    return errors;
}

export default function ContactSection() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const headingRef = useRef(null);
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
    const successRef = useRef(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating orbs
            gsap.to(orb1Ref.current, {
                y: -30,
                x: 15,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(orb2Ref.current, {
                y: 25,
                x: -20,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });

            // Floating icons
            gsap.utils.toArray(".float-icon").forEach((el, i) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, scale: 0.5, y: 20 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.2,
                        ease: "back.out(1.7)",
                        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
                    }
                );
                gsap.to(el, {
                    y: i % 2 === 0 ? -12 : 12,
                    duration: 2.5 + i * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.3,
                });
            });

            // Heading reveal
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
                }
            );

            // Left panel
            gsap.fromTo(
                leftRef.current,
                { opacity: 0, x: -60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: { trigger: leftRef.current, start: "top 80%" },
                }
            );

            // Right form panel
            gsap.fromTo(
                rightRef.current,
                { opacity: 0, x: 60 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    delay: 0.15,
                    scrollTrigger: { trigger: rightRef.current, start: "top 80%" },
                }
            );

            // Stagger form fields
            gsap.fromTo(
                ".form-field",
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.3,
                    scrollTrigger: { trigger: rightRef.current, start: "top 75%" },
                }
            );

            // Contact info items
            gsap.fromTo(
                ".contact-item",
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.12,
                    ease: "power2.out",
                    delay: 0.5,
                    scrollTrigger: { trigger: leftRef.current, start: "top 75%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (
        e
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate(form);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            // Shake animation on error
            gsap.fromTo(
                rightRef.current,
                { x: -8 },
                { x: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" }
            );
            return;
        }
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1600));
        setLoading(false);
        setSubmitted(true);
        // Success animation
        gsap.fromTo(
            successRef.current,
            { opacity: 0, scale: 0.85, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
        );
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-[#020810] px-4 py-24 md:px-10 lg:px-20"
        >
            {/* Background gradient mesh */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#ff6a0020_0%,_transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#ff8c0015_0%,_transparent_55%)]" />
                {/* Grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Orbs */}
            <div
                ref={orb1Ref}
                className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
            />
            <div
                ref={orb2Ref}
                className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-orange-400/8 blur-3xl"
            />

            {/* Floating decorative icons */}
            {floatingIcons.map(({ icon: Icon, top, left, delay }, i) => (
                <div
                    key={i}
                    className="float-icon pointer-events-none absolute opacity-0"
                    style={{ top, left }}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
                        <Icon className="h-4 w-4 text-orange-400/60" />
                    </div>
                </div>
            ))}

            {/* Section heading */}
            <div className="mb-16 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-xs font-medium text-orange-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                    Get In Touch
                </div>
                <h2
                    ref={headingRef}
                    className="mx-auto max-w-2xl bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-4xl font-bold text-transparent opacity-0 md:text-5xl lg:text-6xl"
                >
                    Let&apos;s Build Something{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Remarkable
                    </span>
                </h2>
                <p className="mt-4 text-sm text-white/40 md:text-base">
                    Tell us about your project — we&apos;ll respond within 24 hours.
                </p>
            </div>

            {/* Main grid */}
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
                {/* LEFT PANEL */}
                <div
                    ref={leftRef}
                    className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm lg:col-span-2"
                >
                    {/* Orange accent line */}
                    <div className="absolute left-0 top-12 h-20 w-1 rounded-r-full bg-gradient-to-b from-orange-400 to-orange-600" />

                    {/* Decorative corner */}
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-orange-500/5" />

                    <div className="mb-8">
                        {/* Logo / Brand */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600">
                                <Cpu className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-bold tracking-wider text-white">
                                    CODIO
                                </p>
                                <p className="text-xs text-orange-400">NETWORK</p>
                            </div>
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white">
                            We&apos;re ready to collaborate
                        </h3>
                        <p className="text-sm leading-relaxed text-white/50">
                            From AI-powered platforms to sleek mobile apps, we turn your vision
                            into market-ready digital products.
                        </p>
                    </div>

                    {/* Contact info */}
                    <div className="mb-8 space-y-4">
                        {contactInfo.map(({ icon: Icon, label, value }, i) => (
                            <div
                                key={i}
                                className="contact-item flex items-start gap-4 opacity-0"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10">
                                    <Icon className="h-4 w-4 text-orange-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30">{label}</p>
                                    <p className="text-sm font-medium text-white/80">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Services we offer */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">
                            Our Services
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Agentic AI", "Automation", "Web Apps", "Mobile", "UI/UX"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs text-orange-300/80"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Bottom gradient decoration */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-900/10 to-transparent" />
                </div>

                {/* RIGHT PANEL — FORM */}
                <div
                    ref={rightRef}
                    className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-sm lg:col-span-3"
                >
                    {/* Top accent */}
                    <div className="absolute left-12 right-12 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

                    {submitted ? (
                        <div
                            ref={successRef}
                            className="flex h-full min-h-96 flex-col items-center justify-center gap-6 opacity-0"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 animate-ping rounded-full bg-orange-500/20" />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                                    <CheckCircle2 className="h-9 w-9 text-orange-400" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Message Sent!
                                </h3>
                                <p className="text-sm text-white/50">
                                    Thank you for reaching out. Our team at Codio Network will get
                                    back to you within 24 hours.
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setForm({
                                        name: "",
                                        email: "",
                                        company: "",
                                        service: "",
                                        message: "",
                                    });
                                }}
                                className="rounded-full border border-orange-500/30 px-6 py-2 text-sm text-orange-400 transition hover:bg-orange-500/10"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">
                                    Start a conversation
                                </h3>
                                <p className="mt-1 text-sm text-white/40">
                                    All fields are required
                                </p>
                            </div>

                            {/* Name + Email */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="form-field opacity-0">
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                        Full Name
                                    </label>
                                    <div
                                        className={`relative rounded-xl border transition-all duration-300 ${focused === "name"
                                                ? "border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
                                                : errors.name
                                                    ? "border-red-500/50"
                                                    : "border-white/8"
                                            } bg-white/[0.04]`}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("name")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="John Doe"
                                            className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                <div className="form-field opacity-0">
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                        Email Address
                                    </label>
                                    <div
                                        className={`relative rounded-xl border transition-all duration-300 ${focused === "email"
                                                ? "border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
                                                : errors.email
                                                    ? "border-red-500/50"
                                                    : "border-white/8"
                                            } bg-white/[0.04]`}
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("email")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="john@company.com"
                                            className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Company + Service */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="form-field opacity-0">
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                        Company
                                    </label>
                                    <div
                                        className={`relative rounded-xl border transition-all duration-300 ${focused === "company"
                                                ? "border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
                                                : errors.company
                                                    ? "border-red-500/50"
                                                    : "border-white/8"
                                            } bg-white/[0.04]`}
                                    >
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("company")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Acme Inc."
                                            className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                                        />
                                    </div>
                                    {errors.company && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.company}
                                        </p>
                                    )}
                                </div>

                                <div className="form-field opacity-0">
                                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                                        Service Needed
                                    </label>
                                    <div
                                        className={`relative rounded-xl border transition-all duration-300 ${focused === "service"
                                                ? "border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
                                                : errors.service
                                                    ? "border-red-500/50"
                                                    : "border-white/8"
                                            } bg-white/[0.04]`}
                                    >
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("service")}
                                            onBlur={() => setFocused(null)}
                                            className="w-full appearance-none rounded-xl bg-transparent px-4 py-3 text-sm text-white outline-none"
                                        >
                                            <option value="" className="bg-[#020810] text-white/50">
                                                Select service
                                            </option>
                                            {services.map((s) => (
                                                <option key={s} value={s} className="bg-[#020810]">
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                            <svg
                                                className="h-4 w-4 text-white/30"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.service && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="form-field opacity-0">
                                <label className="mb-1.5 block text-xs font-medium text-white/50">
                                    Your Message
                                </label>
                                <div
                                    className={`relative rounded-xl border transition-all duration-300 ${focused === "message"
                                            ? "border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]"
                                            : errors.message
                                                ? "border-red-500/50"
                                                : "border-white/8"
                                        } bg-white/[0.04]`}
                                >
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        rows={4}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        className="w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                                    />
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    {errors.message ? (
                                        <p className="text-xs text-red-400">{errors.message}</p>
                                    ) : (
                                        <span />
                                    )}
                                    <p className="text-xs text-white/20">
                                        {form.message.length}/500
                                    </p>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="form-field opacity-0 pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-orange-400 hover:to-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.6)] disabled:opacity-60"
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 -skew-x-12 translate-x-[-100%] bg-white/10 transition-transform duration-700 group-hover:translate-x-[200%]" />
                                    {loading ? (
                                        <>
                                            <svg
                                                className="h-4 w-4 animate-spin"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                />
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>
                                <p className="mt-3 text-center text-xs text-white/25">
                                    By submitting, you agree to our{" "}
                                    <span className="text-orange-400/70 underline underline-offset-2">
                                        Privacy Policy
                                    </span>
                                    . No spam, ever.
                                </p>
                            </div>
                        </form>
                    )}

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
                </div>
            </div>
        </section>
    );
}