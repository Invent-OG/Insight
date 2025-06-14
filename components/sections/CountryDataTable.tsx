// // components/CountryDataTable.tsx
// "use client";

// import React from "react";
// import { countryData } from "@/app/data/countryData";

// type Props = {
//   countrySlug: string;
// };

// const slugToCountryName: Record<string, string> = {
//   uae: "UAE",
//   uk: "UK",
//   usa: "USA",
//   canada: "Canada",
//   ireland: "Ireland",
//   australia: "Australia",
//   "new-zealand": "New Zealand",
//   france: "France",
//   germany: "Germany",
//   singapore: "Singapore",
//   malaysia: "Malaysia",
//   poland: "Poland",
//   sweden: "Sweden",
//   latvia: "Latvia",
//   lithuania: "Lithuania",
//   malta: "Malta",
//   netherlands: "Netherlands",
//   finland: "Finland",
// };

// export default function CountryDataTable({ countrySlug }: Props) {
//   const countryName = slugToCountryName[countrySlug.toLowerCase()];
//   const country = countryData.find((c) => c.country === countryName);

//   if (!country) {
//     return (
//       <p className="text-red-500 text-sm">No data found for this country.</p>
//     );
//   }

//   const displayEntries = Object.entries(country).filter(
//     ([key]) => key !== "country"
//   );

//   return (
//     <div className="overflow-x-auto rounded-xl border border-white/10 mt-8">
//       <table className="w-full text-sm text-white">
//         <tbody>
//           {displayEntries.map(([key, value]) => (
//             <tr
//               key={key}
//               className="odd:bg-white/10 even:bg-white/5 border-b border-white/10"
//             >
//               <td className="py-3 px-4 font-semibold capitalize w-1/3">
//                 {key.replace(/([A-Z])/g, " $1")}
//               </td>
//               <td className="py-3 px-4">{value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
