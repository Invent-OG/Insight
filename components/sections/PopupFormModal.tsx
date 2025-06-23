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
"use client";
import { useState, useEffect } from "react";
import { useCreateLead } from "@/lib/queries/leads"; // adjust path if needed
import { Button } from "../ui/button";

export default function PopupFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { mutate, isPending, isSuccess, isError } = useCreateLead();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  useEffect(() => {
    // ✅ Always open after 2 seconds when page loads
    const timer = setTimeout(() => {
      console.log("⏰ Opening popup after 2s...");
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      console.log("🎬 Popup is now open");
      const animationTimer = setTimeout(() => {
        setIsAnimating(true);
        console.log("✨ Animation started");
      }, 50);
      return () => clearTimeout(animationTimer);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📨 Submitting form", formData);
    mutate(formData);
  };

  if (!isOpen) {
    console.log("🛑 Modal not open yet");
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-[9999] transition-opacity px-4">
      <div
        className={`bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl p-6 w-full max-w-lg relative shadow-2xl transform transition-all duration-500 ease-out ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-white text-2xl font-bold hover:text-red-400"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>

        {isSuccess ? (
          <div className="text-green-300 text-center font-medium">
            ✅ Thank you! We’ll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <input
                name="interest"
                type="text"
                placeholder="Your Interest / Service"
                value={formData.interest}
                onChange={handleChange}
                className="flex-1 px-4 py-2 rounded bg-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            <div className="w-full">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full py-2 text-white font-semibold rounded shadow-md transition"
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>

            {isError && (
              <p className="text-red-300 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
