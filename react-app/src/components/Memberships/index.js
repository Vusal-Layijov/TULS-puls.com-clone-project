import top from './top3.png'
import bottom from './bottom.png'
import MembershipOp from './MembershipOp'
import './index.css'

export default function Membership () {
    const bronzeBenefits = [
        'Basic access to all services',
        'Access to community forum',
        'Free trial for new services',
    ];

    const silverBenefits = [
        'Unlimited access to all services',
        'Dedicated account manager',
        'Free trial for new services',
    ];

    const goldBenefits = [
        'Unlimited access to all services, priority support',
        'Custom analytics dashboard',
        'Free trial for new services',
    ];

    const handlescroll = () =>{
        let section = document.getElementById('uniq')
        section.scrollIntoView({behavior:'smooth'})
    }

    return (
        <>
        <section>
            <div id='homePage-previewImage' style={{ backgroundImage: `url(${top})`, backgroundSize: 'cover', height: '80vh' }}>
                <h1>A single solution for all your needs</h1>
                <p>Join now and save 15%</p>
                <button className='plansbut' onClick={handlescroll} >See Plans Pricing</button>
            </div>
        </section>
        <section>
            <div id='homePage-previewImage' style={{ backgroundImage: `url(${bottom})`, backgroundSize: 'cover', height: '45vh' }}>
                {/* <div style={{ paddingTop: '100px' }}>
                </div> */}
            </div>
        </section>
        <section>
                <div id='uniq' className="membership-options">
                    <MembershipOp
                        type='Bronze'
                        price={9.99}
                        benefits='Basic access to all services'
                        extraBenefits='Access to community forum'
                        moreBenefits={bronzeBenefits}
                        id={1}
                    />
                    <MembershipOp
                        type='Silver'
                        price={19.99}
                        benefits='Unlimited access to all services'
                        extraBenefits='Dedicated account manager'
                        moreBenefits={silverBenefits}
                        id={2}
                    />
                    <MembershipOp
                        type='Gold'
                        price={29.99}
                        benefits='Unlimited access to all services, priority support'
                        extraBenefits='Custom analytics dashboard'
                        moreBenefits={goldBenefits}
                        id={3}
                    />
                </div>
        </section>
        </>
    )
}