export interface SelectionsBoolean {
  treatability: boolean;
  preventability: boolean;
  adultOnset: boolean;
  carrierStatus: boolean;
}

export class Selections {
  constructor(
    public treatability: number = -1,
    public preventability: number = -1,
    public adultOnset: number = -1,
    public carrierStatus: number = -1,
  ) { }

  asBoolean(): SelectionsBoolean {
    return {
      treatability: this.treatability === 1,
      preventability: this.preventability === 1,
      adultOnset: this.adultOnset === 1,
      carrierStatus: this.carrierStatus === 1,
    };
  }
}
