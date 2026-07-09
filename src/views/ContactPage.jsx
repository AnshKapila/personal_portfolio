"use client";
import { useState, useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import { useForm, ValidationError } from '@formspree/react';
import { GlassConfirmationModal } from '../components/GlassConfirmationModal';
export function ContactPage() {
    const [state, handleSubmit, reset] = useForm('mpqbeagr');
    const [nameValue, setNameValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Automatically trigger modal when Formspree submission succeeds
    useEffect(() => {
        if (state.succeeded) {
            setIsModalOpen(true);
        }
    }, [state.succeeded]);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNameValue('');
        if (typeof reset === 'function') {
            reset();
        }
    };
    return (<>
      
      <div className="pt-32 pb-48 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full">
          {/* Hero */}
          <div className="mb-16 text-center flex flex-col items-center">
            <FadeIn delayMs={100} durationMs={800}>
              <h1 className="text-5xl md:text-6xl font-heading italic tracking-tight mb-6 animate-pulse-subtle">
                Contact
              </h1>
            </FadeIn>
            <FadeIn delayMs={300} durationMs={800}>
              <p className="text-lg font-light leading-relaxed text-gray-400">
                Tell me about your project and I will get back to you.
              </p>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delayMs={500} durationMs={800}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                <input type="text" id="name" name="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" required/>
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm ml-1"/>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="john@company.com" required/>
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm ml-1"/>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-sm font-medium text-gray-300 ml-1">Project Details</label>
                <textarea id="details" name="details" rows={5} className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Tell me about what you are building..." required></textarea>
                <ValidationError prefix="Project Details" field="details" errors={state.errors} className="text-red-500 text-sm ml-1"/>
              </div>

              <button type="submit" disabled={state.submitting} className="w-full mt-4 px-8 py-4 bg-white text-black rounded-lg font-medium text-base hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Glassmorphic Confirmation Modal */}
      <GlassConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} senderName={nameValue}/>
    </>);
}
