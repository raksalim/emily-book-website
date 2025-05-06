import backgroundImage from '../../assets/EmilyWithBellaWebsite.jpg';
import headshot from '../../assets/headshot.jpg';

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
                            font-size: 20px !important;
                        }
                    }
                     
                `}
            </style>
            <div style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
            }}>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '50%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        animation: 'slideDown 2s ease-in-out'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            textAlign: 'center',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        <style>

                        </style>
                        <span className="mobile-font">
                            Emily's Website is Coming Soon!
                        </span>
                    </div>
                    <div
                        style={{
                            animation: 'fadeIn 1.5s ease-in-out 0.5s forwards', // 2s delay to match the slideDown animation
                            position: 'absolute',
                            top: '80%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            opacity: 0,
                            overflow: 'hidden',
                            border: '5px solid white',
                        }}
                    >
                        <img
                            src={headshot} // Replace with the actual headshot image path
                            alt="Headshot"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: 'center 90%', // 75% from the top
                        backgroundSize: 'cover', // or 'contain', 'auto' etc.
                        backgroundRepeat: 'no-repeat', // Optional
                        height: '100vh', // Adjust as needed
                        width: '100%',
                    }}
                />
            </div >

        </>

    )
}