// "use client";
// import { useState, useEffect } from "react";
// import { useCreateLead } from "@/lib/queries/leads"; // adjust path if needed
// import { Button } from "../ui/button";

// export default function PopupFormModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const { mutate, isPending, isSuccess, isError } = useCreateLead();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "",
//   });

//   useEffect(() => {
//     const hasVisited = localStorage.getItem("visitedPopup");
//     console.log("📦 visitedPopup in localStorage:", hasVisited);

//     if (!hasVisited) {
//       const timer = setTimeout(() => {
//         console.log("⏰ Opening popup after 2s...");
//         setIsOpen(true);
//         localStorage.setItem("visitedPopup", "true");
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       console.log("🎬 Popup is now open");
//       const animationTimer = setTimeout(() => {
//         setIsAnimating(true);
//         console.log("✨ Animation started");
//       }, 50);
//       return () => clearTimeout(animationTimer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isSuccess) {
//       const timer = setTimeout(() => {
//         setIsOpen(false);
//         setIsAnimating(false);
//       }, 3000); // closes after 3 seconds

//       return () => clearTimeout(timer);
//     }
//   }, [isSuccess]);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("📨 Submitting form", formData);
//     mutate(formData);
//   };

//   if (!isOpen) {
//     console.log("🛑 Modal not open yet");
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-[9999] transition-opacity px-4">
//       <div
//         className={`bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl p-6 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
//           isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-red-400"
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold mb-4 text-center">
//           Get in Touch
//         </h2>

//         {isSuccess ? (
//           <div className="text-green-300 text-center font-medium">
//             ✅ Thank you! We’ll contact you soon.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-4">
//             <div className="flex flex-col md:flex-row gap-8">
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
//                 required
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
//                 required
//               />
//             </div>

//             <div className="flex flex-col md:flex-row gap-8">
//               <input
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
//                 required
//               />
//               <input
//                 name="interest"
//                 type="text"
//                 placeholder="Your Interest / Service"
//                 value={formData.interest}
//                 onChange={handleChange}
//                 className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
//                 required
//               />
//             </div>

//             <div className="w-full">
//               <Button
//                 type="submit"
//                 disabled={isPending}
//                 className="w-full py-2  text-white font-semibold rounded shadow-md transition"
//               >
//                 {isPending ? "Submitting..." : "Submit"}
//               </Button>
//             </div>

//             {isError && (
//               <p className="text-red-300 text-sm text-center">
//                 Something went wrong. Please try again.
//               </p>
//             )}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { useCreateLead } from "@/lib/queries/leads";
// import { Button } from "../ui/button";
// import { MessageCircle } from "lucide-react";

// export default function PopupFormModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [hasManuallyOpened, setHasManuallyOpened] = useState(false);

//   const { mutate, isPending, isSuccess, isError } = useCreateLead();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "",
//   });

//   useEffect(() => {
//     if (!hasManuallyOpened) {
//       const timer = setTimeout(() => setIsOpen(true), 10000);
//       return () => clearTimeout(timer);
//     }
//   }, [hasManuallyOpened]);

//   useEffect(() => {
//     if (isOpen) {
//       const timer = setTimeout(() => setIsAnimating(true), 50);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isSuccess) {
//       const timer = setTimeout(() => {
//         setIsOpen(false);
//         setIsAnimating(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSuccess]);

//   const handleChange = (e: { target: { name: any; value: any } }) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     mutate(formData);
//   };

//   return (
//     <>
//       <div className="fixed bottom-20 right-4 z-[9998]">
//         <button
//           onClick={() => {
//             setHasManuallyOpened(true);
//             setIsOpen(true);
//           }}
//           className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition duration-300 bg-red-600 flex items-center justify-center text-white text-xl font-bold sticky "
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
//           <div
//             className={`bg-white text-gray-800 rounded-2xl p-8 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
//               isAnimating
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-5 text-gray-600 text-xl font-bold hover:text-red-500"
//             >
//               &times;
//             </button>
//             <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
//               Chat with Us
//             </h2>
//             {isSuccess ? (
//               <div className="text-green-600 text-center font-medium text-lg">
//                 ✅ Thank you! We’ll contact you soon.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="interest"
//                   type="text"
//                   placeholder="Your Interest / Service"
//                   value={formData.interest}
//                   onChange={handleChange}
//                   className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   disabled={isPending}
//                   className="w-full py-3 text-white font-semibold bg-red-600 hover:bg-red-700 rounded transition"
//                 >
//                   {isPending ? "Submitting..." : "Submit"}
//                 </Button>
//                 {isError && (
//                   <p className="text-red-500 text-sm text-center">
//                     Something went wrong. Please try again.
//                   </p>
//                 )}
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect } from "react";
// import { useCreateLead } from "@/lib/queries/leads";
// import { Button } from "../ui/button";
// import { MessageCircle } from "lucide-react";

// export default function PopupFormModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [hasManuallyOpened, setHasManuallyOpened] = useState(false);

//   const { mutate, isPending, isSuccess, isError } = useCreateLead();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "",
//   });

//   useEffect(() => {
//     if (!hasManuallyOpened) {
//       const timer = setTimeout(() => setIsOpen(true), 10000);
//       return () => clearTimeout(timer);
//     }
//   }, [hasManuallyOpened]);

//   useEffect(() => {
//     if (isOpen) {
//       const timer = setTimeout(() => setIsAnimating(true), 50);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (isSuccess) {
//       const timer = setTimeout(() => {
//         setIsOpen(false);
//         setIsAnimating(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSuccess]);

//   const handleChange = (e: { target: { name: any; value: any } }) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     mutate(formData);
//   };

//   return (
//     <>
//       <div className="fixed bottom-20 right-5 z-[9998]">
//         <button
//           onClick={() => {
//             setHasManuallyOpened(true);
//             setIsOpen(true);
//           }}
//           className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition duration-300 bg-red-600 flex items-center justify-center text-white text-xl font-bold"
//         >
//           <MessageCircle className="w-5 h-5" />
//         </button>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
//           <div
//             className={` backdrop-blur-md text-gray-800 rounded-2xl p-8 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
//               isAnimating
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-5 text-gray-600 text-xl font-bold hover:text-red-500"
//             >
//               &times;
//             </button>
//             <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
//               Chat with Us
//             </h2>
//             {isSuccess ? (
//               <div className="text-green-600 text-center font-medium text-lg">
//                 ✅ Thank you! We’ll contact you soon.
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="phone"
//                   type="tel"
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <input
//                   name="interest"
//                   type="text"
//                   placeholder="Your Interest / Service"
//                   value={formData.interest}
//                   onChange={handleChange}
//                   className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 />
//                 <Button
//                   type="submit"
//                   disabled={isPending}
//                   className="w-full py-3 text-white font-semibold bg-red-600 hover:bg-red-700 rounded transition"
//                 >
//                   {isPending ? "Submitting..." : "Submit"}
//                 </Button>
//                 {isError && (
//                   <p className="text-red-500 text-sm text-center">
//                     Something went wrong. Please try again.
//                   </p>
//                 )}
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { useCreateLead } from "@/lib/queries/leads";
import { Button } from "../ui/button";
import { LucideMessageCircleMore, MessageCircle } from "lucide-react";

export default function PopupFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasManuallyOpened, setHasManuallyOpened] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const { mutate, isPending, isSuccess, isError } = useCreateLead();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  useEffect(() => {
    if (!hasManuallyOpened) {
      const timer = setTimeout(() => setIsOpen(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [hasManuallyOpened]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopover(true);
      const timer = setTimeout(() => setShowPopover(false), 3000);
      return () => clearTimeout(timer);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <>
      <div className="fixed bottom-20 right-5 z-[9998]">
        <button
          onClick={() => {
            setHasManuallyOpened(true);
            setIsOpen(true);
          }}
          className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition duration-300 bg-red-600 flex items-center justify-center text-white text-xl font-bold relative"
        >
          <LucideMessageCircleMore className="w-5 h-5" />
          {showPopover && (
            <div className="absolute right-full mr-3 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-bounce transition-all duration-500">
              ✨ Just Contact Us!
            </div>
          )}
          {/* {showPopover && (
            <div className="absolute right-full mr-3 bg-white text-red-600 text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap transition-all duration-500 animate-fade-in">
              <span className="font-semibold">📩 Need Help?</span> Contact Us!
            </div>
          )} */}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
          <div
            className={` backdrop-blur-md text-gray-800 rounded-2xl p-8 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
              isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-5 text-gray-600 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
              Chat with Us
            </h2>
            {isSuccess ? (
              <div className="text-green-600 text-center font-medium text-lg">
                ✅ Thank you! We’ll contact you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <input
                  name="interest"
                  type="text"
                  placeholder="Your Interest / Service"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full text-gray-400 rounded border border-gray-900 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3 text-white font-semibold bg-red-600 hover:bg-red-700 rounded transition"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
                {isError && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
