import { Github, MailOpen, MapPin, Twitter } from "lucide-react";
import Header from "../common/Header";
import Description from "../common/Description";
import Button from "../common/Button";
import Tooltip from "../common/Tooltip";
import user from "../../user-data.json";


export function Profile() {
    return (
        <div>
            <div className="flex justify-center items-center gap-x-4 p-3">
                <div className="flex-1 space-y-2">
                    <Header>{user.profile.name}</Header>
                    <ProfileDescription />
                </div>
                <ProfileImage />
            </div>
            <div className="mx-5">
                <ProfileLinks />
            </div>
        </div>
    );
}

export const ProfileDescription = () => {
    return (
        <Description>
            {user.profile.description ?? null}
            {user.profile!.location && (
                <div className="max-w-md text-base text-neutral-600 flex items-center gap-x-2 mt-3">
                    <MapPin size={20} className="inline" />
                    <p className="font-inter mt-1">{user.profile.location}</p>
                </div>
            )}
        </Description>
    );
};

export const ProfileLinks = () => {
    return (
        <div className="flex gap-x-3 text-gray-600 pt-2">
            {user.profile.medium.map((medium) => (
                <Tooltip content={medium.name}>
                    <ProfileLinkButton link={medium.link}>
                        {medium.name === "Github" ? (
                            <Github strokeWidth={1.75} />
                        ) : medium.name === "Twitter" ? (
                            <Twitter strokeWidth={1.75} />
                        ) : (
                            <MailOpen />
                        )}
                    </ProfileLinkButton>
                </Tooltip>
            ))}
            <Tooltip content="Email">
                {user.profile.email && <MailButton />}
            </Tooltip>
        </div>
    );
};

export const ProfileImage = () => {
    return (
        <div className="size-28">
            <img className="w-full h-full rounded-xl" src={user.profile.image} alt="profile" />
        </div>
    );
};

export const MailButton = () => {
    return (
        <a href={user.profile.email!.link} target="_blank">
            <Button>
                <MailOpen />
            </Button>
        </a>
    );
};

export const ProfileLinkButton = ({
    link,
    children,
}: {
    link: string;
    children: React.ReactNode;
}) => {
    return (
        <a className="" href={link} target="_blank">
            <Button>{children}</Button>
        </a>
    );
};
