import { useState } from 'react'
import { QRCodeInputForm } from './components/QRCodeGenerator/QRCodeInputForm'
import { QRCodeOutput } from './components/QRCodeGenerator/QRCodeOutput'
import axios from 'axios'

function App() {
  const [qrType, setQrType] = useState('url')
  const [inputData, setInputData] = useState<Record<string, string>>({})
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const handleQrTypeChange = (type: string) => {
    setQrType(type)
    setInputData({})
    setQrCodeUrl('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
  }

  const generateQrCode = async () => {
    try {
      const response = await axios.post(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(JSON.stringify(inputData))}&size=200x200`)
      setQrCodeUrl(response.config.url || '')
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">QR Code Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <QRCodeInputForm
              qrType={qrType}
              handleQrTypeChange={handleQrTypeChange}
              inputData={inputData}
              handleInputChange={handleInputChange}
              generateQrCode={generateQrCode}
            />
          </div>
          
          <div>
            <QRCodeOutput qrCodeUrl={qrCodeUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App