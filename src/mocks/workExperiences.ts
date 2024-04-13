type workExperiencesType = {
  workPlace: string;
  workLink: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  isOngoing: boolean;
  jobdesks: Array<string>;
}

const workExperiences: workExperiencesType[] = [
  {
    workPlace: 'Fastwork',
    workLink: 'https://fastwork.id/user/acep179',
    position: 'Freelancer Web Developer',
    startDate: 'March 2024',
    endDate: null,
    isOngoing: true,
    jobdesks: [
      'Understanding client needs.',
      'Create websites according to client needs in both frontend and backend.',
      'Developing new features.',
      'Using various technologies and programming languages.',
      'And other related task.'
    ]
  },
  {
    workPlace: 'PT. Integrasi Logistik Cipta Solusi (ILCS)',
    workLink: 'https://www.ilcs.co.id/',
    position: 'Fullstack Web Developer',
    startDate: 'October 2022',
    endDate: null,
    isOngoing: true,
    jobdesks: [
      ' Developing new features for the Praya application, a product of PT Integrasi Logistik Cipta Solusi (ILCS), which includes ship, container, and non-container services.',
      'Contributing to development in both frontend and backend.',
      'Investigating and resolving bugs, ensuring thorough testing before release.'
    ]
  },
]

export default workExperiences