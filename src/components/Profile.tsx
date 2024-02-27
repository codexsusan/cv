import { Github, LocateFixed, MailOpen } from "lucide-react";
import Button from "./Button";
import Description from "./Description";
import Header from "./Header";

interface ProfileProps {
    name: string;
    description: string;
    location: string;
    image: string;
    medium: {
        github: { name: string; link: string };
        email: { name: string; link: string };
    };
}

function Profile({ profile }: { profile: ProfileProps }) {
    return (
        <div className="flex justify-between items-center gap-x-4 p-3">
            <div className="flex-1 space-y-2">
                <Header>{profile.name}</Header>
                <Description>
                    {profile.description}
                    <div className="max-w-md font-light text-base tracking-wider text-neutral-600 flex items-center gap-x-2 mt-3">
                        <LocateFixed size={24} className="inline" />
                        <p className="font-inter mt-1">{profile.location}</p>
                    </div>
                </Description>
                <div className="flex gap-x-3 text-gray-600 pt-2">
                    <a className="" href={profile.medium.github.link} target="_blank">
                        <Button>
                            <Github strokeWidth={1.75} />
                        </Button>
                    </a>
                    <a href={profile.medium.email.link} target="_blank">
                        <Button>
                            <MailOpen />
                        </Button>
                    </a>
                </div>
            </div>
            <div className="size-28">
                <img
                    className="w-full h-full rounded-xl"
                    src={profile.image}
                    alt="profile"
                />
            </div>
        </div>
    );
}

export default Profile;
