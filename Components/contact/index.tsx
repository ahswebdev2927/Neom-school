// "use client"; // Required for Formik hooks

// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { MapPin, Phone, Mail, Send } from "lucide-react";
// import Button from "@/Components/ui/Button";
// import { useState } from "react";

// // Validation schema using Yup
// const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name too long")
//     .required("Name is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
//     .required("Phone number is required"),
//   childClass: Yup.string()
//     .max(20, "Class name too long")
//     .optional(),
//   message: Yup.string()
//     .min(10, "Message must be at least 10 characters")
//     .max(500, "Message too long (max 500 characters)")
//     .required("Message is required"),
// });

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       childClass: "",
//       message: "",
//     },
//     validationSchema: ContactSchema,
//     onSubmit: async (values, { resetForm }) => {
//       // Here you would typically send the data to your backend API
//       console.log("Form submitted:", values);
      
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));
      
//       // Show success message
//       setSubmitted(true);
//       resetForm();
      
//       // Hide success message after 5 seconds
//       setTimeout(() => setSubmitted(false), 5000);
//     },
//   });

//   return (
//     <div className="py-16 bg-background-white">
//       <div className="container-custom">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
//             Contact Us
//           </h1>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             We'd love to hear from you! Reach out with any questions or to schedule a visit.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Column: Map & Address */}
//           <div>
//             {/* Google Map Embed */}
//             <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b1b1b1b1b1%3A0x123456789!2sSBI%20Colony%2C%20Saidabad%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="School Location"
//                 className="w-full"
//               ></iframe>
//             </div>

//             {/* Address Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//                 Visit Us
//               </h2>
//               <address className="not-italic text-gray-700 space-y-4">
//                 <p className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
//                   <span>
//                     17-1-72/B, SBI Colony, SBI Road,
//                     <br />
//                     New Santosh Nagar, Saidabad,
//                     <br />
//                     Hyderabad – 500059
//                   </span>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-leaf-green" />
//                   <a href="tel:+917075571346" className="hover:text-primary-blue transition">
//                     +91 7075571346
//                   </a>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-leaf-green" />
//                   <a
//                     href="mailto:neomeducationhyd@gmail.com"
//                     className="hover:text-primary-blue transition"
//                   >
//                     neomeducationhyd@gmail.com
//                   </a>
//                 </p>
//               </address>

//               {/* Decorative element */}
//               <div className="mt-6 flex gap-2">
//                 <div className="w-3 h-3 bg-soft-orange rounded-full"></div>
//                 <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
//                 <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//               Send us a Message
//             </h2>

//             {/* Success Message */}
//             {submitted && (
//               <div className="mb-6 p-4 bg-leaf-green/20 text-leaf-green rounded-lg border border-leaf-green">
//                 Thank you! Your message has been sent. We'll get back to you soon.
//               </div>
//             )}

//             <form onSubmit={formik.handleSubmit} className="space-y-5">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
//                   Full Name <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                   placeholder="Enter your name"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.name && formik.errors.name
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.name && formik.errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
//                   Phone Number <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.phone}
//                   placeholder="10-digit mobile number"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.phone && formik.errors.phone
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//                 )}
//               </div>

//               {/* Child's Class Field (optional) */}
//               <div>
//                 <label htmlFor="childClass" className="block text-gray-700 font-medium mb-1">
//                   Child's Class (Optional)
//                 </label>
//                 <input
//                   id="childClass"
//                   name="childClass"
//                   type="text"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.childClass}
//                   placeholder="e.g., LKG, Grade 2"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
//                 />
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
//                   Message <span className="text-soft-orange">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.message}
//                   placeholder="How can we help you?"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.message && formik.errors.message
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.message && formik.errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="w-full"
//                 disabled={formik.isSubmitting}
//               >
//                 {formik.isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   <span className="flex items-center justify-center gap-2">
//                     Send Message <Send size={18} />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         {/* <div className="relative mt-16">
//           <div className="absolute left-0 -bottom-8 text-6xl opacity-20">✉️</div>
//           <div className="absolute right-0 -top-8 text-6xl opacity-20">📞</div>
//         </div> */}
//       </div>
//     </div>
//   );
// }


// "use client"; // Required for Formik hooks

// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { MapPin, Phone, Mail, Send } from "lucide-react";
// import Button from "@/Components/ui/Button";
// import { useState } from "react";

// // Google Apps Script URL (keep as is)
// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbzOHh5V6w43Wt5aGUix4Ex3-5qXGIw/exec";

// // Validation schema using Yup (unchanged)
// const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name too long")
//     .required("Name is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
//     .required("Phone number is required"),
//   childClass: Yup.string()
//     .max(20, "Class name too long")
//     .required("Child class is required"),
//   message: Yup.string()
//     .min(10, "Message must be at least 10 characters")
//     .max(500, "Message too long (max 500 characters)")
//     .required("Message is required"),
// });

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       childClass: "",
//       message: "",
//     },
//     validationSchema: ContactSchema,
//     onSubmit: async (values, { resetForm, setSubmitting }) => {
//       setSubmitError(null);

//       try {
//         // Send data to Google Sheets
//         await fetch(GOOGLE_SCRIPT_URL, {
//           method: "POST",
//           mode: "no-cors", // required for Google Apps Script
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         // no-cars doesn't allow reading response, so we assume success if no network error
//         setSubmitted(true);
//         resetForm();

//         // Hide success message after 5 seconds
//         setTimeout(() => setSubmitted(false), 5000);
//       } catch (error) {
//         console.error("Submission error:", error);
//         setSubmitError(
//           "Failed to send your message. Please check your connection and try again."
//         );
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   // Clear any previous error when the user starts typing
//   const handleFieldChange = (e: React.ChangeEvent<any>) => {
//     formik.handleChange(e);
//     if (submitError) setSubmitError(null);
//   };

//   return (
//     <div className="py-16 bg-background-white">
//       <div className="container-custom">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
//             Contact Us
//           </h1>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             We'd love to hear from you! Reach out with any questions or to schedule a visit.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Column: Map & Address */}
//           <div>
//             {/* Google Map Embed */}
//             <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b1b1b1b1b1%3A0x123456789!2sSBI%20Colony%2C%20Saidabad%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="School Location"
//                 className="w-full"
//               ></iframe>
//             </div>

//             {/* Address Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//                 Visit Us
//               </h2>
//               <address className="not-italic text-gray-700 space-y-4">
//                 <p className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
//                   <span>
//                     17-1-72/B, SBI Colony, SBI Road,
//                     <br />
//                     New Santosh Nagar, Saidabad,
//                     <br />
//                     Hyderabad – 500059
//                   </span>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-leaf-green" />
//                   <a href="tel:+917075571346" className="hover:text-primary-blue transition">
//                     +91 7075571346
//                   </a>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-leaf-green" />
//                   <a
//                     href="mailto:neomeducationhyd@gmail.com"
//                     className="hover:text-primary-blue transition"
//                   >
//                     neomeducationhyd@gmail.com
//                   </a>
//                 </p>
//               </address>

//               {/* Decorative element */}
//               <div className="mt-6 flex gap-2">
//                 <div className="w-3 h-3 bg-soft-orange rounded-full"></div>
//                 <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
//                 <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//               Send us a Message
//             </h2>

//             {/* Success Message */}
//             {submitted && (
//               <div className="mb-6 p-4 bg-leaf-green/20 text-leaf-green rounded-lg border border-leaf-green">
//                 Thank you! Your message has been sent. We'll get back to you soon.
//               </div>
//             )}

//             {/* Error Message */}
//             {submitError && (
//               <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
//                 {submitError}
//               </div>
//             )}

//             <form onSubmit={formik.handleSubmit} className="space-y-5">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
//                   Full Name <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                   placeholder="Enter your name"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.name && formik.errors.name
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.name && formik.errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
//                   Phone Number <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.phone}
//                   placeholder="10-digit mobile number"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.phone && formik.errors.phone
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//                 )}
//               </div>

//               {/* Child's Class Field (optional) */}
//               <div>
//                 <label htmlFor="childClass" className="block text-gray-700 font-medium mb-1">
//                   Child's Class <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="childClass"
//                   name="childClass"
//                   type="text"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.childClass}
//                   placeholder="e.g., LKG, Grade 2"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.message && formik.errors.message
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
//                   Message <span className="text-soft-orange">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.message}
//                   placeholder="How can we help you?"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.message && formik.errors.message
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.message && formik.errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="w-full"
//                 disabled={formik.isSubmitting}
//               >
//                 {formik.isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   <span className="flex items-center justify-center gap-2">
//                     Send Message <Send size={18} />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client"; // Required for Formik hooks

// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { MapPin, Phone, Mail, Send } from "lucide-react";
// import Button from "@/Components/ui/Button";
// import { useState } from "react";

// // Google Apps Script URL (keep as is)
// const GOOGLE_SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbzOHh5V6w43Wt5aGUix4Ex3-5qXGIw/exec";

// // Validation schema – childClass required, message optional
// const ContactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name too long")
//     .required("Name is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
//     .required("Phone number is required"),
//   childClass: Yup.string()
//     .min(1, "Class is required")
//     .max(30, "Class name too long")
//     .required("Child's class is required"),
//   message: Yup.string()
//     .min(5, "Message must be at least 5 characters (optional)")
//     .max(500, "Message too long (max 500 characters)"),
//   // No .required() on message
// });

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       childClass: "",
//       message: "",
//     },
//     validationSchema: ContactSchema,
//     onSubmit: async (values, { resetForm, setSubmitting }) => {
//       setSubmitError(null);

//       try {
//         // Send data to Google Sheets
//         await fetch(GOOGLE_SCRIPT_URL, {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         setSubmitted(true);
//         resetForm();

//         setTimeout(() => setSubmitted(false), 5000);
//       } catch (error) {
//         console.error("Submission error:", error);
//         setSubmitError(
//           "Failed to send your message. Please check your connection and try again."
//         );
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   const handleFieldChange = (e: React.ChangeEvent<any>) => {
//     formik.handleChange(e);
//     if (submitError) setSubmitError(null);
//   };

//   return (
//     <div className="py-16 bg-background-white">
//       <div className="container-custom">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
//             Contact Us
//           </h1>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             We'd love to hear from you! Reach out with any questions or to schedule a visit.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Left Column: Map & Address */}
//           <div>
//             {/* Google Map Embed */}
//             <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b1b1b1b1b1%3A0x123456789!2sSBI%20Colony%2C%20Saidabad%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="School Location"
//                 className="w-full"
//               ></iframe>
//             </div>

//             {/* Address Card */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//                 Visit Us
//               </h2>
//               <address className="not-italic text-gray-700 space-y-4">
//                 <p className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
//                   <span>
//                     17-1-72/B, SBI Colony, SBI Road,
//                     <br />
//                     New Santosh Nagar, Saidabad,
//                     <br />
//                     Hyderabad – 500059
//                   </span>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-leaf-green" />
//                   <a href="tel:+917075571346" className="hover:text-primary-blue transition">
//                     +91 7075571346
//                   </a>
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-leaf-green" />
//                   <a
//                     href="mailto:neomeducationhyd@gmail.com"
//                     className="hover:text-primary-blue transition"
//                   >
//                     neomeducationhyd@gmail.com
//                   </a>
//                 </p>
//               </address>

//               <div className="mt-6 flex gap-2">
//                 <div className="w-3 h-3 bg-soft-orange rounded-full"></div>
//                 <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
//                 <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
//               Send us a Message
//             </h2>

//             {submitted && (
//               <div className="mb-6 p-4 bg-leaf-green/20 text-leaf-green rounded-lg border border-leaf-green">
//                 Thank you! Your message has been sent. We'll get back to you soon.
//               </div>
//             )}

//             {submitError && (
//               <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
//                 {submitError}
//               </div>
//             )}

//             <form onSubmit={formik.handleSubmit} className="space-y-5">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
//                   Full Name <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                   placeholder="Enter your name"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.name && formik.errors.name
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.name && formik.errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//                 )}
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
//                   Phone Number <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.phone}
//                   placeholder="10-digit mobile number"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.phone && formik.errors.phone
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.phone && formik.errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
//                 )}
//               </div>

//               {/* Child's Class Field - NOW REQUIRED */}
//               <div>
//                 <label htmlFor="childClass" className="block text-gray-700 font-medium mb-1">
//                   Child's Class <span className="text-soft-orange">*</span>
//                 </label>
//                 <input
//                   id="childClass"
//                   name="childClass"
//                   type="text"
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.childClass}
//                   placeholder="e.g., LKG, Grade 2"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.childClass && formik.errors.childClass
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.childClass && formik.errors.childClass && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.childClass}</p>
//                 )}
//               </div>

//               {/* Message Field - OPTIONAL (no asterisk, no required validation) */}
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
//                   Message <span className="text-gray-400 text-sm">(optional)</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   onChange={handleFieldChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.message}
//                   placeholder="How can we help you? (optional)"
//                   className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
//                     formik.touched.message && formik.errors.message
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formik.touched.message && formik.errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
//                 )}
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 variant="primary"
//                 className="w-full"
//                 disabled={formik.isSubmitting}
//               >
//                 {formik.isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   <span className="flex items-center justify-center gap-2">
//                     Send Message <Send size={18} />
//                   </span>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client"; // Required for Formik hooks

import { useFormik } from "formik";
import * as Yup from "yup";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Button from "@/Components/ui/Button";
import { useState } from "react";

// Google Apps Script URL (keep as is)
const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbzLiI9CiTwzLR_6CWHUofFR-CYlKQ4hlxKG4yOzDsZitiXP9Bf8k1YWTNmWg2QhcfU9bg/exec"


// Validation schema – childClass required, message optional
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  childClass: Yup.string()
    .required("Please select your child's class"),
  message: Yup.string()
    .min(5, "Message must be at least 5 characters (optional)")
    .max(500, "Message too long (max 500 characters)"),
});

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      childClass: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitError(null);

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "cors",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify(values),
        });

        setSubmitted(true);
        resetForm();

        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError(
          "Failed to send your message. Please check your connection and try again."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleFieldChange = (e: React.ChangeEvent<any>) => {
    formik.handleChange(e);
    if (submitError) setSubmitError(null);
  };

  return (
    <div className="py-16 bg-background-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or to schedule a visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Map & Address */}
          <div>
            {/* Google Map Embed - Updated to NEOM SCHOOL location */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321.5714134541303!2d78.50664332228983!3d17.34985295891023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99b5b1c5d3db%3A0x2c1fe566b96a12a5!2sNEOM%20SCHOOL!5e0!3m2!1sen!2sin!4v1775711660386!5m2!1sen!2sin"
                width="100%"
                height="330"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NEOM SCHOOL Location"
                className="w-full"
              ></iframe>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
                Visit Us
              </h2>
              <address className="not-italic text-gray-700 space-y-4">
                {/* <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
                  <span>
                    17-1-72/B, SBI Colony, SBI Road,
                    <br />
                    New Santosh Nagar, Saidabad,
                    <br />
                    Hyderabad – 500059
                  </span>
                </p> */}
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
                    <span>
                      17-1-72/B, SBI ROAD
                      <br />
                      New Santosh Nagar
                      <br />
                      Saidabad
                      <br />
                      Hyderabad - 500059
                    </span>
                  </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-leaf-green" />
                  <a href="tel:+917075571346" className="hover:text-primary-blue transition">
                    +91 7075571346
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-leaf-green" />
                  <a
                    href="mailto:neomeducationhyd@gmail.com"
                    className="hover:text-primary-blue transition"
                  >
                    neomeducationhyd@gmail.com
                  </a>
                </p>
              </address>

              <div className="mt-6 flex gap-2">
                <div className="w-3 h-3 bg-soft-orange rounded-full"></div>
                <div className="w-3 h-3 bg-leaf-green rounded-full"></div>
                <div className="w-3 h-3 bg-sky-blue rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold text-primary-blue mb-6">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-leaf-green/20 text-leaf-green rounded-lg border border-leaf-green">
                Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-300">
                {submitError}
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Full Name <span className="text-soft-orange">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleFieldChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter your name"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone Number <span className="text-soft-orange">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={handleFieldChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="10-digit mobile number"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>

              {/* Child's Class Dropdown - REQUIRED */}
              <div>
                <label htmlFor="childClass" className="block text-gray-700 font-medium mb-1">
                  Child's Class <span className="text-soft-orange">*</span>
                </label>
                <select
                  id="childClass"
                  name="childClass"
                  onChange={handleFieldChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.childClass}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-white ${
                    formik.touched.childClass && formik.errors.childClass
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    Select your child's class
                  </option>
                  <option value="Play Group">Play Group</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                </select>
                {formik.touched.childClass && formik.errors.childClass && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.childClass}</p>
                )}
              </div>

              {/* Message Field - OPTIONAL */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  onChange={handleFieldChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder="How can we help you? (optional)"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}