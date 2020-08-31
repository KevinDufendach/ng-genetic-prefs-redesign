export enum Override {
  Default = 0,
  Include = 1,
  Exclude = 2
}

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

export interface Condition2 {
  id: string;
  genes: string | null;
  carrierPanel: string | null;
  inheritance: string;
  kalia_conditions: string;
  condition: string;
  description: string;
  preventableText: string;
  preventable: boolean;
  treatableText: string;
  treatable: boolean;
  adultOnsetText: string;
  adultOnset: boolean;
  carrierText: string;
  carrier: boolean;
  resource_link: string;
  override?: Override;
}
