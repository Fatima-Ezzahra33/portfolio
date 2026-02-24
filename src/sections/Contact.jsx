import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Delete } from "lucide-react";
import React, { useState } from "react";
import Button from "@/components/Button";
import emailjS from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fzabdessettar@gmail.com",
    href: "mailto:fzabdessettar@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+212 0770867649",
    href: "tel:+0770867649",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Morocco",
    href: "https://maps.google.com/?q=31.172821,-7.336248",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // we prevent the dflt behavior of refreshing the page
    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const serviceTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !serviceTemplate || !publicKey) {
        throw new Error("missing email js config");
      }

      emailjS.send(
        serviceId,
        serviceTemplate,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setSubmitStatus({
        type: "success",
        message: "Message sent successfuly! i'll get back to you soon.",
      });
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsLoading(false)
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "An error occured while sending the message, please try again. ",
      });
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden md:py-20 lg:py-30 py-5 -mt-5 md:-mt-20 lg:-mt-2"
    >
      {/*Bg glow*/}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="space-y-6 "
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  required
                  placeholder="Your name..."
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  value={formData.name}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  required
                  placeholder="email@example.com"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  value={formData.email}
                />
              </div>
              <div>
                <label htmlFor="msg" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  id="msg"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                  required
                  placeholder="Your message..."
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  value={formData.message}
                />
              </div>
              <Button
                classname="w-full"
                type="submit"
                size="lg"
                variant="primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                  Sending ...
                  </>
                ):(
                 <>
                  Send Message
                  <Send className="w-5 h-5"/>
                 </>
                )
                }
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
             {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I am currently seeking a full stack development internship for Summer 2026.
                Open to opportunities where I can contribute meaningfully and continue to grow as an engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
