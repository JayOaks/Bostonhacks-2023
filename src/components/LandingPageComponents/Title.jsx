import title from '../../assets/images/title.svg';
import applyButton from '../../assets/images/applyButton.svg';

const Title = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-text-primary z-50">
      <div className="relative flex items-center justify-center">
        <img className="w-[60vw] md:w-[30vw] scale-75" src={title} alt="Boston Hacks" />
      </div>
      <button>
        <img src={applyButton} className="scale-75 max-sm:scale-50 max-sm:-mb-6" alt="" />
      </button>
    </section>
  );
};

export default Title;
