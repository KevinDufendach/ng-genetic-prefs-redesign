
export enum Organ {
  ADRENAL,
  VESSEL,
  JOINT,
  BONE,
  BRAIN,
  NERVE,
  CANCER,
  GI,
  COLON,
  EYE,
  HEART,
  KIDNEY,
  IMMUNE,
  PAIN,
  PANCREAS,
  LUNG,
  LIVER,
  MUSCLE,
  STOMACH,
  TUMOR,
  MEDICINE,
  VASDEFERENS,
  METABOLIC,
  MULTIPLE
}

export interface Condition {
  id: string;
  return_phenotype: string;
  condition: string;
  organs: Organ[];
  description: string;
  preventable: boolean;
  treatable: boolean;
  adult_onset: boolean;
  developmental?: boolean;
  degenerative?: boolean;
  carrier: {
    value: boolean,
    label: string
  };
  genes?: string;
  caw_approved?: string;
  snv_references?: string;
  sorted_by?: Organ;
}

export const CONDITION_DATA: Condition[] = [
  {
    id: 'TS',
    return_phenotype: 'Tuberous sclerosis',
    condition: 'Tuberous sclerosis',
    organs: [
      Organ.TUMOR
    ],
    description: `Tumors can develop in brain, eyes, heart, kidney, skin and lungs. Some people may have seizures,
                  developmental delay and intellectual disability`,
    preventable: false,
    treatable: true,
    adult_onset: false,
    developmental: false,
    degenerative: false,
    carrier: {
      value: false,
      label: ''
    },
    genes: 'TSC1, TSC2, ',
    caw_approved: 'N/A',
    snv_references: '',
    sorted_by: Organ.MULTIPLE
  },
  {
    id: 'PPHN',
    return_phenotype: 'Primary pulmonary hypertension',
    condition: 'Primary pulmonary hypertension',
    organs: [
      Organ.LUNG
    ],
    description: 'High blood pressure in the large vessels in the lungs that can lead to heart failure',
    preventable: false,
    treatable: true,
    adult_onset: false,
    developmental: false,
    degenerative: false,
    carrier: {
      value: false,
      label: ''
    },
    genes: '*BMPR2',
    caw_approved: 'N/A',
    snv_references: '',
    sorted_by: Organ.LUNG
  },
  {
    id: 'FVLT',
    return_phenotype: 'Factor 5 Leiden thrombophilia',
    condition: 'Factor 5 Leiden thrombophilia',
    organs: [
      Organ.VESSEL
    ],
    description: 'Increased risk of forming abnormal blood clots in deep veins (usually legs). Risk is further increased during pregnancy or when taking oral contraceptive pills or estrogen replacement therapy ',
    preventable: true,
    treatable: true,
    adult_onset: false,
    developmental: false,
    degenerative: false,
    carrier: {
      value: false,
      label: ''
    },
    genes: 'N/A',
    caw_approved: 'FVL rs6025, c.1601G>A homozygous only',
    snv_references: 'https://ghr.nlm.nih.gov/condition/factor-v-leiden-thrombophilia#; http://www.ncbi.nlm.nih.gov/books/NBK1368/; http://circ.ahajournals.org/content/107/15/e94.full',
    sorted_by: Organ.VESSEL
  },
];
