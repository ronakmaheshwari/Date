export default function CardWrapper({ children }) {
    return (
        <div className="bg-orange-400 flex w-full max-w-[500px] h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex-col justify-start items-center space-y-6 p-4 sm:p-5 md:p-6">
            {children}
        </div>
    );
}