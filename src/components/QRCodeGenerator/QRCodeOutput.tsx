import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QRCodeOutputProps {
  qrCodeUrl: string;
}

export function QRCodeOutput({ qrCodeUrl }: QRCodeOutputProps) {
  return (
    <Card>
      <CardContent className="p-6">
        {qrCodeUrl ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center text-foreground">Generated QR Code</h2>
            <div className="flex justify-center">
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="max-w-full h-auto border-4 border-primary rounded-lg shadow-lg"
              />
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-foreground">QR Code Preview</h2>
            <div className="border-2 border-dashed border-input rounded-lg p-8">
              <p className="text-muted-foreground">Select options and generate your QR code</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}