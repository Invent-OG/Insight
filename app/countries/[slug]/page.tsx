import { Metadata } from 'next';
import CountryClientPage from './CountryClientPage';

export type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slugKey = (await params).slug.toLowerCase();

  const metaMap: Record<string, { title: string; description: string }> = {
    uk: {
      title: 'Study in the UK—World-Class Education Awaits',
      description:
        'Unlock your potential in the UK! Get expert advice on university applications, student visas, and financing options for a smooth study abroad journey.',
    },
    usa: {
      title: 'Study in the USA—Explore World-Class Learning Opportunities',
      description:
        'From Ivy League schools to career-focused programs, explore endless opportunities to study in the USA with expert guidance at every step.',
    },
    ireland: {
      title: 'Study in Ireland—A Smart Choice for Students',
      description:
        'Find scholarships, admission advice, and visa support for studying in Ireland. We’re here to make your study abroad journey simple and stress-free.',
    },
    canada: {
      title: 'Study in Canada—High-Quality & Affordable',
      description:
        'Canada combines excellent education with student-friendly policies. Discover diverse programs, cultural experiences, and opportunities after graduation.',
    },
    australia: {
      title: 'Study in Australia—Learn, Work & Thrive',
      description:
        'Australia has top universities, post-study work opportunities, and an excellent lifestyle. See why international students choose it as their study destination.',
    },
    newzealand: {
      title: 'Study in New Zealand—Safe, Scenic & Smart',
      description:
        'Why choose New Zealand? We guide you through top universities, course selection, and admissions to help you study in this safe and student-friendly country.',
    },
    france: {
      title: 'Study in France—Culture, Innovation & Academics',
      description:
        'Planning to study in France? We provide expert support for English-taught programs, applications, and your smooth transition to life in Europe.',
    },
    uae: {
      title: 'Study in the UAE—Global Degrees, Local Access',
      description:
        'Want to study in Dubai or Abu Dhabi? We help you apply to top universities, from global campuses to local institutions, with full guidance throughout.',
    },
    singapore: {
      title: 'Study in Singapore—A Leading Academic Destination in Asia',
      description:
        'Looking to study in Singapore? We help you apply to top universities and guide you through every step—from admission to arrival in this dynamic city-state.',
    },
    malaysia: {
      title: 'Study in Malaysia—Affordable, Quality Education',
      description:
        'Why choose Malaysia? We assist with finding budget-friendly, high-quality programs and provide full support from course selection to visa application.',
    },
    poland: {
      title: 'Study in Poland—Europe’s Rising Education Destination',
      description:
        'Thinking about Poland for your studies? We guide you through admissions to English-taught programs and help make your European education journey smooth.',
    },
    sweden: {
      title: 'Study in Sweden—Innovation, Scholarships & More',
      description:
        'Want to study in an innovative and eco-friendly country? We help you explore Sweden’s top universities, scholarships, and admissions process.',
    },
    latvia: {
      title: 'Study in Latvia—Affordable EU Education',
      description:
        'Looking for quality education in Europe at low cost? We help you apply to Latvia’s top universities with full support on programs, paperwork, and beyond.',
    },
    lithuania: {
      title: 'Study in Lithuania—Smart, Safe & Student-Friendly',
      description:
        'Why study in Lithuania? We guide you through English-taught programs, applications, and everything you need to begin your education in this European nation.',
    },
    malta: {
      title: 'Study in Malta—English Education by the Mediterranean',
      description:
        'Dreaming of studying in an English-speaking EU country? We help you access quality universities in Malta with step-by-step admission guidance.',
    },
    netherlands: {
      title: 'Study in the Netherlands—Globally Ranked Programs',
      description:
        'Thinking of Dutch universities? We support your journey with help on admissions, choosing the right program, and settling into student life in the Netherlands.',
    },
    finland: {
      title: 'Study in Finland—Innovative & Tuition-Free Options',
      description:
        'Want world-class education with innovative teaching? We help you explore Finland’s top universities and guide you through the all the process.',
    },
    armenia: {
      title: 'Study in Armenia—Quality & Affordable Education',
      description:
        'Looking for budget-friendly education abroad? We help students apply to top Armenian universities with complete support from admission to arrival.',
    },
    georgia: {
      title: 'Study in Georgia—MBBS & More in English',
      description:
        'Planning to study MBBS or other programs in Georgia? We provide full support for admissions, document prep, and settling into student life abroad.',
    },
    uzbekistan: {
      title: 'Study MBBS in Uzbekistan—A Fast-Growing Study Option',
      description:
        'Exploring MBBS in Uzbekistan? We help you choose the right university, handle documentation, and ensure a smooth start to your medical education.',
    },
  };

  const meta = metaMap[slugKey] ?? {
    title: 'Top Study Abroad Destinations | Insight',
    description:
      'Discover top countries to study abroad with insights on admissions, visas, and loans. Plan your global education journey with Insight.',
  };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug; // now safe
  return <CountryClientPage slug={slug} />;
}
