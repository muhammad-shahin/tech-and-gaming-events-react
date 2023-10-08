const RecentEvents = () => {
  return (
    <div className='bg-secondaryColor rounded-lg md:w-[600px] mx-auto md:h-[350px] h-[250px] relative pl-12 pr-8 py-5 flex justify-between items-start'>
      <div className='rotate-[-90deg] absolute md:top-[159px] top-[112px] left-[-115px] md:left-[-160px]'>
        <p className='uppercase text-[12px] text-center md:text-[16px] font-roboto font-medium border-2 border-[#4b4848] rounded-t-lg px-3 py-1 md:w-[350px] w-[250px] text-white bg-bgColor'>
          5 Morris RD. Long Beach, NY 11561
        </p>
      </div>
      <div className='text-bgColor'>
        <p className='font-squadaOne md:text-[28px]'>#084629</p>
        <h2 className='uppercase font-squadaOne font-bold md:text-[42px] mt-5 mb-4'>
          Star Hackation
        </h2>
        <p className='font-roboto font-normal text-[12px] md:text-[18px] uppercase md:max-w-[300px] max-w-[150px]'>
          20 August 2023 - final pitching of projects at the cyber conference
          day
        </p>
        <p className='font-roboto font-normal md:text-[18px] uppercase leading-none mt-10'>
          Prize Fund
        </p>
        <div className='flex md:flex-row flex-col w-full md:justify-start justify-center md:items-center items-start md:gap-20 gap-1'>
          <p className='uppercase font-squadaOne  md:text-[38px]'>$150 000</p>
          <p className='font-squadaOne md:text-[28px]'>#084629</p>
        </div>
      </div>
      {/* ticket divider section */}
      <hr className='w-[2px] h-[100%] bg-transparent border border-l-[2px] border-dotted text-bgColor' />
      <div className='bg-bgColor w-[50px] h-[50px] rounded-full absolute top-[-30px] right-[135px] md:top-[-20px] md:right-[192px]'></div>
      <div className='bg-bgColor w-[50px] h-[50px] rounded-full absolute bottom-[-30px] right-[135px] md:bottom-[-20px] md:right-[192px]'></div>

      <div className='flex flex-col justify-center items-center text-bgColor'>
        <img
          className='md:w-[120px] w-[50px] md:h-[100px] m-0'
          src='/qrcode.svg'
          alt=''
        />
        <p className='font-roboto font-medium text-[12px] md:text-[18px] uppercase leading-none mt-10'>
          Live Participant
        </p>
        <p className='uppercase font-squadaOne  md:text-[48px]'>23,184</p>
        <button className='md:px-5 md:py-3 py-1 rounded-lg bg-bgColor text-white md:w-full w-[90px] mt-8 hover:bg-primaryColor hover:text-bgColor duration-500'>
          GO
        </button>
      </div>
    </div>
  );
};

export default RecentEvents;
