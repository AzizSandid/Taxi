import CustomButton from "./CustomButton";

const CustomHeader = ({
  title,
}: {
  title: string;
}) => {
    return (
      <section className="h-16 w-full" >
        <div className="flex justify-center items-center h-full w-full px-4 mx-auto">
          <h1 className="text-4xl font-bold text-black text-center">
            {title}
          </h1>
        </div>
      </section>
    );
  }
export default CustomHeader;
