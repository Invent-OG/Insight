// "use client";
// import { useState, useEffect } from "react";
// import { useCreateLead } from "@/lib/queries/leads";
// import { Button } from "../ui/button";
// import { LucideMessageCircleMore, MessageCircle } from "lucide-react";

// export default function PopupFormModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [hasManuallyOpened, setHasManuallyOpened] = useState(false);
//   const [showPopover, setShowPopover] = useState(false);

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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowPopover(true);
//       const timer = setTimeout(() => setShowPopover(false), 3000);
//       return () => clearTimeout(timer);
//     }, 15000);

//     return () => clearInterval(interval);
//   }, []);

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
//           className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition duration-300 bg-red-600 flex items-center justify-center text-white text-xl font-bold relative"
//         >
//           <LucideMessageCircleMore className="w-5 h-5" />
//           {showPopover && (
//             <div className="absolute right-full mr-3 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-bounce transition-all duration-500">
//               ✨ Just Contact Us!
//             </div>
//           )}
//                 </button>
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
import { LucideMessageCircleMore } from "lucide-react";

export default function PopupFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const { mutate, isPending, isSuccess, isError } = useCreateLead();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

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
            setIsOpen(true);
          }}
          className="w-14 h-14 rounded-full shadow-lg hover:scale-105 transition duration-300 bg-red-600 flex items-center justify-center text-white text-xl font-bold relative"
        >
          <LucideMessageCircleMore className="w-5 h-5" />
          {showPopover && (
            <div className="absolute right-full mr-3 bg-red-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-bounce transition-all duration-500">
              ✨ Contact Us!
            </div>
          )} 
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
          <div
            className={`backdrop-blur-md text-gray-800 rounded-2xl p-8 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
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
