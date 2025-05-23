import backgroundImage from '/assets/bella-on-chair.jpg';
import headshot from '/assets/headshot-1.jpg';

export function UnderConstructionPage() {

    return (
        <>
            <style>
                {`
                    @keyframes slideDown {
                        from {
                            transform: translateY(-100%);
                        }
                        to {
                            transform: translateY(0);
                        }
                    }
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }         
                    @media (max-width: 768px) {
                        .mobile-font {
                            font-size: .65rem !important;
                            padding: 0vh 20px !important;
                        }
                        .mobile-headshot {
                            width: 45% !important;
                            border: 3px solid white !important;
                        }
                    }
                     
                `}
            </style>
            <div style={{
                position: 'relative',
                height: '98vh',
                width: '100%',
                overflow: 'hidden',
            }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '90%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        boxShadow: '0px 10px 10px rgba(0, 0, 0, .5)',
                        animation: 'slideDown 2s ease-in-out',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className='mobile-font'
                        style={{
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: 'white',
                            maxWidth: '600px',
                            textAlign: 'center',
                            padding: '0vh 20px',
                        }}
                    >
                        <img
                            src={headshot} // Replace with the actual headshot image path
                            alt="Headshot"
                            className='mobile-headshot'
                            style={{
                                width: '30%',
                                borderRadius: '50%',
                                border: '5px solid white',
                                objectFit: 'cover',
                                objectPosition: '50% 20%',
                            }}
                        />
                        <h2 style={{
                            fontSize: '2rem',
                            marginBottom: '10px',
                            animation: 'fadeIn 1.5s ease-in-out forwards',
                        }}>
                            Emily Lim
                        </h2>
                        <p>
                            is a software engineer and writer based in Virginia,
                            <br />represented by Nalini Akolekar of <br />
                            <a href='https://www.spencerhillassociates.com/'>Spencerhill Associates</a>.
                        </p>
                        <p>
                            Her short fiction has been published in Sweet Tree Review, Bartleby, and Corvid Queen, and her latest novel, MERGE CONFLICT, was selected for the 2024 SmoochPit Mentorship Program.
                            <br />When not staring at a laptop screen, she enjoys gardening, running Dungeons & Dragons campaigns, and attempting overly ambitious sewing projects.
                        </p>
                        <p>
                            Website under construction.
                        </p>
                        <p>
                            We have our best cats on the case.
                        </p>
                    </div>

                </div>

                <div
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'center 90%', // 75% from the top
                        backgroundSize: 'cover', // or 'contain', 'auto' etc.
                        backgroundRepeat: 'no-repeat', // Optional
                        height: '98vh', // Adjust as needed
                        width: '100%',
                    }}
                />
            </div >

        </>

    )
}