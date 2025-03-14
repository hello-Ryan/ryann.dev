import { differenceInMonths, differenceInYears, format, sub } from "date-fns";

export interface IExperience {
    title: string;
    location: string;
    employmentType: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    showDuration: boolean;
    tags?: string[];
}

function ExperienceCard({ experience }: { experience: IExperience }) {
    const {
        title,
        location,
        company,
        startDate,
        endDate,
        employmentType,
        description,
        tags,
        showDuration,
    } = experience;

    const currentDate = new Date();
    const durationInMonths =
        differenceInMonths(endDate ?? currentDate, startDate) + 1;
    const years = Math.floor(durationInMonths / 12);
    const months = durationInMonths % 12;

    console.log(startDate);

    const formattedDate = (date: Date) => {
        return `${format(date, "MMM yyy")}`;
    };

    return (
        <div className="rounded-sm p-2 text-sm hover:cursor-pointer hover:bg-gray-300">
            <p className="font-semibold">{title}</p>
            <p>
                {company} &middot; {employmentType}
            </p>
            <div className="text-gray-600">
                <p>
                    {formattedDate(startDate)} -{" "}
                    {endDate ? formattedDate(endDate) : "current"}
                    {showDuration
                        ? ` ·
                          ${
                              years > 0
                                  ? `${years} yr${years !== 1 ? "s" : ""} `
                                  : ""
                          }${
                              months > 0
                                  ? `${months} mo${months !== 1 ? "s" : ""}`
                                  : ""
                          }`
                        : ""}
                </p>
                <p>{location}</p>
            </div>
        </div>
    );
}

export default function Experience({
    experiences,
}: {
    experiences: IExperience[];
}) {
    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-2">
            {experiences.map((exp, i) => (
                <>
                    <ExperienceCard experience={exp} />
                </>
            ))}
        </div>
    );
}
