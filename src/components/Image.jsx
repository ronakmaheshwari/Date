export default function ImageBox({ link, alt }) {
    return (
        <div className="flex justify-center items-center w-full max-w-sm overflow-hidden rounded-lg p-2 sm:p-4 md:p-6">
            <img 
                src={link} 
                alt={alt} 
                className="w-full h-auto object-cover bg-transparent max-h-60 sm:max-h-80 md:max-h-96"
                onError={(e) => console.error("Image failed to load:", e.target.src)}
            />
        </div>
    );
}
