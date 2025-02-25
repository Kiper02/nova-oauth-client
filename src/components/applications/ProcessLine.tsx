interface IProcessLineProps {
    percent: number;
  }
  
  export default function ProcessLine({ percent = 0 }: IProcessLineProps) {
    return (
      <div className="grid place-items-center relative">
        <div
          className="absolute bottom-[90px] left-[calc(50% - 70px)] -translate-x-1/ w-[70px] h-[6px] bg-[#D9D9D9] rounded-md overflow-hidden"
        >
          <div
            style={{
              width: `${percent}%`,
              height: '100%',
              backgroundColor: 'black',
            }}
            className="transition-width duration-500"
          />
        </div>
      </div>
    );
  }
  