"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Info Card with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 text-white rounded-2xl p-8 shadow-2xl flex flex-col justify-center space-y-6"
        >
          {/* Background blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-30 z-0"></div>
          <div className="absolute bottom-0 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-20 z-0"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="uppercase text-sm text-blue-200 mb-1">Let's Talk</p>
            <h2 className="text-3xl font-bold leading-tight">
              Let's work with <br /> our Expert team
            </h2>
          </div>

          <div className="space-y-4 text-base relative z-10">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91-990 994 3320</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Email:</p>
                <p>info@techencraft.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  B-817 Navratna Corporate Park,
                  <br />
                  Iskcon Ambli Road, Ahmedabad,
                  <br />
                  Gujarat 380058
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <p className="text-sm text-blue-600 font-medium uppercase mb-2">Get in Touch</p>
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Name" className="p-3 rounded-md border" />
              <Input type="email" placeholder="E-Mail" className="p-3 rounded-md border" />
              <Input type="tel" placeholder="Phone Number" className="p-3 rounded-md border" />
              <Input placeholder="Subject" className="p-3 rounded-md border" />
            </div>
            <Textarea
              placeholder="Your message here"
              rows={5}
              className="w-full p-3 rounded-md border"
            />
            <Button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-6 py-3 rounded-md">
              Submit Now
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
