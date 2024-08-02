
export default function FeatureCard(props: any) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow w-full">
      <div className="px-4 py-5 sm:px-6 bg-slate-50">
        <span className="text-slate-950 text-4xl font-bold px-2 py-1 rounded ">
          We
        </span>
        <span className="ml-2 text-6xl text-red-500 font-bold sm:text-xl md:text-2xl lg:text-3xl">
          {props.heading}
        </span>
      </div>
      <div className="flex-grow font-medium hover:scale-105 bg-slate-50 px-4 py-5 sm:p-6 text-base sm:text-lg md:text-xl lg:text-xl">
        {props.content}
      </div>

      {/* <div className="flex flex-row"> */}
        <img src={props.image} alt="Image Description" />
      {/* </div> */}
    </div>
  );
}
