import Image from 'next/image';

export default function BestSeller() {
  return (
    <section className='best-seller__container'>
      <div className='heading'>
        <h1>Best Seller</h1>
        <p>Top 5 Products</p>
      </div>
      <div className='best-seller__card-container'>
        {Array.from(Array(5)).map((_, idx) => (
          <Seller key={_} idx={idx} />
        ))}
      </div>
    </section>
  );
}

const Seller = ({ idx }: { idx: number }) => {
  return (
    <div className='best-seller__card'>
      <h1>{idx + 1}.</h1>
      <div>
        <Image
          src={`/assets/images/best-seller-demo.png`}
          alt=''
          width={35}
          height={35}
        />
      </div>
      <div>
        <h3>Haribo Cerise Double 200g</h3>
        <p>
          <span>$2,99</span> $1,99
        </p>
      </div>
    </div>
  );
};
