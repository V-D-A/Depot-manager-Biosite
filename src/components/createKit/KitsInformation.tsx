'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
import { ChevronDown } from 'lucide-react';

interface Kit {
  kitArm: string;
  selectedKit: string;
  quantity: number;
}

export const KitsInformation: React.FC = () => {
  const [sendingReason, setSendingReason] = useState('');
  const [selectedSite, setSelectedSite] = useState('Site 3');
  console.log(setSelectedSite);
  const [kits, setKits] = useState<Kit[]>([
    { kitArm: 'Treatment Kit', selectedKit: 'Kit 5 (200)', quantity: 30 },
  ]);

  const handleAddKit = () => {
    setKits([
      ...kits,
      { kitArm: 'Treatment Kit', selectedKit: 'Kit 5 (200)', quantity: 30 },
    ]);
  };

  const handleKitChange = (index: number, key: keyof Kit, value: string | number) => {
    const updatedKits = [...kits];
    updatedKits[index][key] = value as never;
    setKits(updatedKits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ sendingReason, selectedSite, kits });
    // handle actual form submission here
  };

  return (
    <div className='p-6 px-9'>
        <h1 className='font-bold text-2xl my-3 mb-5'>Send Kits</h1>
        <div>
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="text-green-600 mr-2">
          <ChevronDown className="rotate-180" size={24} />
        </div>
        <h2 className="text-xl font-semibold">Kits Information</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sending Reason</label>
          <Input 
            placeholder="Enter Sending Reason" 
            value={sendingReason}
            onChange={(e) => setSendingReason(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Choose Site</label>
          <Input 
            value={selectedSite} 
            readOnly 
            className="bg-gray-100 cursor-not-allowed" 
          />
        </div>

        {kits.map((kit, index) => (
          <div key={index} className="border rounded-md p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kit ARM</label>
              <Input 
                value={kit.kitArm} 
                readOnly 
                className="bg-gray-100 cursor-not-allowed" 
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Kits</label>
                <Select 
                  value={kit.selectedKit}
                  onValueChange={(value) => handleKitChange(index, 'selectedKit', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Kit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kit 5 (200)">Kit 5 (200)</SelectItem>
                    {/* You can add more kits here */}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <Input 
                  type="number" 
                  value={kit.quantity} 
                  onChange={(e) => handleKitChange(index, 'quantity', +e.target.value)} 
                />
              </div>
            </div>
          </div>
        ))}

        <Button 
          type="button" 
          variant="secondary" 
          className="w-fit bg-gray-400 hover:bg-gray-500"
          onClick={handleAddKit}
        >
          Add Kit
        </Button>

        <div className="pt-6 flex justify-center">
          <Button type="submit" className="px-8 bg-[#6c63ff] hover:bg-[#5848ec]">
            Submit
          </Button>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
};
