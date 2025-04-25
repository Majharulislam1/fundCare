import React from 'react';

const Faq_section = () => {
    return (
        <div className='sm:w-4/5 md:w-2/4 lg:w-2/4 mx-auto py-10'>
            <div className="text-center">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-secondary mb-4">FAQ</h1>
                <p className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto text-paragraph">Got questions? We’ve got answers! Find everything you need to know about Fundcare below. If you still have questions </p>
            </div>

            <div className="join join-vertical w-full py-5">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is Fundcare?</div>
                    <div className="collapse-content">
                        <p>Fundcare is a crowdfunding platform that helps individuals and organizations raise funds for important causes like medical needs, education, emergencies, and community projects.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Who can start a fundraiser on Fundcare?</div>
                    <div className="collapse-content">
                        <p>Anyone in need of financial support for a cause can start a fundraiser, whether you're an individual, nonprofit, or business.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How do I start a fundraiser?</div>
                    <div className="collapse-content">
                        <p>Sign up, create a campaign with a clear goal, and share it with your network to start receiving donations.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Is there a fee to start a fundraiser?</div>
                    <div className="collapse-content">
                        <p>Fundcare does not charge a fee to start a campaign, but a small platform/transaction fee applies to each donation.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How do I withdraw my funds?</div>
                    <div className="collapse-content">
                        <p>Once your fundraiser reaches a certain amount, you can request a withdrawal, which is processed securely to your linked bank account or mobile wallet.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Are donations tax-deductible?</div>
                    <div className="collapse-content">
                        <p>This depends on the campaign type and your country’s tax laws. Please consult a tax professional.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Faq_section;