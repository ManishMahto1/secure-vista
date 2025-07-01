'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(`Message from ${data.name} sent successfully!`);
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
            >
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-violet-200 focus:border-transparent"
                  />
                  {errors.name && <span className="text-sm text-rose-200">Name is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-violet-200"
                  />
                  {errors.email && <span className="text-sm text-rose-200">Valid email is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-violet-200"
                  />
                  {errors.subject && <span className="text-sm text-rose-200">Subject is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    {...register('message', { required: true })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-violet-200"
                  ></textarea>
                  {errors.message && <span className="text-sm text-rose-200">Message is required</span>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-12 lg:p-16 bg-white"
            >
              <h3 className="text-3xl font-bold text-indigo-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Office</h4>
                    <p className="text-gray-600">123 PG Street<br />Jamshedpur City, Jharkhand </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <FaPhoneAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <MdEmail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">contact@pgdekho.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-indigo-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaGithub, link: '#' },
                    { icon: FaLinkedin, link: '#' },
                  ].map(({ icon: Icon, link }, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="p-2 bg-indigo-100 rounded-lg text-indigo-600 hover:bg-indigo-200 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-xl overflow-hidden border-2 border-indigo-100">
                <div className="bg-indigo-50 h-64 flex items-center justify-center text-indigo-400">
                  <FaMapMarkerAlt className="w-12 h-12" />
                  <span className="ml-2">Map Integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;