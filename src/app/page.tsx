"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles, Zap, TrendingUp, Heart, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="AISetup"
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your AI Setup, Simplified"
          description="Streamline your artificial intelligence infrastructure with our intuitive platform. Deploy, manage, and scale AI models effortlessly with Apple-inspired simplicity and power."
          tag="AI Platform"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/a-sleek-modern-ai-setup-dashboard-with-c-1772550258526-1ef5ca60.png"
          imageAlt="AI Setup Dashboard Interface"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Start Building", href: "contact" },
            { text: "View Demo", href: "features" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About AISetup"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="We believe AI should be accessible to everyone. That's why we built AISetup—a platform that brings enterprise-grade artificial intelligence to teams of any size, without the complexity."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn Our Story", href: "contact" },
            { text: "Explore Platform", href: "features" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Powerful Features"
          description="Everything you need to deploy and manage AI models at scale. From training to deployment, we've simplified the entire workflow."
          tag="Core Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Intelligent Automation",              description: "Automate complex workflows with AI-powered intelligence. Our system learns from your patterns to continuously optimize performance.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/elegant-minimalist-illustration-showing--1772550258166-7ebc6793.png",              imageAlt: "Automation workflow illustration"
            },
            {
              id: 2,
              title: "Advanced Intelligence",              description: "Leverage state-of-the-art machine learning models. Access pre-trained models or bring your own with our flexible framework.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/clean-illustration-of-an-intelligent-ai--1772550259140-e3a60e4a.png",              imageAlt: "AI intelligence visualization"
            },
            {
              id: 3,
              title: "Seamless Integration",              description: "Connect with your existing tools and platforms. Our API integrates with 500+ applications out of the box.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/minimalist-design-showing-multiple-apps--1772550258995-d3d88db2.png",              imageAlt: "Integration connectivity"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Pricing Plans"
          description="Choose the perfect plan for your AI setup needs. Scale up as you grow, with no hidden fees."
          tag="Transparent Pricing"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "Starter",              badgeIcon: Sparkles,
              price: "$49/mo",              subtitle: "Perfect for trying out AI",              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Up to 10,000 API calls/month",                "5 AI models access",                "Email support",                "Basic analytics",                "Community access"
              ]
            },
            {
              id: "professional",              badge: "Professional",              badgeIcon: Sparkles,
              price: "$199/mo",              subtitle: "For growing AI teams",              buttons: [
                { text: "Start Free Trial", href: "contact" },
                { text: "View Details", href: "#" }
              ],
              features: [
                "Unlimited API calls",                "50+ AI models",                "Priority support",                "Advanced analytics",                "Custom models",                "Team collaboration"
              ]
            },
            {
              id: "enterprise",              badge: "Enterprise",              badgeIcon: Sparkles,
              price: "Custom",              subtitle: "For large-scale AI operations",              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "Unlimited everything",                "Custom AI model training",                "Dedicated account manager",                "SLA guarantee",                "On-premises deployment",                "Custom integrations"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Proven Results"
          description="Join thousands of teams already transforming their operations with our AI platform."
          tag="Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "50,000+",              title: "Active Users",              description: "Growing community of AI practitioners",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/clean-data-visualization-showing-perform-1772550259663-057c6cb6.png",              imageAlt: "Performance metrics"
            },
            {
              id: "2",              value: "10x",              title: "Faster Deployment",              description: "Average time reduction in model deployment",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/minimalist-illustration-of-efficiency-ga-1772550259090-8ba5bada.png",              imageAlt: "Efficiency gains"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Loved by Teams"
          description="Hear from organizations transforming their AI infrastructure with AISetup."
          tag="Customer Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              role: "VP of AI",              company: "TechCorp",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/professional-portrait-photograph-of-a-co-1772550259768-fd69368b.png"
            },
            {
              id: "2",              name: "Michael Rodriguez",              role: "CTO",              company: "InnovateLab",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/professional-portrait-photograph-of-a-so-1772550259248-3d9c5aed.png"
            },
            {
              id: "3",              name: "Emily Watson",              role: "Founder",              company: "AIStartup",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/professional-portrait-of-a-startup-found-1772550259168-92254566.png"
            },
            {
              id: "4",              name: "David Park",              role: "Product Manager",              company: "CloudNext",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ARKsGhAqpoK0xtsNt6STlNoVV9/professional-portrait-photograph-of-a-pr-1772550258344-79411679.png"
            }
          ]}
          kpiItems={[
            { value: "98%", label: "Satisfaction Rate" },
            { value: "5,000+", label: "Models Deployed" },
            { value: "24/7", label: "Support Available" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about AISetup and getting started with AI."
          faqs={[
            {
              id: "1",              title: "What AI models does AISetup support?",              content: "We support 50+ pre-trained models including GPT, BERT, DALL-E, and more. You can also bring your own models and fine-tune them with our platform."
            },
            {
              id: "2",              title: "How easy is it to deploy models?",              content: "Deploying a model takes just minutes. Our one-click deployment system handles all infrastructure setup automatically. No DevOps experience required."
            },
            {
              id: "3",              title: "What kind of support is available?",              content: "We offer email support for Starter plans, priority support for Professional plans, and dedicated account managers for Enterprise clients. Response times are 24 hours or less."
            },
            {
              id: "4",              title: "Can I integrate AISetup with my existing tools?",              content: "Yes! We have pre-built integrations with 500+ applications including Slack, Salesforce, HubSpot, and more. Our flexible API also supports custom integrations."
            },
            {
              id: "5",              title: "Is there a free trial available?",              content: "Absolutely. We offer a 14-day free trial of our Professional plan with full access to all features. No credit card required to get started."
            },
            {
              id: "6",              title: "How does pricing work?",              content: "Our Starter plan is $49/month, Professional is $199/month with unlimited usage, and Enterprise plans are custom quoted. We offer annual discounts and volume pricing."
            }
          ]}
          faqsAnimation="slide-up"
          textPosition="left"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Get Started?"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Transform Your AI Setup Today"
          description="Join thousands of teams building the future of AI. Get started in minutes with our intuitive platform."
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Schedule Demo", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Enterprise", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Community", href: "#" },
                { label: "Support", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookies", href: "#" },
                { label: "Status", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 AISetup. All rights reserved."
          bottomRightText="Made with precision and passion"
        />
      </div>
    </ThemeProvider>
  );
}
