export default function FeatureCard(props:any) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow w-full">
      <div className="px-4 py-5 sm:px-6 bg-slate-50">
        <span className="text-indigo-600 px-2 py-1 rounded text-sm sm:text-base md:text-lg lg:text-xl">
          WE
        </span>
        <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {props.heading}
        </span>
      </div>
      <div className="flex-grow bg-slate-100 px-4 py-5 sm:p-6 text-base sm:text-lg md:text-xl lg:text-xl">
        {props.content}
      </div>
    </div>
  );
}
