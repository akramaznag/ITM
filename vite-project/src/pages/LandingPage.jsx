import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrench,
  Shield,
  Clock,
  Users,
  BarChart3,
  Headphones,
  Star,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";


const features = [
  {
    icon: Wrench,
    title: "Smart Ticket Management",
    description:
      "Automate request routing, prioritize tickets intelligently, and resolve issues faster than ever.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Role-based access control, audit logs, and end-to-end encryption keep your data safe.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description:
      "Monitor every intervention in real time with live status updates and notifications.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain insights with powerful dashboards, custom reports, and performance metrics.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Assign technicians, share notes, and coordinate seamlessly across your organization.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to help you get the most out of ITM.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "IT Director, TechCorp",
    quote:
      "ITM transformed how we handle support requests. Resolution times dropped by 60% in the first month.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CTO, StartupHub",
    quote:
      "The analytics alone are worth it. We finally have visibility into our IT operations.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Operations Manager, GlobalServ",
    quote:
      "Onboarding was seamless. Our team was productive from day one — no training needed.",
    rating: 5,
  },
];

const stats = [
  { value: "2,400+", label: "Requests Managed" },
  { value: "4.2h", label: "Avg Resolution" },
  { value: "98%", label: "Satisfaction" },
  { value: "150+", label: "Companies" },
];


const LandingPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 text-foreground">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white border-b border border-b-gray-200 outline-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-500 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-blue-500-foreground text-white" />
            </div>
            <span className="text-xl font-bold">ITM</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-black transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-black transition-colors">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate("/auth/login")}
              className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium bg-blue-500 text-blue-500-foreground hover:bg-blue-500/90 transition-colors text-white"
            >
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 px-4 py-4 space-y-3 bg-slate-50">
            <a href="#features" className="block text-sm text-gray-500 hover:text-black">
              Features
            </a>
            <a href="#testimonials" className="block text-sm text-gray-500 hover:text-black">
              Testimonials
            </a>
            <a href="#pricing" className="block text-sm text-gray-500 hover:text-black">
              Pricing
            </a>
            <button
              onClick={() => navigate("/login")}
              className="w-full mt-2 inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-500/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36 relative">
          <div className="max-w-3xl mx-auto text-center animate-in slide-in-from-bottom duration-800">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold mb-6">
              <CheckCircle2 className="h-3.5 w-3.5" /> Trusted by 150+ companies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              IT Service Management{" "}
              <span className="text-blue-500">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Manage requests, track interventions, and deliver exceptional IT
              support — all from one powerful, intuitive platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center justify-center h-11 px-6 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-500/90 transition-colors"
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                className="inline-flex items-center justify-center h-11 px-6 rounded-md text-base font-medium   bg-none border border-gray-300 outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats bar */}
          <div
            className="mt-16 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 animate-in slide-in-from-bottom duration-1000"
            style={{ animationDelay: "200ms" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-4 text-center"
              >
                <p className="text-2xl font-bold text-blue-500">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything you need to manage IT
            </h2>
            <p className="mt-4 text-gray-500">
              Powerful features designed to streamline your IT operations from
              end to end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card p-6 hover:shadow-md transition-shadow animate-in slide-in-from-bottom duration-600"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-11 w-11 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Loved by IT teams everywhere
            </h2>
            <p className="mt-4 text-muted-foreground">
              See what our customers have to say about ITM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card p-6 animate-in slide-in-from-bottom duration-600"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-blue-500 text-blue-500"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 text-muted-foreground italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="pricing" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="animate-in slide-in-from-bottom duration-600">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to transform your IT operations?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center h-11 px-6 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-500/90 transition-colors"
            >
              Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Wrench className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">ITM</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Streamlining IT service management for modern teams.
              </p>
            </div>
            {[
              {
                heading: "Product",
                links: ["Features", "Pricing", "Integrations", "Changelog"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                heading: "Legal",
                links: ["Privacy", "Terms", "Security", "GDPR"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold mb-3">{col.heading}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} ITM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
