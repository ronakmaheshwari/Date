export default function Heading({ title }) {
    return (
        <h1 className="text-white font-bold text-center tracking-wide w-full p-2 text-3xl sm:text-4xl md:text-5xl font-sans min-h-[100px] sm:min-h-[120px] md:min-h-[150px]">
            {title}
        </h1>
    );
}
