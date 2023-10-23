import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrier-details',
  templateUrl: './carrier-details.component.html',
  styleUrls: ['./carrier-details.component.css']
})
export class CarrierDetailsComponent implements OnInit{
  carrierName: string | null = null;
  editableValue: number = 0;
  isEditingProfile: boolean = false;
  isEditingAccess: boolean = false;

  accessorialCharges: { name: string; value: number}[] = [
    { name: 'Chassis', value: 45},
    { name: 'Chassis Rental Min', value: 2},
    { name: 'Storage', value: 50},
    { name: 'Tri-Axle', value: 50},
    { name: 'Tri-Axle Rental Min', value: 50},
    { name: 'Chassis Split', value: 50},
    { name: 'Port Congestion', value: 50},
    { name: 'Tolls', value: 50},
    { name: 'Detention', value: 50},
    { name: 'Detention Free Hours', value: 2},
    { name: 'Layover', value: 100},
    { name: 'Haz', value: 100},
    { name: 'Ow', value: 100},
    { name: 'Reefer', value: 100},
    { name: 'Scale Ticket', value: 100}
  ];

profileData: { name: string; value: string }[] = [
  { name: 'MC', value: 'MC123' },
  { name: 'Power Unit Count', value: '25' },
  { name: 'Ports Serviced', value: 'USLAX, USBAL' },
  { name: 'Warehousing', value: 'Yes '},
  { name: 'Transload', value: 'No'},
  { name: 'Haz Permit', value: 'Yes'},
  { name: 'Overweight Permit', value: 'No'},
  { name: 'Liquor License', value: 'Yes'},
  { name: 'Refrigerated', value: 'No'}
];


carrierDetails: { [key: string]: string } = {
  'Big Rig': 'Detailed description of Big Rig carrier', 
  'Dragonfly': 'Detailed description of Dragonfly carrier',
  'Kev Logistics': 'Detailed description of Kev Logistics',
  'Scorpion Transportation': 'Based in Baltimore'
};

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  this.carrierName = this.route.snapshot.paramMap.get('name');
}

getCarrierDescription(): string {
  if (this.carrierName && this.carrierDetails.hasOwnProperty(this.carrierName)) {
    return this.carrierDetails[this.carrierName];
  }
  return 'No carrier details available.';
}



toggleEditingProfile(): void {
  this.isEditingProfile = !this.isEditingProfile;
}

toggleEditingAccess(): void {
  this.isEditingAccess = !this.isEditingAccess;
}

onValueChange(value: number): void {
  this.editableValue
}
onInput(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.editableValue = parseInt(element.textContent || element.innerText, 10);

}
saveChangesProfile(): void {
  console.log('Saving changes: ', this.editableValue);
  this.isEditingProfile = !this.isEditingProfile;
  
}
saveChangesAccess(): void {
  console.log('Saving changes: ', this.editableValue);
  this.isEditingAccess = !this.isEditingAccess;
}
}
