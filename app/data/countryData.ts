export interface CountryInfo {
  slug: string;
  country: string;
  tuitionFeeRange: string;
  livingCosts: string;
  durationOfCourses: string;
  academicRequirements: string;
  languageProficiency: string;
  ieltsWaiverAvailability: string;
  acceptedAcademicGaps: string;
  workExperienceProof: string;
  fundsRequiredForVisa: string;
  acceptableFinancialSources: string;
  eligibleSponsors: string;
  minimumFamilyIncome: string;
  visaType: string;
  visaProcessingTime: string;
  partTimeWorkLimit: string;
  averagePartTimeWages: string;
  internshipOptions: string;
  postStudyWorkOptions: string;
  permanentResidencyPathway: string;
  spouseDependentVisa: string;
  dependentConditions: string;
  scholarshipOpportunities: string;
  healthcareAccess: string;
  climateWeather: string;
  culturalEnvironment: string;
  currency: string;
  intakes: string;
  popularCities: string;
}

export const countryData: CountryInfo[] = [
  {
    country: "UAE",
        slug: 'uae',

    tuitionFeeRange: "AED 30,000 – AED 80,000 per year",
    livingCosts: "AED 40,000 – AED 60,000 per year",
    durationOfCourses: "Undergraduate: 3–4 years; Postgraduate: 1–2 years",
    academicRequirements:
      "Minimum 60% in previous qualifications; competitive for top universities",
    languageProficiency: "IELTS, TOEFL, or PTE required",
    ieltsWaiverAvailability: "Yes – for select universities and programs",
    acceptedAcademicGaps: "Gaps accepted with valid justification",
    workExperienceProof:
      "Experience letter, Offer letter, Payslips, or Company letter",
    fundsRequiredForVisa: "Tuition fees + living costs",
    acceptableFinancialSources:
      "Education Loan, Personal Savings, Fixed Deposits",
    eligibleSponsors:
      "Parents, Siblings, Relatives, Legal Guardians – up to 3 allowed",
    minimumFamilyIncome:
      "Not mandated; funds should meet visa financial requirements",
    visaType: "Student Visa",
    visaProcessingTime: "Varies; typically 2–4 weeks",
    partTimeWorkLimit:
      "Work up to 20 hours weekly in term; full-time during holidays",
    averagePartTimeWages: "AED 20 – AED 35 per hour",
    internshipOptions: "Available for certain courses",
    postStudyWorkOptions: "Limited; depends on employer sponsorship",
    permanentResidencyPathway:
      "Golden Visa for exceptional graduates in strategic fields",
    spouseDependentVisa:
      "Allowed for postgrad courses over 12 months; spouse can work full-time",
    dependentConditions: "Separate visa application; additional funds required",
    scholarshipOpportunities: "University-specific scholarships",
    healthcareAccess: "Students must obtain private health insurance",
    climateWeather: "Hot desert climate; very hot summers, mild winters",
    culturalEnvironment:
      "Diverse international community; modern and cosmopolitan",
    currency: "United Arab Emirates Dirham (AED)",
    intakes: "Major intakes: September and January",
    popularCities: "Dubai, Abu Dhabi, Sharjah",
  },
  {
    country: "Singapore",
        slug: 'singapore',

    tuitionFeeRange: "SGD 17,000 – SGD 90,000 per year",
    livingCosts: "SGD 1,000 – SGD 1,400 per month",
    durationOfCourses: "Undergraduate: 3–4 years; Postgraduate: 1–2 years",
    academicRequirements:
      "Minimum 60% in previous qualifications; competitive for top universities",
    languageProficiency: "IELTS, TOEFL, or PTE required",
    ieltsWaiverAvailability: "Yes – for select universities and programs",
    acceptedAcademicGaps: "Gaps accepted with valid justification",
    workExperienceProof:
      "Experience letter, Offer letter, Payslips, or Company letter",
    fundsRequiredForVisa: "Tuition fees + living costs",
    acceptableFinancialSources:
      "Education Loan, Personal Savings, Fixed Deposits",
    eligibleSponsors:
      "Parents, Siblings, Relatives, Legal Guardians – up to 3 allowed",
    minimumFamilyIncome:
      "Not mandated; funds should meet visa financial requirements",
    visaType: "Student Pass",
    visaProcessingTime: "Typically 1–2 weeks",
    partTimeWorkLimit:
      "Part-time in term (16 hrs max); full-time during uni holidays",
    averagePartTimeWages: "SGD 8 – SGD 12 per hour",
    internshipOptions: "Available for certain courses",
    postStudyWorkOptions:
      "Work Holiday Pass for up to 6 months for eligible students",
    permanentResidencyPathway:
      "Employment Pass holders may apply after 2 years",
    spouseDependentVisa:
      "Allowed for postgrad courses over 12 months; spouse can work full-time",
    dependentConditions: "Separate visa application; additional funds required",
    scholarshipOpportunities:
      "ASEAN Undergraduate Scholarship, SINGA Scholarship",
    healthcareAccess: "Students must obtain health insurance",
    climateWeather: "Tropical rainforest climate; hot and humid year-round",
    culturalEnvironment:
      "A diverse society where Malay, Chinese, Indian, and Western traditions come together",
    currency: "Singapore Dollar (SGD)",
    intakes: "Major intakes: August and January",
    popularCities: "Singapore",
  },
  {
    country: "UK",
        slug: 'uk',

    tuitionFeeRange:
      "£10,000 – £38,000 per year depending on course and university",
    livingCosts: "£800 – £1,200 per month depending on location",
    durationOfCourses:
      "Bachelor’s: 3 years; Master’s: 1 year; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 55% – 60% in previous qualifications; higher for top universities",
    languageProficiency: "IELTS, TOEFL, or PTE required",
    ieltsWaiverAvailability:
      "Yes – based on Medium of Instruction (MOI) or university policy",
    acceptedAcademicGaps: "Accepted with valid documentation",
    workExperienceProof:
      "Experience letter, offer letter, payslips, or company letter",
    fundsRequiredForVisa:
      "Tuition fees + £1,023 per month for living costs outside London or £1,334 inside London",
    acceptableFinancialSources:
      "Education loan, personal savings, fixed deposits",
    eligibleSponsors:
      "Parents, siblings, relatives, legal guardians – up to 3 allowed",
    minimumFamilyIncome:
      "Not mandated; financial proof should meet visa criteria",
    visaType: "Student visa (Tier 4)",
    visaProcessingTime: "3 weeks on average",
    partTimeWorkLimit:
      "20 hours per week during term; full-time during holidays",
    averagePartTimeWages: "£8 – £15 per hour",
    internshipOptions: "Available; varies by course and university",
    postStudyWorkOptions: "2-year Graduate Route visa",
    permanentResidencyPathway:
      "Possible after 5 years of continuous stay and work",
    spouseDependentVisa:
      "Allowed for postgrad courses over 12 months; spouse can work full-time",
    dependentConditions: "Separate visa application; additional funds required",
    scholarshipOpportunities:
      "Commonwealth, Chevening, GREAT, and university-specific scholarships",
    healthcareAccess: "Access to NHS with Immigration Health Surcharge (IHS)",
    climateWeather: "Temperate maritime climate; cool summers and mild winters",
    culturalEnvironment: "Multicultural with rich history, art, and innovation",
    currency: "Pound Sterling (£)",
    intakes: "Major intakes: September and January",
    popularCities: "London, Manchester, Birmingham, Edinburgh",
  },
  {
    country: "USA",
        slug: 'usa',

    tuitionFeeRange:
      "$10,000 – $55,000 per year depending on course and university",
    livingCosts: "$1,000 – $2,500 per month based on location and lifestyle",
    durationOfCourses:
      "Bachelor’s: 4 years; Master’s: 1–2 years; Ph.D.: 4–6 years",
    academicRequirements: "Minimum 55% – 60%; competitive for top universities",
    languageProficiency: "IELTS, TOEFL, or PTE required",
    ieltsWaiverAvailability: "Yes – based on MOI or university discretion",
    acceptedAcademicGaps: "Accepted with valid documentation",
    workExperienceProof:
      "Experience letter, offer letter, payslips, or company letter",
    fundsRequiredForVisa:
      "Tuition fees + living expenses (total varies by university I-20)",
    acceptableFinancialSources:
      "Education loan, personal savings, fixed deposits",
    eligibleSponsors:
      "Parents, siblings, relatives, legal guardians – up to 3 allowed",
    minimumFamilyIncome: "Not mandated; must show sufficient funds per I-20",
    visaType: "F-1 Student Visa",
    visaProcessingTime: "Varies; average 3–6 weeks",
    partTimeWorkLimit:
      "On-campus work up to 20 hours/week during term; optional CPT/OPT",
    averagePartTimeWages: "$10 – $20 per hour",
    internshipOptions: "Available via CPT and OPT programs",
    postStudyWorkOptions: "OPT (12–36 months depending on field)",
    permanentResidencyPathway:
      "Possible via employer sponsorship and H-1B route",
    spouseDependentVisa: "Allowed under F-2; spouse cannot work",
    dependentConditions: "Separate visa application; additional funds required",
    scholarshipOpportunities:
      "Merit-based, need-based, sports, and university-specific scholarships",
    healthcareAccess: "Mandatory health insurance coverage required",
    climateWeather:
      "Diverse – varies from tropical to continental across regions",
    culturalEnvironment: "Highly diverse and inclusive society",
    currency: "US Dollar ($)",
    intakes: "Major intakes: August and January",
    popularCities: "New York, Los Angeles, Chicago, Boston",
  },
  {
    country: "Ireland",
        slug: 'ireland',

    tuitionFeeRange:
      "€10,000 – €25,000 per year depending on course and institution",
    livingCosts: "€7,000 – €12,000 per year depending on city",
    durationOfCourses:
      "Bachelor’s: 3–4 years; Master’s: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 55% – 60% in previous qualifications; varies by university",
    languageProficiency: "IELTS, TOEFL, PTE accepted",
    ieltsWaiverAvailability:
      "Yes – based on Medium of Instruction or institution policy",
    acceptedAcademicGaps: "Accepted with valid justification and documentation",
    workExperienceProof:
      "Experience letter, offer letter, payslips, or company letter",
    fundsRequiredForVisa: "€7,000 for one year of living costs + tuition fees",
    acceptableFinancialSources: "Bank savings, education loans, fixed deposits",
    eligibleSponsors: "Parents, siblings, relatives, legal guardians",
    minimumFamilyIncome: "Not fixed, but must prove adequate funds",
    visaType: "Irish Study Visa (D Type)",
    visaProcessingTime: "4–8 weeks on average",
    partTimeWorkLimit:
      "20 hours/week during term; 40 hours/week during holidays",
    averagePartTimeWages: "€10 – €14 per hour",
    internshipOptions: "Available for specific programs",
    postStudyWorkOptions: "Stay Back Option: 2 years for Master’s graduates",
    permanentResidencyPathway: "After 5 years of legal residence and work",
    spouseDependentVisa:
      "Allowed for postgrad programs in recognized institutions",
    dependentConditions: "Separate visa required; additional financial proof",
    scholarshipOpportunities:
      "Government of Ireland Scholarships, university-specific",
    healthcareAccess: "Private health insurance required",
    climateWeather: "Mild, wet, and changeable; cool summers and mild winters",
    culturalEnvironment:
      "Friendly, English-speaking, culturally rich and diverse",
    currency: "Euro (€)",
    intakes: "Main intakes: September and January",
    popularCities: "Dublin, Cork, Galway, Limerick",
  },
  {
    country: "Canada",
        slug: 'canada',

    tuitionFeeRange:
      "CAD 15,000 – CAD 35,000 per year depending on course and university",
    livingCosts: "CAD 10,000 – CAD 15,000 per year",
    durationOfCourses:
      "Bachelor’s: 3–4 years; Master’s: 1–2 years; Ph.D.: 4–6 years",
    academicRequirements:
      "Minimum 55% – 60% in previous qualifications; higher for competitive programs",
    languageProficiency: "IELTS, TOEFL, PTE accepted",
    ieltsWaiverAvailability: "Yes – based on MOI or university discretion",
    acceptedAcademicGaps: "Accepted with valid documentation",
    workExperienceProof:
      "Experience letter, offer letter, payslips, or company letter",
    fundsRequiredForVisa:
      "CAD 10,000 (outside Quebec) or CAD 11,000 (in Quebec) + tuition fees",
    acceptableFinancialSources:
      "Bank savings, education loans, GIC, fixed deposits",
    eligibleSponsors: "Parents, siblings, relatives, legal guardians",
    minimumFamilyIncome: "Not fixed; must show adequate financial support",
    visaType: "Study Permit",
    visaProcessingTime: "4–6 weeks (faster with SDS route)",
    partTimeWorkLimit: "20 hours/week during study; full-time during breaks",
    averagePartTimeWages: "CAD 14 – CAD 20 per hour",
    internshipOptions: "Co-op and internship programs available",
    postStudyWorkOptions: "Post-Graduation Work Permit (up to 3 years)",
    permanentResidencyPathway:
      "Via Canadian Experience Class, Express Entry, or PNP",
    spouseDependentVisa: "Allowed; spouse may apply for open work permit",
    dependentConditions: "Separate applications and proof of funds required",
    scholarshipOpportunities:
      "Government, university, and private scholarships",
    healthcareAccess: "Provincial health coverage or private insurance",
    climateWeather: "Cold winters, warm summers; varies by region",
    culturalEnvironment: "Multicultural, inclusive, and immigrant-friendly",
    currency: "Canadian Dollar (CAD)",
    intakes: "Major intakes: September and January",
    popularCities: "Toronto, Vancouver, Montreal, Calgary",
  },
  {
    country: "Australia",
        slug: 'australia',

    tuitionFeeRange:
      "AUD 20,000 – AUD 45,000 per year depending on course and institution",
    livingCosts: "AUD 21,041 per year as required by visa regulations",
    durationOfCourses:
      "Bachelor’s: 3 years; Master’s: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 60% in previous qualifications; varies by program",
    languageProficiency: "IELTS, TOEFL, PTE accepted",
    ieltsWaiverAvailability:
      "Yes – for select institutions with English-medium background",
    acceptedAcademicGaps: "Gaps accepted with valid reasons and documentation",
    workExperienceProof: "Offer letter, experience certificate, payslips",
    fundsRequiredForVisa: "AUD 24,505 per year including tuition and living",
    acceptableFinancialSources: "Savings, loans, fixed deposits",
    eligibleSponsors: "Parents, guardians, close relatives",
    minimumFamilyIncome:
      "Not specifically required but financial proof is needed",
    visaType: "Subclass 500 Student Visa",
    visaProcessingTime: "4 – 6 weeks on average",
    partTimeWorkLimit:
      "48 hours per fortnight during study; full-time during breaks",
    averagePartTimeWages: "AUD 20 – AUD 25 per hour",
    internshipOptions:
      "Internships and part-time roles through university programs",
    postStudyWorkOptions: "Post-Study Work Visa (485) – up to 4 years",
    permanentResidencyPathway:
      "Through Skilled Migration pathways and point system",
    spouseDependentVisa: "Allowed for Master’s and Ph.D. students",
    dependentConditions: "Spouse can work full-time; additional funds required",
    scholarshipOpportunities:
      "Australia Awards, Destination Australia, university-based",
    healthcareAccess: "Overseas Student Health Cover (OSHC) mandatory",
    climateWeather: "Mild to hot summers, cool winters; varies regionally",
    culturalEnvironment:
      "Multicultural, English-speaking, welcoming to students",
    currency: "Australian Dollar (AUD)",
    intakes: "February and July main intakes; November minor intake",
    popularCities: "Sydney, Melbourne, Brisbane, Perth",
  },
  {
    country: "New Zealand",
     slug: "new-zealand",
    tuitionFeeRange:
      "NZD 22,000 – NZD 32,000 per year for undergraduates; NZD 26,000 – NZD 37,000 for postgraduates",
    livingCosts: "NZD 20,000 per year (proof required for visa)",
    durationOfCourses:
      "Bachelor’s: 3 years; Master’s: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements: "Minimum 60% in academics; varies by institution",
    languageProficiency: "IELTS, TOEFL, PTE accepted",
    ieltsWaiverAvailability: "Yes – with MOI or select universities",
    acceptedAcademicGaps: "Accepted with proper justification",
    workExperienceProof: "Offer letter, experience letter, payslips",
    fundsRequiredForVisa: "NZD 20,000 per year + tuition fees",
    acceptableFinancialSources: "Savings, loans, fixed deposits",
    eligibleSponsors: "Parents, relatives, legal guardians",
    minimumFamilyIncome: "Not mandatory; financial capacity must be shown",
    visaType: "Fee Paying Student Visa",
    visaProcessingTime: "4 – 6 weeks on average",
    partTimeWorkLimit: "20 hours/week during term; full-time during breaks",
    averagePartTimeWages: "NZD 18 – NZD 22 per hour",
    internshipOptions:
      "Available for various programs via university career services",
    postStudyWorkOptions: "Up to 3 years based on course level and location",
    permanentResidencyPathway: "Through skilled migration after study and work",
    spouseDependentVisa: "Allowed for Master’s/Ph.D. students in skilled lists",
    dependentConditions:
      "Spouse may work full-time; additional financial proof required",
    scholarshipOpportunities: "NZ Scholarships, university scholarships",
    healthcareAccess: "Insurance is mandatory for international students",
    climateWeather: "Mild and temperate; cool winters and warm summers",
    culturalEnvironment:
      "Welcoming, diverse, with strong Māori cultural influence",
    currency: "New Zealand Dollar (NZD)",
    intakes: "February and July major intakes",
    popularCities: "Auckland, Wellington, Christchurch, Dunedin",
  },
  {
    country: "France",
        slug: 'france',

    tuitionFeeRange:
      "€2,770 per year for Bachelor’s; €3,770 for Master’s at public universities; private institutions may charge more (€10,000 – €30,000)",
    livingCosts: "€600 – €1,200 per month depending on city",
    durationOfCourses: "Bachelor’s: 3 years; Master’s: 2 years; Ph.D.: 3 years",
    academicRequirements:
      "Minimum 50% – 60%; top institutions may require more",
    languageProficiency:
      "IELTS, TOEFL, or French language test depending on the medium of instruction",
    ieltsWaiverAvailability: "Yes – for English-taught programs with MOI",
    acceptedAcademicGaps: "Accepted with valid reason and proof",
    workExperienceProof:
      "Offer letter, experience letter, salary slips, or company letter",
    fundsRequiredForVisa:
      "Approx. €7,380 per year for living expenses + tuition fees",
    acceptableFinancialSources: "Savings, education loans, fixed deposits",
    eligibleSponsors: "Parents, siblings, relatives – up to 3 sponsors",
    minimumFamilyIncome:
      "No specific requirement; should cover tuition and living",
    visaType: "Long-stay student visa (VLS-TS)",
    visaProcessingTime: "2 – 4 weeks typically",
    partTimeWorkLimit: "964 hours/year (~20 hrs/week)",
    averagePartTimeWages: "€7 – €10 per hour",
    internshipOptions: "Available with support from universities",
    postStudyWorkOptions: "Up to 1 year job-seeking visa after graduation",
    permanentResidencyPathway:
      "Possible after 5 years of stay with integration",
    spouseDependentVisa: "Allowed for Master’s programs over 12 months",
    dependentConditions: "Separate visa and proof of funds required",
    scholarshipOpportunities: "Eiffel, Erasmus+, university scholarships",
    healthcareAccess: "Mandatory student social security or private insurance",
    climateWeather: "Temperate; cold winters and warm summers",
    culturalEnvironment:
      "Rich culture, history, and arts; French and multicultural",
    currency: "Euro (€)",
    intakes: "September (main), some in January",
    popularCities: "Paris, Lyon, Toulouse, Lille",
  },
  {
    country: "Germany",
        slug: 'germany',

    tuitionFeeRange:
      "Free at public universities for most programs; some Master’s may charge €1,500 – €5,000/year",
    livingCosts: "€850 – €1,100 per month",
    durationOfCourses:
      "Bachelor’s: 3–4 years; Master’s: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 55% – 60%; some public universities require 70%+",
    languageProficiency:
      "IELTS, TOEFL for English programs; TestDaF or DSH for German-taught programs",
    ieltsWaiverAvailability: "Yes – for English-taught programs with MOI",
    acceptedAcademicGaps:
      "Accepted with valid documentation (e.g., work or medical)",
    workExperienceProof: "Experience letter, offer letter, salary slips",
    fundsRequiredForVisa:
      "€11,208 blocked account + tuition fees if applicable",
    acceptableFinancialSources:
      "Blocked account, education loan, personal funds",
    eligibleSponsors: "Parents, siblings, close relatives (proof required)",
    minimumFamilyIncome:
      "Not mandatory; funds in blocked account must meet visa needs",
    visaType: "National visa (D) + Residence Permit",
    visaProcessingTime: "6 – 12 weeks",
    partTimeWorkLimit: "120 full days or 240 half days per year",
    averagePartTimeWages: "€10 – €15 per hour",
    internshipOptions:
      "Available – mandatory or voluntary internships supported",
    postStudyWorkOptions: "18-month job search visa",
    permanentResidencyPathway: "Possible after 5 years of stay + integration",
    spouseDependentVisa: "Allowed; spouse may work full-time",
    dependentConditions: "Separate visa application and funds proof",
    scholarshipOpportunities:
      "DAAD, Erasmus+, university-specific scholarships",
    healthcareAccess: "Mandatory – public or private insurance",
    climateWeather: "Temperate; cold winters and mild summers",
    culturalEnvironment: "Multicultural, strong academic and research focus",
    currency: "Euro (€)",
    intakes: "October (Winter), April (Summer)",
    popularCities: "Berlin, Munich, Frankfurt, Hamburg",
  },
  {
    country: "Malaysia",
        slug: 'malaysia',

    tuitionFeeRange:
      "MYR 7,000 – MYR 25,000 per year for most undergraduate and postgraduate courses",
    livingCosts:
      "MYR 1,200 – MYR 2,500 per month including accommodation, food, and transport",
    durationOfCourses:
      "Bachelor’s: 3–4 years; Master’s: 1–2 years; Ph.D.: 3–5 years",
    academicRequirements:
      "Minimum 50% in previous qualifications; top universities may require more",
    languageProficiency:
      "IELTS, TOEFL, or equivalent required for English-taught programs",
    ieltsWaiverAvailability:
      "Yes – based on MOI or if previous studies were in English",
    acceptedAcademicGaps: "Accepted with valid reasons and documentation",
    workExperienceProof:
      "Offer letter, experience certificate, payslips, or company letter",
    fundsRequiredForVisa:
      "Tuition fee + MYR 1,500 per month for living expenses",
    acceptableFinancialSources:
      "Personal savings, education loans, fixed deposits",
    eligibleSponsors: "Parents, siblings, close relatives",
    minimumFamilyIncome:
      "Not mandated; financial proof must meet visa criteria",
    visaType: "Student Pass + Visa Approval Letter (VAL)",
    visaProcessingTime: "4 – 6 weeks",
    partTimeWorkLimit: "20 hours/week during semester breaks or holidays",
    averagePartTimeWages: "MYR 5 – MYR 10 per hour",
    internshipOptions:
      "Available for selected programs with university tie-ups",
    postStudyWorkOptions:
      "Limited; possible under special employer sponsorship",
    permanentResidencyPathway: "Not common; long-term stay options limited",
    spouseDependentVisa: "Generally not allowed for student pass holders",
    dependentConditions: "Not applicable",
    scholarshipOpportunities:
      "Available from universities and Malaysian government (e.g., MTCP, MIS)",
    healthcareAccess:
      "Health insurance required through EMGS or private provider",
    climateWeather: "Tropical; hot and humid year-round",
    culturalEnvironment:
      "Multicultural with Malay, Chinese, Indian, and international communities",
    currency: "Malaysian Ringgit (MYR)",
    intakes: "February, July, and October",
    popularCities: "Kuala Lumpur, Penang, Johor Bahru",
  },
  {
    country: "Latvia",
        slug: 'latvia',

    tuitionFeeRange:
      "€1,500 – €6,000 per year depending on program and institution",
    livingCosts: "€400 – €700 per month including housing, food, and transport",
    durationOfCourses:
      "Bachelor’s: 3–4 years; Master’s: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 50% – 60%; competitive courses may need higher scores",
    languageProficiency:
      "IELTS, TOEFL, or PTE required for English-taught programs",
    ieltsWaiverAvailability: "Yes – for select universities and MOI students",
    acceptedAcademicGaps: "Accepted with valid justification",
    workExperienceProof:
      "Experience certificate, offer letter, payslips, or employer letter",
    fundsRequiredForVisa:
      "Tuition fees + approx. €5,160 per year for living expenses",
    acceptableFinancialSources: "Savings, loans, fixed deposits",
    eligibleSponsors: "Parents, siblings, legal guardians",
    minimumFamilyIncome: "Not mandated; must meet cost of living proof",
    visaType: "Long Stay Visa (D) + Temporary Residence Permit",
    visaProcessingTime: "2 – 4 weeks",
    partTimeWorkLimit: "20 hours/week during study period",
    averagePartTimeWages: "€4 – €8 per hour",
    internshipOptions: "Available through university or external organizations",
    postStudyWorkOptions: "Stay-back option available for job search",
    permanentResidencyPathway: "After 5 years of continuous legal stay",
    spouseDependentVisa: "Permitted for postgraduate students; spouse may work",
    dependentConditions: "Separate visa required; additional financial proof",
    scholarshipOpportunities:
      "University-specific and Latvian state scholarships",
    healthcareAccess: "Mandatory health insurance (public or private)",
    climateWeather: "Temperate; cold winters and mild summers",
    culturalEnvironment: "European lifestyle with a mix of local traditions",
    currency: "Euro (€)",
    intakes: "September and February",
    popularCities: "Riga, Daugavpils, Liepaja",
  },
  {
    country: "Lithuania",
        slug: 'lithuania',

    tuitionFeeRange:
      "€1,000 – €5,000 per year for Bachelor's; €2,000 – €6,000 for Master's; €2,500 – €7,000 for Ph.D.; €10,000+ for Medical programs",
    livingCosts:
      "€350 – €750 per month, including accommodation, food, transportation, and leisure",
    durationOfCourses:
      "Bachelor's: 3–4 years; Master's: 1–2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 50% in previous qualifications; competitive for top universities",
    languageProficiency: "IELTS, TOEFL, or PTE required",
    ieltsWaiverAvailability: "Yes – for select universities and programs",
    acceptedAcademicGaps: "Gaps accepted with valid justification",
    workExperienceProof:
      "Experience letter, offer letter, payslips, or company letter",
    fundsRequiredForVisa: "Tuition fees + living costs",
    acceptableFinancialSources:
      "Education loan, personal savings, fixed deposits",
    eligibleSponsors:
      "Parents, siblings, relatives, legal guardians – up to 3 allowed",
    minimumFamilyIncome:
      "Not mandated; funds should meet visa financial requirements",
    visaType: "National visa (D) + Temporary Residence Permit",
    visaProcessingTime: "Typically 1–2 weeks",
    partTimeWorkLimit:
      "20-hour weekly limit in term time; full-time allowed during holidays.",
    averagePartTimeWages: "€5 – €10 per hour",
    internshipOptions: "Available for certain courses",
    postStudyWorkOptions: "Temporary residence permit for job search",
    permanentResidencyPathway: "Available after 5 years of legal residence",
    spouseDependentVisa:
      "Allowed for postgrad courses over 12 months; spouse can work full-time",
    dependentConditions: "Separate visa application; additional funds required",
    scholarshipOpportunities: "University-specific scholarships available",
    healthcareAccess: "Students must obtain health insurance",
    climateWeather: "Temperate maritime; hot and humid year-round",
    culturalEnvironment:
      "Diverse society; Lithuanian, Polish, Russian, and other ethnic groups",
    currency: "Euro (€)",
    intakes: "Major intakes: September and February",
    popularCities: "Vilnius, Kaunas, Klaipėda",
  },
  {
    country: "Armenia",
        slug: 'armenia',

    tuitionFeeRange: "975,000 – 1,755,000 per year (Armenian Dram – AMD)",
    livingCosts: "78,000 – 156,000 per month",
    durationOfCourses:
      "Bachelor’s: 4 years; Master’s: 2 years; Ph.D.: 3–4 years",
    academicRequirements:
      "Minimum 50% in previous qualifications; higher for competitive programs",
    languageProficiency:
      "IELTS/TOEFL not always required; English-taught programs available",
    ieltsWaiverAvailability:
      "Yes – based on Medium of Instruction (MOI) or university discretion",
    acceptedAcademicGaps: "Accepted with valid documents and reason",
    workExperienceProof: "Required only for specific PG courses",
    fundsRequiredForVisa: "Tuition + approx. 1,300,000 – 1,700,000",
    acceptableFinancialSources: "Personal funds, bank statements, loans",
    eligibleSponsors: "Parents, legal guardians, siblings",
    minimumFamilyIncome: "Not fixed; proof of ability to fund required",
    visaType: "Student Visa",
    visaProcessingTime: "2–4 weeks",
    partTimeWorkLimit: "Limited; work is not guaranteed",
    averagePartTimeWages: "1,000 – 2,000 per hour",
    internshipOptions: "Available in select programs",
    postStudyWorkOptions: "Limited; most pursue higher studies or return home",
    permanentResidencyPathway: "Not available through education",
    spouseDependentVisa: "Generally not permitted",
    dependentConditions: "Not applicable",
    scholarshipOpportunities: "University-based, merit-based",
    healthcareAccess: "Private insurance advised",
    climateWeather: "Cold winters, hot summers",
    culturalEnvironment: "Safe, welcoming, European–Asian blend",
    currency: "Armenian Dram (֏)",
    intakes: "September (primary), some in February",
    popularCities: "Yerevan, Gyumri",
  },
  {
    country: "Georgia",
        slug: 'georgia',

    tuitionFeeRange: "₾8,100 – ₾16,200 per year (Georgian Lari – GEL)",
    livingCosts: "₾675 – ₾1,350 per month",
    durationOfCourses:
      "Bachelor’s: 4 years; Master’s: 2 years; Ph.D.: 3–4 years",
    academicRequirements: "50% – 60% in previous education",
    languageProficiency:
      "IELTS/TOEFL often waived; English-taught programs widely available",
    ieltsWaiverAvailability: "Yes – based on MOI or university rules",
    acceptedAcademicGaps: "Accepted with justification",
    workExperienceProof: "Required for certain master’s programs",
    fundsRequiredForVisa:
      "Tuition + approx. ₾10,000 for living and initial expenses",
    acceptableFinancialSources: "Savings, education loans, sponsorship",
    eligibleSponsors: "Parents, relatives, legal guardians",
    minimumFamilyIncome: "Not fixed; must meet cost of study/living",
    visaType: "Student Temporary Residence",
    visaProcessingTime: "2–3 weeks",
    partTimeWorkLimit: "Permitted with limitations",
    averagePartTimeWages: "₾8 – ₾12 per hour",
    internshipOptions: "Available in selected programs",
    postStudyWorkOptions: "Limited within Georgia; options abroad better",
    permanentResidencyPathway: "Requires employment and long-term residence",
    spouseDependentVisa: "Not offered for student visa holders",
    dependentConditions: "Not applicable",
    scholarshipOpportunities: "Offered by government and private institutions",
    healthcareAccess: "Private insurance recommended",
    climateWeather: "Mild summers, cold winters, scenic regions",
    culturalEnvironment: "European lifestyle, safe and welcoming",
    currency: "Georgian Lari (₾)",
    intakes: "March and September",
    popularCities: "Tbilisi, Batumi, Kutaisi",
  },
  {
    country: "Uzbekistan",
        slug: 'uzbekistan',

    tuitionFeeRange:
      "сўм25,000,000 – сўм45,000,000 per year (Uzbekistani Som – UZS)",
    livingCosts: "сўм1,250,000 – сўм2,500,000 per month",
    durationOfCourses:
      "Bachelor’s: 4 years; Master’s: 2 years; Ph.D.: 3–4 years",
    academicRequirements: "50%+ in previous education",
    languageProficiency:
      "English-medium programs; no IELTS required in many cases",
    ieltsWaiverAvailability: "Yes – MOI or university-based",
    acceptedAcademicGaps: "Accepted with valid documentation",
    workExperienceProof: "Needed for select PG programs",
    fundsRequiredForVisa:
      "Tuition + approx. сўм20,000,000 for living and travel",
    acceptableFinancialSources: "Personal/family funds, education loan",
    eligibleSponsors: "Parents, legal guardians",
    minimumFamilyIncome: "Not mandatory; fund proof essential",
    visaType: "Student Visa",
    visaProcessingTime: "3–4 weeks",
    partTimeWorkLimit: "Very limited; informal jobs only",
    averagePartTimeWages:
      "сўм5,000 – сўм10,000 per hour (varies by job and region)",
    internshipOptions: "Available in a few universities",
    postStudyWorkOptions:
      "Limited opportunities; students often pursue further studies abroad",
    permanentResidencyPathway: "Not available through education",
    spouseDependentVisa: "Not available for student applicants",
    dependentConditions: "Not applicable",
    scholarshipOpportunities:
      "Some merit-based and institutional scholarships available",
    healthcareAccess: "Private insurance strongly recommended",
    climateWeather: "Hot summers, cold winters, low humidity",
    culturalEnvironment:
      "Hospitable, with deep historical roots and growing international student base",
    currency: "Uzbekistani Som (сўм)",
    intakes: "Main intake: September",
    popularCities: "Tashkent, Samarkand, Bukhara",
  },
  {
  country: "Poland",
      slug: 'poland',

  tuitionFeeRange: "PLN 9,000 – PLN 45,000 per year",
  livingCosts: "PLN 20,000 – PLN 35,000 per year",
  durationOfCourses: "Undergraduate: 3–4 years; Postgraduate: 1–2 years",
  academicRequirements: "Minimum 60% in previous qualifications; program-specific requirements may apply",
  languageProficiency: "IELTS, TOEFL, or equivalent English proficiency test required",
  ieltsWaiverAvailability: "Yes – possible for students with prior education in English or from select countries",
  acceptedAcademicGaps: "Gaps accepted with valid justification; ideally under 3–5 years",
  workExperienceProof: "Experience letter, Offer letter, Payslips, or Company letter (if applicable)",
  fundsRequiredForVisa: "Tuition fees + minimum PLN 38,000 for living expenses",
  acceptableFinancialSources: "Education Loan, Personal Savings, Sponsor's bank statements",
  eligibleSponsors: "Parents, Siblings, Relatives, Legal Guardians – up to 3 allowed",
  minimumFamilyIncome: "Not specifically required; must meet visa financial requirements",
  visaType: "National Type D Student Visa",
  visaProcessingTime: "Usually 15–30 working days",
  partTimeWorkLimit: "20 hours per week during term; full-time allowed during holidays",
  averagePartTimeWages: "PLN 20 – PLN 30 per hour based on job role and location",
  internshipOptions: "Available through university programs and Erasmus+",
  postStudyWorkOptions: "Graduates can apply for a temporary residence permit to seek employment",
  permanentResidencyPathway: "Possible after 5 years of legal stay and employment",
  spouseDependentVisa: "Allowed; spouse may work with appropriate permit",
  dependentConditions: "Separate visa application; additional financial proof required",
  scholarshipOpportunities: "NAWA Scholarships, Erasmus+, University-specific scholarships",
  healthcareAccess: "Private health insurance required; EU citizens can use EHIC",
  climateWeather: "Warm summers (20–30°C); cold winters (−5°C to −20°C); varies by region",
  culturalEnvironment: "Historically rich, diverse, and student-friendly",
  currency: "Polish Złoty (PLN)",
  intakes: "Major intakes: September and February",
  popularCities: "Warsaw, Kraków, Wrocław, Gdańsk, Poznań"
},
{
  country: "Sweden",
      slug: 'sweden',

  tuitionFeeRange: "SEK 80,000 – 295,000 per year for non‑EU/EEA students; EU/EEA students free",
  livingCosts: "SEK 96,000 – 162,000 per year (≈ SEK 8,000–13,500/month)",
  durationOfCourses: "Undergraduate: 3 years; Postgraduate: 1–2 years",
  academicRequirements: "Usually ≥ 55 % (GPA convert equivalent) + relevant background",
  languageProficiency: "IELTS, TOEFL, or Swedish + English sufficient for English‐taught programs",
  ieltsWaiverAvailability: "Rare; university-specific case-by-case",
  acceptedAcademicGaps: "Accepted with explanation; typically < 3 years",
  workExperienceProof: "Occasionally requested, especially for specialized MSc",
  fundsRequiredForVisa: "Show approx. SEK 10,584/month × 12 months ≈ SEK 127,000",
  acceptableFinancialSources: "Bank statements, loan/savings, scholarship letters",
  eligibleSponsors: "Parents, relatives; up to three listed",
  minimumFamilyIncome: "Not mandated; funds must meet monthly requirement",
  visaType: "Swedish residence permit for studies",
  visaProcessingTime: "~2–3 weeks after application submission",
  partTimeWorkLimit: "No fixed limit—but must not affect studies",
  averagePartTimeWages: "Typically SEK 120–150/hour",
  internshipOptions: "Often available via university/co‑op programs",
  postStudyWorkOptions: "Up to 1 year permit after studies if employed; can extend as needed",
  permanentResidencyPathway: "After 5 years with continuous legal residence",
  spouseDependentVisa: "Allowed; spouse may work full-time",
  dependentConditions: "Separate application; show additional funds",
  scholarshipOpportunities: "Swedish Institute & university-specific scholarships",
  healthcareAccess: "Private insurance required; free after permit and registration after ~1 year",
  climateWeather: "Cold winters, mild summers; variation by north/south",
  culturalEnvironment: "Inclusive, high quality of life, active student initiatives",
  currency: "Swedish Krona (SEK)",
  intakes: "Mostly August/September; some January/February",
  popularCities: "Stockholm, Lund, Uppsala, Gothenburg (Gothenburg, Lund etc.)"
},
{
  country: "Malta",
      slug: 'malta',

  tuitionFeeRange: "€6,000 – €12,000 per year (public/private non‑EU)",
  livingCosts: "€700 – 1,200 per month (≈ €8,400–14,400/year)",
  durationOfCourses: "Undergraduate: 3–4 years; Postgraduate: 1–2 years",
  academicRequirements: "Minimum 55–60 % plus program‑specific entry tests",
  languageProficiency: "IELTS/TOEFL in most English-taught programs",
  ieltsWaiverAvailability: "Rare; some EU cases or prior study in English medium",
  acceptedAcademicGaps: "Acceptable if justified; typically ≤ 3 years",
  workExperienceProof: "For postgraduate professional programs (e.g. health)",
  fundsRequiredForVisa: "Tuition + first year living costs (~€8,400+)",
  acceptableFinancialSources: "Personal savings, loan, sponsor documents",
  eligibleSponsors: "Parents, relatives, legal guardians",
  minimumFamilyIncome: "Not mandated but adequate funds required",
  visaType: "National long-stay student visa (type D)",
  visaProcessingTime: "~15–30 working days",
  partTimeWorkLimit: "Up to 20 hours/week during term",
  averagePartTimeWages: "€5–7/hour typical for hospitality/retail",
  internshipOptions: "Available in hospitality, tourism, healthcare courses",
  postStudyWorkOptions: "One-year permit to stay and work after graduation",
  permanentResidencyPathway: "After long-term legal stay + employment",
  spouseDependentVisa: "Possible for full-degree programs >12 months",
  dependentConditions: "Additional funds proof required",
  scholarshipOpportunities: "University and government scholarships available",
  healthcareAccess: "Private health insurance (~€300‑600/year) required",
  climateWeather: "Mediterranean: hot summers, mild winters",
  culturalEnvironment: "English-speaking, multicultural student base",
  currency: "Euro (€)",
  intakes: "September, sometimes January/February",
  popularCities: "Valletta, Sliema, St. Julian’s"
},
{
  country: "Netherlands",
      slug: 'netherlands',

  tuitionFeeRange: "Public: €6,000–15,000 (Bachelor), €8,000–20,000 (Master) for non‑EU",
  livingCosts: "€10,000–15,000/year (approx. €800–1,250/month)",
  durationOfCourses: "Undergraduate: 3 years; Postgraduate: 1–2 years",
  academicRequirements: "≥ 60 % or equivalent; additional tests possible",
  languageProficiency: "IELTS/TOEFL mandatory for English-taught programs",
  ieltsWaiverAvailability: "Uncommon; some conditional on prior study in English",
  acceptedAcademicGaps: "Gaps permitted with justification (e.g., employment, travel)",
  workExperienceProof: "Occasionally asked for MBA or technical postgraduate",
  fundsRequiredForVisa: "Tuition + living costs for first year",
  acceptableFinancialSources: "Education loan, sponsor bank statements",
  eligibleSponsors: "Parents or legal guardians",
  minimumFamilyIncome: "Not mandated; sufficient proof required",
  visaType: "Dutch MVV/residence permit for study",
  visaProcessingTime: "~4–12 weeks depending on embassy",
  partTimeWorkLimit: "16 hours/week or full-time during holidays",
  averagePartTimeWages: "€12–15/hour depending on sector",
  internshipOptions: "Strong via university-industry links",
  postStudyWorkOptions: "One‑year orientation year residence permit post-graduation",
  permanentResidencyPathway: "After 5 years legal residence and work",
  spouseDependentVisa: "Allowed; spouse may work full-time",
  dependentConditions: "Separate documentation + funds required",
  scholarshipOpportunities: "Government (e.g., Orange Tulip), university‑based",
  healthcareAccess: "Mandatory health insurance (~€90–110/month) if working/long stay",
  climateWeather: "Mild maritime climate; rainy winters and mild summers",
  culturalEnvironment: "International student‑friendly, English proficiency high",
  currency: "Euro (€)",
  intakes: "September/October and sometimes February",
  popularCities: "Amsterdam, Rotterdam, Utrecht, Groningen, Maastricht"
},
{
  country: "Finland",
      slug: 'finland',

  tuitionFeeRange: "€8,000–20,000/year for non‑EU student programs; doctoral free",
  livingCosts: "€9,600–12,000/year (~€800–1,000/month); inclusive living cost estimate €700–1,500/month",
  durationOfCourses: "Undergraduate: 3–4 years; Postgraduate: 1–2 years",
  academicRequirements: "Min. ~55–60 %, program-specific criteria",
  languageProficiency: "IELTS, TOEFL required for English‑taught programs",
  ieltsWaiverAvailability: "Rare; occasionally for prior English-medium degrees",
  acceptedAcademicGaps: "Gaps accepted with valid justification",
  workExperienceProof: "May be requested for professional or vocational degrees",
  fundsRequiredForVisa: "Living cost proof of ~€9,600/year, plus tuition",
  acceptableFinancialSources: "Bank savings, loan, scholarship award letters",
  eligibleSponsors: "Parents, relatives, legal guardians",
  minimumFamilyIncome: "Not mandated; sufficient proof required",
  visaType: "Finland residence permit for studies (type D)",
  visaProcessingTime: "~4–12 weeks depending on application completeness",
  partTimeWorkLimit: "Non‑EU/EEA students: up to 25 hrs/week; full-time holidays",
  averagePartTimeWages: "€10–15/hour depending on region and job",
  internshipOptions: "Available via universities; limited without Finnish",
  postStudyWorkOptions: "After studies can apply for residence permit extension for employment",
  permanentResidencyPathway: "After 4 years of continuous residence and work",
  spouseDependentVisa: "Allowed; spouse may apply to work",
  dependentConditions: "Additional financial proof, separate application",
  scholarshipOpportunities: "Finland Scholarships and university-specific grants",
  healthcareAccess: "Must have valid health insurance; after one year, public healthcare may apply",
  climateWeather: "Cold winters, mild summers; variation by region",
  culturalEnvironment: "High quality, safe, international student friendly",
  currency: "Euro (€)",
  intakes: "August/September & sometimes January",
  popularCities: "Helsinki, Tampere, Turku, Oulu"
}
];
