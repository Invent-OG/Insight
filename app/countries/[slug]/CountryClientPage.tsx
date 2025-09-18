'use client';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCreateLead } from '@/lib/queries/leads'; // adjust path if needed
import toast, { Toaster } from 'react-hot-toast';
import { CldImage } from 'next-cloudinary';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { countryData, CountryInfo } from '@/app/data/countryData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import PhoneInputWithFlag from '@/components/ui/PhoneInputWithFlag';

type Country = {
  title: string;
  image: any;
  slug: string;
  description: string;
};

const countries: Country[] = [
  {
    title: 'Study in UK',
    image: 'UK_elrzto',
    slug: 'uk',
    description: `Home to renowned institutions like Oxford and Cambridge, the UK
offers rigorous programs, short duration courses, and a strong
academic tradition. Cities in the UK offers a student-friendly
atmosphere, blending culture and connectivity. They offer a 1-year
master’s degree with no compromise on academic standards, along
with a 2-year stay-back option. With part-time work opportunities,
the UK is ideal for career-focused learners.`,
  },
  {
    title: 'Study in the USA',
    image: 'USA_1_gw8rlk',
    slug: 'usa',
    description: `The U.S. is a top destination for international students, offering
prestigious universities like Harvard and MIT, a flexible education
system, research projects and internship opportunities. Its diverse
lifestyle—from city campuses to quiet towns—enhances the student
experience. Offering a 2-year master's program and a 3-year
stay-back option, students can gain valuable work experience after
graduation through Optional Practical Training (OPT) and STEM
extensions`,
  },
  {
    title: 'Study in Ireland',
    image: 'ireland_ig6tu6',
    slug: 'ireland',
    description: `Ireland is home to prestigious universities like Trinity College Dublin
and University College Dublin, known for academic excellence. With
vibrant cities, affordable tuition, and a welcoming atmosphere, it
offers an exceptional student experience. Ireland also provides
Post-Graduation Work Permits, making it a great choice for
long-term career and settlement opportunities.
`,
  },
  {
    title: 'Study in Canada',
    image: 'canada_dttcwy',
    slug: 'canada',
    description: `Canada stands out for its world-class universities like the University
of Toronto and McGill, inclusive society, and high standard of living.
Affordable tuition, multicultural cities, and a welcoming
environment make it a top choice. Post-Graduation Work Permits
(up to 3 years) and clear Permanent Residency pathways support
long-term settlement.`,
  },
  {
    title: 'Study in Australia',
    image: 'Australia_wnuqfy',
    slug: 'australia',
    description: `Australia offers globally ranked universities, practical learning, and
vibrant student life in cities like Sydney and Melbourne. Students
benefit from part-time work rights and can apply for post-study
work visas of up to 4 years. Known for its beautiful landscapes and
sunny climate, Australia blends quality education with a laid-back
lifestyle.
`,
  },
  {
    title: 'Study in New Zealand',
    image: 'New_zealand_1_t8nmqw',
    slug: 'newzealand',
    description: `New Zealand provides a peaceful and research-driven education
experience at institutions like the University of Auckland. With its
stunning scenery and friendly, diverse communities, it offers a
balanced lifestyle. Students can work during studies and stay up to
3 years post-graduation, making it a great option for academic and
personal growth.`,
  },
  {
    title: 'Study in France',
    image: 'France_mvwukh',
    slug: 'france',
    description: `With top-ranked universities, affordable tuition, and diverse English
and French-taught programs, France welcomes international
students from across the globe. Experience a rich cultural heritage,
vibrant student life, and access to leading industries. Whether
you're pursuing undergraduate, postgraduate, or research degrees,
France offers academic excellence and career opportunities.
Scholarships and visa support make studying here more accessible
than ever. Begin your global journey with an education that sets you
apart.
`,
  },
  {
    title: 'Study in Germany',
    image: 'Germany_tz8s7i',
    slug: 'germany',
    description: `Germany is known for top public universities like TUM and
Heidelberg that offer tuition-free or low-cost education in
engineering, science, and more. With modern infrastructure, English
programs, and strong job prospects, it attracts career-focused
students. Learning German is an added advantage, as it opens
doors to more job opportunities and integration into the local
culture. Graduates can stay 18 months for job search and pursue
EU Blue Card residency.
`,
  },
  {
    title: 'Study in the UAE',
    image: 'UAE_sfmc3w',
    slug: 'uae',
    description: `The UAE offers international-standard education in a safe,
multicultural setting with campuses in Dubai and Abu Dhabi. With
strong programs in business, AI, and engineering, students gain
practical skills and global exposure. High living standards, tax-free
income, and strong career prospects make it a dynamic choice.`,
  },
  {
    title: 'Study in Singapore',
    image: 'singapore_xj4aie',
    slug: 'singapore',
    description: `Singapore is Asia’s leading education hub, home to world-class
institutions like NUS and NTU. It offers cutting-edge programs in
tech, business, and life sciences, alongside a clean, safe
environment. With strong industry links and high employability,
Singapore prepares students for success in the fast-growing
Asia-Pacific region.
`,
  },
  {
    title: 'Study in Malaysia',
    image: 'malaysia_imjp7t',
    slug: 'malaysia',
    description: `Malaysia offers globally recognized degrees at lower costs, with
English widely spoken and vibrant multicultural campuses.
Universities like the University of Malaya offer dual-degree
programs and industry collaboration. Its central location and
welcoming environment make it a great gateway to careers in Asia.`,
  },
  {
    title: 'Study in Poland',
    image: 'poland__umasxp',
    slug: 'poland',
    description: `Poland combines affordable living with top universities
offering strong programs in various fields. Known for its
vibrant student life and historic cities, Poland is an attractive
destination for international students.
`,
  },
  {
    title: 'Study in Sweden',
    image: 'sweden_xwzi3m',
    slug: 'sweden',
    description: `Sweden is renowned for its world-class education,
innovation, and sustainability focus. With English widely
spoken, numerous English-taught programs, and a high
quality of life, Students enjoy modern cities, scholarship
opportunities, and post-study work options, making Sweden
ideal for future innovators and researchers.
`,
  },
  {
    title: 'Study in Latvia',
    image: 'Latvia_yik0er',
    slug: 'latvia',
    description: `Latvia offers a range of quality, affordable education
options, especially in fields like engineering, IT, and
business. It’s an emerging destination with a unique cultural
experience and a growing international student community.
`,
  },
  {
    title: 'Study in Lithuania',
    image: 'Lithuania_xdd2mi',
    slug: 'lithuania',
    description: `Lithuania offers high-quality, low-cost education in a
vibrant, historical setting. Known for strong academic
programs in science, technology, and arts, Lithuania is a
hidden gem for international students.`,
  },
  {
    title: 'Study in Malta',
    image: 'Malta_jsgtxo',
    slug: 'malta',
    description: `Malta offers top-quality education in English, with a
Mediterranean lifestyle that combines rich history, vibrant
culture, and affordable living. It’s perfect for students
seeking an English-speaking environment in a stunning
location.`,
  },
  {
    title: 'Study in Netherlands',
    image: 'netherlands_pfqv1c',
    slug: 'netherlands',
    description: `The Netherlands is famous for its innovation and top-tier
universities, many of which offer English-taught programs.
With a highly international student population, it’s an ideal
destination for career-focused students.
`,
  },
  {
    title: 'Study in Finland',
    image: 'Finland_qfpm8g',
    slug: 'finland',
    description: `Finland is known for its innovative education system,
offering excellent universities with a focus on research and
creativity. With a high quality of life and diverse
post-graduation opportunities, Finland is a top choice for
international students.
`,
  },
  {
    title: 'Study in Armenia',
    image: 'Armenia_qqasz6',
    slug: 'armenia',
    description: `Armenia offers affordable, high-quality education with growing international
recognition. Universities in Yerevan and other cities provide a mix of theoretical
and practical learning, especially in medicine and IT. Students enjoy a welcoming
environment, rich cultural heritage, and low living costs. With increasing
opportunities for internships and work during studies, Armenia is an emerging
destination for international students.

`,
  },
  {
    title: 'Study in Georgia',
    image: 'Georgia_u3butg',
    slug: 'georgia',
    description: `Georgia is becoming an increasingly popular destination for international
students, offering a wide range of English-medium programs in fields like
medicine, business, and engineering Institutions in Tbilisi and Batumi offer
modern education with low tuition fees and a friendly atmosphere. International
students benefit from a multicultural experience, scenic landscapes, and
simplified visa procedures. Georgia combines academic value with a vibrant
lifestyle and growing career prospects.
`,
  },
  {
    title: 'Study in Uzbekistan',
    image: 'Uzbekistan_ove2ok',
    slug: 'uzbekistan',
    description: `Uzbekistan is rapidly developing as a study destination with government-backed
reforms in higher education. Cities like Tashkent and Samarkand host institutions
offering globally aligned curricula in medicine, technology, and business.
Students experience a unique cultural blend, low cost of living, and increasing
support for international learners. With its sunny climate and historic charm,
Uzbekistan offers both quality education and cultural richness.
`,
  },
];
const suggestionMap: Record<string, string[]> = {
  uk: ['singapore', 'latvia', 'poland'],
  usa: ['france', 'newzealand', 'poland'],
  ireland: ['singapore', 'france', 'sweden'],
  canada: ['poland', 'uae', 'uk'],
  australia: ['malta', 'netherlands', 'finland'],
  newzealand: ['singapore', 'finland', 'sweden'],
  france: ['singapore', 'finland', 'newzealand'],
  germany: ['netherlands', 'singapore', 'australia'],
  uae: ['latvia', 'usa', 'lithuania'],
  singapore: ['malaysia', 'germany', 'uae'],
  malaysia: ['ireland', 'lithuania', 'singapore'],
  poland: ['latvia', 'netherlands', 'malta'],
  sweden: ['malaysia', 'germany', 'uae'],
  latvia: ['uae', 'lithuania', 'netherlands'],
  lithuania: ['finland', 'australia', 'newzealand'],
  malta: ['ireland', 'finland', 'germany'],
  netherlands: ['germany', 'usa', 'poland'],
  finland: ['canada', 'usa', 'sweden'],
  armenia: ['georgia', 'uzbekistan', 'poland'],
  georgia: ['armenia', 'uzbekistan', 'lithuania'],
  uzbekistan: ['armenia', 'georgia', 'finland'],
};

type Props = {
  slug: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function CountryClientPage({ slug }: Props) {
  const selectedSlug = slug;

  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const country = countries.find((c) => c.slug === slug);
  if (!country) {
    console.warn(`No country found for slug: ${slug}`);
    return <div>Country not found</div>;
  }

  const countryContents = countryData.filter((c) => c.slug === slug);

  const selectedSuggestions = suggestionMap[selectedSlug] || []; // Fallback to an empty array
  const suggestedCards = countries.filter((c) => selectedSuggestions.includes(c.slug));

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const { mutate: createLead, isPending } = useCreateLead();

  const onSubmit = (data: FormData) => {
    console.log(data);
    createLead(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: data.message,
      },
      {
        onSuccess: () => {
          reset();
          toast.success('Submitted Successfully');
        },
        onError: (error) => {
          console.error('Error creating lead:', error);
          toast.error('Failed to submit lead. Please try again.');
        },
      }
    );
  };

  return (
    <section className='min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 py-16'>
      <div className='flex flex-col lg:flex-row gap-10 py-10 '>
        {/* Left Column - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-[70%] space-y-6'
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl pt-[5%] font-bold text-black'>
            Take the First Step Toward Your Global <span className='text-primary'> Education!</span>
          </h1>
          <h2 className='text-xl font-medium'>
            Find Your Ideal <span className='text-primary'>Course & Country</span>
          </h2>

          {/* Image with overlay */}
          <div className='relative w-full h-[500px] overflow-hidden'>
            <CldImage
              src={country.image}
              alt={country.title}
              fill
              className='object-cover object-center z-0'
              sizes='100vw'
              priority
            />

            <div className='absolute inset-0 z-10 bg-black/40 flex items-center justify-center'>
              <h2 className='text-white text-3xl font-bold'>{country.title}</h2>
            </div>
          </div>

          {/* More text BELOW the image */}

          <div>{country.description}</div>

          <div className='overflow-x-auto p-4'>
            <table className='min-w-full table-auto border border-white text-black bg-white '>
              <thead className='bg-black/80 text-white '>
                <tr>
                  <th className='px-4 py-2 border border-gray-500 text-left'>Field</th>
                  <th className='px-4 py-2 border border-gray-500 text-left'>Details</th>
                </tr>
              </thead>
              <tbody>
                {countryContents.map((c, index) => (
                  <Fragment key={index}>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>Country</td>
                      <td className='px-4 py-2 border border-gray-500'>{c.country}</td>
                    </tr>

                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Tuition Fee Range
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.tuitionFeeRange}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Living Costs
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.livingCosts}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Duration of Courses
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.durationOfCourses}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Academic Requirements
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.academicRequirements}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Language Proficiency
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.languageProficiency}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        IELTS Waiver
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>
                        {c.ieltsWaiverAvailability}
                      </td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Accepted Academic Gaps
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.acceptedAcademicGaps}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Work Experience Proof
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.workExperienceProof}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Funds Required for Visa
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.fundsRequiredForVisa}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Financial Sources
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>
                        {c.acceptableFinancialSources}
                      </td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Eligible Sponsors
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.eligibleSponsors}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Minimum Family Income
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.minimumFamilyIncome}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>Visa Type</td>
                      <td className='px-4 py-2 border border-gray-500'>{c.visaType}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Visa Processing Time
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.visaProcessingTime}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Part-time Work Limit
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.partTimeWorkLimit}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Average Part-time Wages
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.averagePartTimeWages}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Internship Options
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.internshipOptions}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Post-Study Work
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.postStudyWorkOptions}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>PR Pathway</td>
                      <td className='px-4 py-2 border border-gray-500'>
                        {c.permanentResidencyPathway}
                      </td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Spouse Dependent Visa
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.spouseDependentVisa}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Dependent Conditions
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.dependentConditions}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Scholarships
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>
                        {c.scholarshipOpportunities}
                      </td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Healthcare Access
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.healthcareAccess}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>Climate</td>
                      <td className='px-4 py-2 border border-gray-500'>{c.climateWeather}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Cultural Environment
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.culturalEnvironment}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>Currency</td>
                      <td className='px-4 py-2 border border-gray-500'>{c.currency}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>Intakes</td>
                      <td className='px-4 py-2 border border-gray-500'>{c.intakes}</td>
                    </tr>
                    <tr className='hover:bg-red-600 hover:text-white hover:shadow-md hover:scale-[1.01] transition-all duration-300 ease-in-out'>
                      <td className='px-4 py-2 border border-gray-500 font-semibold'>
                        Popular Cities
                      </td>
                      <td className='px-4 py-2 border border-gray-500'>{c.popularCities}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Right Column - Form + Suggestions */}
        <div className='w-full lg:w-[30%] flex flex-col'>
          {/* Form */}
          {/* <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='min-h-[450px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between'
          > */}
          <h3 className='text-xl font-bold text-black text-center mb-2'>Let’s Get Started</h3>
          <p className='text-center text-sm text-gray-700 mb-4'>
            Submit your details for expert guidance
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
              <Input
                type='text'
                placeholder='Full Name'
                {...register('name', { required: 'Name is required' })}
                className='px-4 py-2 border rounded'
                disabled={isSubmitting}
              />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}

              <Input
                type='email'
                placeholder='Email Address'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                className='px-4 py-2 border rounded'
                disabled={isSubmitting}
              />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}

              <PhoneInputWithFlag name='phone' control={control} disabled={isSubmitting} />

              <Input
                type='text'
                placeholder='Interest'
                {...register('message', { required: 'Interest is required' })}
                className='px-4 py-2 border rounded'
                disabled={isSubmitting}
              />
              {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
            </div>

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition'
            >
              {isPending ? 'Submitting...' : 'Submit'}
            </Button>
          </form>

          <div className='h-5 mb-2 text-center text-sm font-medium'>
            {statusMessage && (
              <p className={isSuccess ? 'text-green-400' : 'text-red-400'}>{statusMessage}</p>
            )}
          </div>
          {/* </motion.form> */}

          {/* Suggested Countries */}
          <div className='mt-4'>
            <h4 className='text-black text-sm font-semibold mb-4'>Popular Destinations:</h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {suggestedCards.slice(0, 2).map((c) => (
                <Link href={`/countries/${c.slug}`} key={c.slug}>
                  <div
                    className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
            bg-gray-600 text-white hover:bg-gray-900`}
                  >
                    <div className='relative w-full h-36 md:h-32'>
                      <CldImage
                        src={c.image}
                        alt={c.title}
                        fill
                        className='object-cover'
                        sizes='100vw'
                        priority
                      />
                    </div>
                    <div className='text-center py-3'>
                      <span className='text-sm sm:text-base font-semibold'>
                        {c.title.split(' in ')[1]}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
