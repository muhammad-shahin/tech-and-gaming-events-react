import CustomPricingCard from '../Components/CustomPricingCard';
export default function PricingCard() {
  const pricingType1Benefits = [
    'Access to all event sessions and workshops',
    'Complimentary breakfast, lunch, and dinner',
    'High-speed Wi-Fi access during the event',
    'Access to a dedicated networking lounge',
    'Exclusive access to the event mobile app',
    'Swag bag with event merchandise',
    'Priority seating at keynote speeches',
    'Opportunity to participate in Q&A sessions',
    'Access to event recordings and materials',
  ];
  const pricingType2Benefits = [
    'Priority check-in and badge pickup',
    'Access to VIP networking cocktail party',
    'Exclusive access to premium content sessions',
    'Reserved seating in the main auditorium',
    'Opportunity to schedule one-on-one meetings with event speakers',
    'Personalized event concierge for assistance',
    'Discounts on future event registrations',
    'Invitation to a special post-event webinar with speakers',
    'Access to a dedicated event forum for networking',
  ];

  return (
    <section className='flex flex-wrap justify-center items-center gap-6 my-12 px-[5%] lg:px-0'>
      <CustomPricingCard
        points={pricingType1Benefits}
        title='Goof For Participant Under 1000'
        price={5000}
      />
      <CustomPricingCard
        points={pricingType2Benefits}
        title='Goof For Participant Under 2500'
        price={'8000'}
      />
      <CustomPricingCard
        points={pricingType2Benefits}
        title='Looking For Custom Pricing For Your Event? '
        price='Custom'
      />
    </section>
  );
}
