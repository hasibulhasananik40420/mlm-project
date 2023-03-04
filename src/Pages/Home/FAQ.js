import React, { useEffect, useState } from 'react';
import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion';

const FAQ = () => {
    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('FAQ.json')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])
    return (
        <div className='bg-gray-50 '>
            <div className='pt-12 mb-24 container mx-auto  p-4'>
                <div className='grid lg:grid-cols-2 py-10'>
                    <div className='pl-2 grid items-center'>
                        <div>
                            <img src="https://learnwithsumit.com/_next/static/media/faq.8116aa7d.svg" alt="" />
                            <h2 className="lg:text-5xl text-2xl font-bold">Frequently Asked Questions </h2>

                            <p className='text xl mt-3'>
                                Everything you need to know to get started.
                            </p>
                        </div>
                    </div>
                    {/* Accordion */}
                    <div className='overflow-y-scroll max-h-[450px] pl-2 csbar'>
                        {
                            faqs?.map(faq => <FaqAccordion key={faq.id} data={faq} />)
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;