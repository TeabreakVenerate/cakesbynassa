export interface DeliveryZone {
  name: string;
  fee: number;
}

export const deliveryZones: DeliveryZone[] = [
  { name: 'Airport Road', fee: 800 },
  { name: 'GRA', fee: 1000 },
  { name: 'Sapele Road', fee: 1200 },
  { name: 'Ugbowo / UNIBEN', fee: 1800 },
  { name: 'Ikpoba Hill', fee: 2200 }
];
