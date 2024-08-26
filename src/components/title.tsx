
interface ChildComponentProps {
    title: string;
}
export const TitleComponent: React.FC<ChildComponentProps> = ({ title })  => {
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl font-bold font-notokufi"> { title } </h1>
            <div className="flex flex-row gap-3">
                <div className="w-24 h-2 bg-sky-400 rounded-lg"></div>
                <div className="w-6 h-2 bg-sky-400 rounded-lg"></div>
                <div className="w-6 h-2 bg-sky-400 rounded-lg"></div>
            </div>
        </div>
    )
}