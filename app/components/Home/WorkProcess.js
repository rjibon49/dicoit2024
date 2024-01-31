import React from 'react';

const workProcess = [
    {
        id: "01",
        title: "Strategic Start",
        details: "Initiate projects with a strategic kick-off meeting to align with client objectives and expectations.",
    },
    {
        id: "02",
        title: "Research & Ideation",
        details: "Conduct in-depth research and engage in collaborative brainstorming.",
    },
    {
        id: "03",
        title: "wireframing & Prototyping",
        details: "Transform ideas into tangible concepts and prototypes.",
    },
    {
        id: "04",
        title: "User-Centric Design",
        details: "Prioritize UI/UX design and iterate based on user feedback.",
    },
    {
        id: "05",
        title: "Client Collaboration & Deployment",
        details: "Maintain open communication, gather feedback, and deploy the solution.",
    },
    {
        id: "06",
        title: "Post-Launch Support",
        details: "Provide ongoing support, monitor performance, and optimize for sustained success.",
    },
]

const WorkProcess = () => {
    return (
        <>
            <div className='bg-white'>
                <div className='container mx-auto'>
                    <div className="lg:w-2/3 w-full mb-16 mx-2">
                        <p className="text-bColor text-xl font-semibold">Work Process</p>
                        <p className="mb-5 text-bColor text-xl64 font-bold"> Innovate. Collaborate. Succeed.</p>
                        <p className="text-bColor text-xl">
                        At DicoIT, our work process is a strategic journey where innovation meets collaboration. We navigate seamlessly from ideation to implementation, ensuring a dynamic and effective approach to every project.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-darkBlack flex items-center py-28'>
                <div className='container mx-auto'>
                    <div className='flex workHeight flex-wrap w-full mx-2'>
                        <div className='flex flex-col justify-start text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <div className='mx-auto p-5 processBorderF ' >
                                <p className='text-white text-2xl font-semibold mb-16'>Strategic Start</p>
                                <p className='text-white text-6xl colorText bg-tPurple w-48 h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>01</p>
                            </div>
                            <p className='text-white text-lg'>Initiate projects with a strategic kick-off meeting to align with client objectives and expectations.</p>
                        </div>

                        <div className='flex flex-col justify-end text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <p className='text-white text-lg'>Conduct in-depth research and engage in collaborative brainstorming.</p>
                            <div className='mx-auto p-5 processBorderR ' >
                            <p className='text-white text-6xl colorText bg-tPurple w-48 h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>02</p>
                                <p className='text-white text-2xl font-semibold mt-16'>Research & Ideation</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-start text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <div className='mx-auto p-5 processBorderF ' >
                                <p className='text-white text-2xl font-semibold mb-16'>wireframing & Prototyping</p>
                                <p className='text-white text-6xl colorText bg-tPurple w-48 h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>03</p>
                            </div>
                            <p className='text-white text-lg'>Transform ideas into tangible concepts and prototypes.</p>
                        </div>

                        <div className='flex flex-col justify-end text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <p className='text-white text-lg'>Prioritize UI/UX design and iterate based on user feedback.</p>
                            <div className='flex flex-col items-center p-5 processBorderR ' >
                            <p className='text-white text-6xl colorText bg-tPurple md:w-32 md:h-32 2xl:w-48 2xl:h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>04</p>
                                <p className='text-white text-2xl font-semibold mt-16'>User-Centric Design</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-start text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <div className='flex flex-col items-center p-5 processBorderF ' >
                                <p className='text-white text-2xl font-semibold mb-16'>Client Collaboration & Deployment</p>
                                <p className='text-white text-6xl colorText bg-tPurple w-48 h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>05</p>
                            </div>
                            <p className='text-white text-lg'>Maintain open communication, gather feedback, and deploy the solution.</p>
                        </div>

                        <div className='flex flex-col justify-end text-center w-1/2 md:w-1/3 2xl:w-1/6 p-3'>
                            <p className='text-white text-lg'>Provide ongoing support, monitor performance, and optimize for sustained success.</p>
                            <div className='flex flex-col items-center p-5 processBorderR ' >
                            <p className='text-white text-6xl colorText bg-tPurple w-48 h-48 flex items-center justify-center rounded-full border-8 border-bPurple'>06</p>
                                <p className='text-white text-2xl font-semibold mt-16'>Post-Launch Support</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkProcess;