import React from 'react';
import { User, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface InputData {
  [key: string]: string;
}

interface QRCodeInputFormProps {
  qrType: string;
  handleQrTypeChange: (type: string) => void;
  inputData: InputData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  generateQrCode: () => void;
}

const qrTypes = [
  { value: 'url', label: 'URL', icon: '🌐' },
  { value: 'contact', label: 'vCard', icon: '👤' },
  { value: 'text', label: 'Text', icon: '📝' },
  { value: 'email', label: 'E-mail', icon: '📧' },
  { value: 'sms', label: 'SMS', icon: '📱' },
  { value: 'wifi', label: 'Wi-Fi', icon: '📶' }
];

export function QRCodeInputForm({ qrType, handleQrTypeChange, inputData, handleInputChange, generateQrCode }: QRCodeInputFormProps) {
  const renderInputFields = () => {
    switch (qrType) {
      case 'url':
        return (
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="form-group">
                  <label className="text-sm font-medium text-foreground">URL:</label>
                  <input
                    type="text"
                    name="url"
                    value={inputData.url || ''}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      case 'contact':
        return (
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Personal Details</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={inputData.firstName || ''}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={inputData.lastName || ''}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={inputData.phone || ''}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={inputData.email || ''}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return <div className="text-muted-foreground">Please select a QR code type.</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {qrTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => handleQrTypeChange(type.value)}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
              qrType === type.value
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <span className="mr-2">{type.icon}</span>
            <span>{type.label}</span>
          </button>
        ))}
      </div>

      {renderInputFields()}

      <button
        onClick={generateQrCode}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
      >
        Generate QR Code
      </button>
    </div>
  );
}