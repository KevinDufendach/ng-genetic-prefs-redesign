import {Component, OnInit} from '@angular/core';
import {Condition, Organ} from '../model/condition';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
];

const CONDITION_DATA: Condition[] = [
  {
    id: 'TS',
    return_phenotype: 'Tuberous sclerosis',
    condition: 'Tuberous sclerosis',
    organs: [
      Organ.TUMOR
    ],
    description: 'Tumors can develop in brain, eyes, heart, kidney, skin and lungs. Some people may have seizures, developmental delay and intellectual disability',
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

@Component({
  selector: 'app-preventability',
  templateUrl: './preventability.component.html',
  styleUrls: ['./preventability.component.scss']
})
export class PreventabilityComponent implements OnInit {
  preventabilitySelection = -1;
  displayedColumns: string[] = ['preventable', 'name'];
  dataSource = CONDITION_DATA;

  constructor() { }

  ngOnInit() {
  }

}
