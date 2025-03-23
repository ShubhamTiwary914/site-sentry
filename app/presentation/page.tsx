'use client';

import { useEffect } from 'react';
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function PresentationPage() {
  useEffect(() => {
    // Smooth scroll to section when clicking nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        const target = document.querySelector(href || '');
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Site Sentry</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <a href="#introduction" className="text-gray-600 hover:text-gray-900">Introduction</a>
              <a href="#framework" className="text-gray-600 hover:text-gray-900">Framework</a>
              <a href="#webapp" className="text-gray-600 hover:text-gray-900">Webapp</a>
              <a href="#summary" className="text-gray-600 hover:text-gray-900">Summary</a>
              <Button asChild>
                <a href="/dashboard">Try Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Introduction Section */}
        <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Site Sentry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your intelligent website guardian powered by AI. Site Sentry continuously monitors, 
                analyzes, and maintains your web applications using advanced machine learning and 
                automated maintenance protocols.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Intelligent Monitoring</h3>
                  <p className="text-gray-600">
                    24/7 automated monitoring of your website's performance, security, and functionality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                  <p className="text-gray-600">
                    Advanced machine learning algorithms detect and diagnose issues before they impact users.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Automated Maintenance</h3>
                  <p className="text-gray-600">
                    Intelligent automation handles routine maintenance tasks and updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section id="framework" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              AgentX Framework
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Multi-Agent Architecture</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                      <strong>READ Agent:</strong> Continuously monitors website performance and health metrics
                    </li>
                    <li>
                      <strong>Manager Agent:</strong> Coordinates tasks and prioritizes maintenance activities
                    </li>
                    <li>
                      <strong>Specialized Agents:</strong> Handle specific tasks like security audits and performance optimization
                    </li>
                    <li>
                      <strong>Deployment Agent:</strong> Manages safe and efficient deployment of updates
                    </li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>Intelligent code indexing and analysis</li>
                    <li>Automated security and performance audits</li>
                    <li>CI/CD integration with error handling</li>
                    <li>Continuous model fine-tuning based on feedback</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg border">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  [ARCHITECTURE DIAGRAM PLACEHOLDER]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webapp Section */}
        <section id="webapp" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Cloud Platform Overview
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-white p-8 rounded-lg border">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  [WEBAPP DIAGRAM PLACEHOLDER]
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Easy Setup & Configuration</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>Quick account creation and onboarding</li>
                    <li>Simple API key management (LLM, GitHub)</li>
                    <li>Flexible site configuration options</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8 mb-4">Powerful Dashboard</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>Real-time monitoring and logs</li>
                    <li>Comprehensive maintenance history</li>
                    <li>Performance analytics and insights</li>
                    <li>Automated task scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Website Maintenance?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join the future of automated website maintenance. Site Sentry combines AI power 
              with enterprise-grade reliability to keep your web applications running at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/dashboard">Try Demo</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:contact@sitesentry.ai">Contact Sales</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Site Sentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 