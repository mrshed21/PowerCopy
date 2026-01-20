import SePowerComponent from '@/components/services/SePowerComponent'
import ServiceCard from '@/components/services/ServiceCard'
import React from 'react'

export default function Services() {
    const buttons = [
        'Vanliga frågor',
        'MyPOWER',
        'Leverans och tilläggstjänster',
        'Ångrat köp och retur',
        'Service och reklamation',
        'Tillgänglighetsinformation',
    ]
    const services = [
        {
            title: '60 DAGARS ÖPPET KÖP',
            description: 'På POWER har du 60 dagars öppet köp. Så att du kan känna dig trygg med att kunna lämna tillbaka produkten om du skulle ångra dig.',
            action: 'Läs mer'
        },
        {
            title: 'HÖRT OM POWER SUPPORT?',
            description: 'Vi hjälper dig med delbetalning, trygghetsavtal, förlängd garanti, installation, uppgradering samt förbättring av enheter och mer.',
            action: 'Läs mer'
        }
    ]
    return (
        <div className=' w-full max-w-6xl mx-auto'>
            <div className='p-4 '>

                <h2 className='text-2xl font-bold '>Kundservice</h2>
                <div>
                    {buttons.map((button, index) => (
                        <button className='py-2 px-4 cursor-pointer hover:text-yellow-600 hover:shadow-lg hover:shadow-yellow-600/20 transition-all duration-200 rounded border border-gray-300 m-2 hover:scale-105' key={index}>{button}</button>
                    ))}
                </div>
                <SePowerComponent />
                <div className='flex flex-wrap gap-4 justify-center'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} action={service.action} />
                    ))}
                </div>
            </div>


        </div>
    )
}
